const { User, FoodPlace, Allergy, UserAllergy, FoodAllergy } = require('./models');

const main = async () => {

  const sammy = await User.findById(2);
  const allergies = await sammy.getAllergies();
  const restaurants = await restaurants.findBy({
      where: {
          
      }
  })
  console.log(allergies);
  debugger;

  process.exit();
}

main();