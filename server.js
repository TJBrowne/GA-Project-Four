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
  const foodPlace = await FoodPlace.findAll({});
  response.json(foodPlace);
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




app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
















