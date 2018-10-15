const express = require('express');
const { User, FoodPlace, Allergy, UserAllergy, FoodAllergy } = require('./models');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 5678;
const path = require('path');

const app = express();


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
    response.status(404).send("json body must include username, password");
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





app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
















