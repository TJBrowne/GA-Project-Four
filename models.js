const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/nyc_allergy_free_eats', {
  dialect: 'postgres'
});

const User = sequelize.define('user', {
  username: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  email: {
    type: Sequelize.TEXT,
  },
  favorites: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  }
});

const FoodPlace = sequelize.define('foodPlace', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  allergyFriendly: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

const Allergy = sequelize.define('allergy', {
  name: {
    type: Sequelize.TEXT,
  },
});

const UserAllergy = sequelize.define('userAllergy');
const FoodAllergy = sequelize.define('foodAllergy');
const UserFoodPlace = sequelize.define('userFoodPlace');

User.belongsToMany(Allergy, { through: UserAllergy });
Allergy.belongsToMany(User, { through: UserAllergy });

FoodPlace.belongsToMany(Allergy, { through: FoodAllergy });
Allergy.belongsToMany(FoodPlace, { through: FoodAllergy });

User.belongsToMany(FoodPlace, { through: UserFoodPlace});
FoodPlace.belongsToMany(User, { through: UserFoodPlace});

module.exports = {
  User, 
  FoodPlace, 
  Allergy,
  sequelize: sequelize
};
