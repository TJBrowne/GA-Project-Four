const Sequelize = require('sequelize');

const sequelize = new Sequelize({
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

const Food_Establishment = sequelize.define('foodPlace', {
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
  TYPE: {
    type: Sequelize.TEXT,
  },
});

const UserAllergy = sequelize.define('userAllergy');
const FoodEstAllergy = sequelize.define('foodEstAllergy');

User.belongsToMany(Allergy, { through: UserAllergy });
Allergy.belongsToMany(User, { through: UserAllergy });

Food_Establishment.belongsToMany(Allergy, { through: FoodEstAllergy });
Allergy.belongsToMany(Food_Establishment, { through: FoodEstAllergy });


module.exports = {
  User, 
  Food_Establishment, 
  Allergy,
  sequelize: sequelize
};
