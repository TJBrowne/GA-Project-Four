const express = require('express');
const { User, Food_Establishment, Allergy, UserAllergy, FoodEstAllergy } = require('./models');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 5678;
const path = require('path');

const app = express();

app.use("/", express.static("./build/"));

const jwtSecret = 'abc13225566'

app.use(bodyParser.json());

app.get('/api/characters', async (request, response) => {
  const characters = await Character.findAll({});
  response.json(characters);
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
