const express = require('express');
const { User, FoodPlace, Allergy, UserAllergy, FoodAllergy } = require('./models');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 5678;
const path = require('path');

const app = express();
// Static hosting for built files
app.use("/", express.static("./build/"));
const jwtSecret = 'abc13225566'
app.use(bodyParser.json());

app.get('/api/restaurants', async (request, response) => {
  const foodPlace = await FoodPlace.findAll({});
  response.json(foodPlace);
});

app.get('/api/restaurants/:id', async (request, response) => {
  const eachFoodPlace = await FoodPlace.findOne({
      where: {
          id: request.params.id
      }
  })
  if ( eachFoodPlace === null) {
      response.sendStatus(404);
  } else {
      response.json(eachFoodPlace);
  }
});

app.get('/api/restaurants/:name', async (request, response) => {
  const eachFoodPlace = await FoodPlace.findAll({
    where: {
      name: request.params.name
        // $iLike: `${request.params.name}%`     
    }
  });
  response.json(eachFoodPlace);
});

app.get('/api/user/:username', async (request, response) => {
  const getUser = await User.findOne({
    where: {
      username: request.params.username
    }
  });
  response.json(getUser);
});

app.post('/api/register', async (request, response) => {
  if (!request.body.username || !request.body.password) {
    response.status(404).send("Please include username and password");
    return;
  }
  const existingUser = await User.findOne({
    where: {
      username: request.body.username
    }
  });
  if (existingUser) {
    response.status(409);
    return;
  }
  const encrypted = await bcrypt.hash(request.body.password, 12);
  await User.create({
    username: request.body.username,
    password: encrypted
  });
  const findId = await User.findOne({
    where: {
      username: request.body.username
    }
  });
  const token = jwt.sign({
    userId: findId.id
  }, jwtSecret);
  response.status(200).json(token);
});

app.post('/api/login', async (request, response) => {
  const { username, password } = request.body;
  if (!username || !password) {
    response.status(400).json({
      error: "Login requires a username and password in the request body."
    });
    return;
  }
  const existingUser = await User.findOne({
    where: {
      username: username
    }
  });

  if (existingUser === null) {
    response.status(401).json({
      message: "Invalid username or password."
    });
    return;
  }
  
  const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
  if (isPasswordCorrect) {
    const token = jwt.sign({ userId: existingUser.id }, jwtSecret);
    response.json({
      token: token
    });
  } else {
    response.status(401).json({
      message: "Invalid username or password."
    })
  }
});

app.get('/api/current-user', async (request, response) => {
  const token = request.headers['jwt-token'];
  let verification;
  try{
    verification = jwt.verify(token, jwtSecret);
  }catch(e) {
    console.log(e);
  }
  const findId = await User.findOne({
    where: {
      id: verification.userId
    }
  });
  response.status(200).json(findId);
});

app.put('/api/current-user/:id', async (request, response) => {
  const { username } = request.body;
  const id = request.params.id

  const user = await User.findOne({
    where: {
      id: id
    }
  });

  // console.log(username);
  // console.log(user)

  // if (user) {
  user.username = username;
    // user.password = password;
    // user.email = email;
  // }

  await user.save();

  // const token = jwt.sign({ userId: user.id }, jwtSecret);
  
  response.sendStatus(200);
});

app.delete('/api/user', async (request, response) => {
    const token = request.headers['jwt-token'];
  let verification;
  try{
    verification = jwt.verify(token, jwtSecret);
  }catch(e) {
    console.log(e);
  }
  const removeUser = await User.findOne({
      where: {
          id: verification.userId
      }
  })
  removeUser.destroy();
  response.sendStatus(200).send("User Removed!!!");
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

// In production, any request that doesn't match a previous route
// should send the front-end application, which will handle the route.
if (process.env.NODE_ENV == "production") {
  app.get("/*", function(request, response) {
    response.sendFile(path.join(__dirname, "build", "index.html"));
  });
}
















