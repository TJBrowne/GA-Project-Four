const { User, FoodPlace, Allergy, UserAllergy, FoodAllergy } = require('./models');

const main = async () => {

  const chris = await User.create({
    username: "chrisjr",
    password: "123456",
    email: "chrisb@gmail.com"
  });

  const bigDaddy = await FoodPlace.create({
    name: "Big Daddy'\s",
    address: "2454 Broadway, New York NY, 10024",
    allergyFriendly: "Dairy-Free Options, Gluten-Free Options, Nut-Free Kitchen"   
  });
  const bigDaddyTwo = await FoodPlace.create({
    name: "Big Daddy'\s",
    address: "239 Park Ave. South",
    allergyFriendly: "Dairy-Free Options, Gluten-Free Options, Nut-Free Kitchen"   
  });
  const bistango = await FoodPlace.create({
    name: "Bistango",
    address: "415 3rd. Ave., New York, NY 10016", 
    allergyFriendly: "Dairy-Free Options, Gluten-Free Options, Nut-Free Options"
  });
  const bistangoTwo = await FoodPlace.create({
    name: "Bistango",
    address: "145 E. 50th St., New York, NY",
    allergyFriendly: "Dairy-Free Options, Gluten-Free Options, Nut-Free Options"   
  });
  const blueSmoke = await FoodPlace.create({
    name: "Blue Smoke",
    address: "116 East 27th Street, New York, NY ",
    allergyFriendly: "Dairy-Free Options, Gluten-Free Options, Nut-Free Options"   
  });
  const crepes = await FoodPlace.create({
    name: "Crepes Du Nord",
    address: "17 William Street, New York, New York 10004",
    allergyFriendly: "Gluten-Free Options, Peanut-Free Options" 
  });
  const cochinita = await FoodPlace.create({
    name: "Cochinita Tacos:",
    address: "922 Fulton Street, Brooklyn, NY 11238",
    allergyFriendly: "Dairy-Free Options, Gluten-Free Options, Nut-Free Kitchen" 
  });
  const byChloe = await FoodPlace.create({
    name: "By Chloe",
    address: "185 Bleecker St, New York, NY 10012",
    allergyFriendly: "Dairy-Free Kitchen, Gluten-Free Options" 
  });
  const colors = await FoodPlace.create({
    name: "Colors",
    address: "417 Lafayette Street, New York, New York 10003",
    allergyFriendly: "Gluten-Free Kitchen" 
  });
  const huKitchen = await FoodPlace.create({
    name: "Hu Kitchen",
    address: "78 5th Avenue, New York, New York 10011",
    allergyFriendly: "Dairy-Free Kitchen, Gluten-Free Kitchen" 
  });

  const dairy = await Allergy.create({
    name: "Dairy"
  });
  const gluten = await Allergy.create({
    name: "Gluten"
  });
  const soy = await Allergy.create({
    name: "Soy"
  });
  const wheat = await Allergy.create({
    name: "Wheat" 
  });
  const egg = await Allergy.create({
    name: "Egg" 
  });
  const peanut = await Allergy.create({
    name: "Peanut"  
  });
  const seafood = await Allergy.create({
    name: "Seafood"  
  });
  const sesame = await Allergy.create({
    name: "Sesame"  
  });
  const treeNut = await Allergy.create({
    name: "Tree Nut"  
  });
  const sulfite = await Allergy.create({
    name: "Sulfite"   
  });

  await bigDaddy.addAllergy(dairy);
  await bigDaddy.addAllergy(gluten);
  await bigDaddy.addAllergy(treeNut);

  await bigDaddyTwo.addAllergy(dairy);
  await bigDaddyTwo.addAllergy(gluten); 
  await bigDaddyTwo.addAllergy(treeNut);

  await bistango.addAllergy(dairy);
  await bistango.addAllergy(gluten);
  await bistango.addAllergy(treeNut);

  await bistangoTwo.addAllergy(dairy);
  await bistangoTwo.addAllergy(gluten);
  await bistangoTwo.addAllergy(treeNut);

  await blueSmoke.addAllergy(dairy);
  await blueSmoke.addAllergy(gluten);
  await blueSmoke.addAllergy(treeNut);

  await crepes.addAllergy(gluten);
  await crepes.addAllergy(peanut);

  await cochinita.addAllergy(dairy);
  await cochinita.addAllergy(gluten);
  await cochinita.addAllergy(treeNut);

  await byChloe.addAllergy(dairy);
  await byChloe.addAllergy(gluten);

  await colors.addAllergy(gluten);

  await huKitchen.addAllergy(dairy);
  await huKitchen.addAllergy(gluten);

  await chris.addAllergy(dairy);
  await chris.addFoodPlace(colors);

  process.exit();
}

main();