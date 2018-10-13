const { User, Food_Establishment, Allergy, UserAllergy, FoodEstAllergy } = require('./models');

const main = async () => {
  const bigDaddy = await Food_Establishment.create({
    name: "Big Daddy'\s",
    address: "2454 Broadway, New York NY, 10024",
    allergyFriendly: "Dairy-Free Options, Gluten-Free Options, Nut-Free Kitchen"   
  });
  const bigDaddyTwo = await Food_Establishment.create({
    name: "Big Daddy'\s",
    address: "239 Park Ave. South",
    allergyFriendly: "Dairy-Free Options, Gluten-Free Options, Nut-Free Kitchen"   
  });
  const bistango = await Food_Establishment.create({
    name: "Bistango",
    address: "415 3rd. Ave., New York, NY 10016", 
    allergyFriendly: "Dairy-Free Options, Gluten-Free Options, Nut-Free Options"
  });
  const bistangoTwo = await Food_Establishment.create({
    name: "Bistango",
    address: "145 E. 50th St., New York, NY",
    allergyFriendly: "Dairy-Free Options, Gluten-Free Options, Nut-Free Options"   
  });
  const blueSmoke = await Food_Establishment.create({
    name: "Blue Smoke",
    address: "116 East 27th Street, New York, NY ",
    allergyFriendly: "Dairy-Free Options, Gluten-Free Options, Nut-Free Options"   
  });
  const crepes = await Food_Establishment.create({
    name: "Crepes Du Nord",
    address: "17 William Street, New York, New York 10004",
    allergyFriendly: "Gluten-Free Options, Peanut-Free Options" 
  });
  const cochinita = await Food_Establishment.create({
    name: "Cochinita Tacos:",
    address: "922 Fulton Street, Brooklyn, NY 11238",
    allergyFriendly: "Dairy-Free Options, Gluten-Free Options, Nut-Free Kitchen" 
  });
  const byChloe = await Food_Establishment.create({
    name: "By Chloe",
    address: "185 Bleecker St, New York, NY 10012",
    allergyFriendly: "Dairy-Free Kitchen, Gluten-Free Options" 
  });
  const colors = await Food_Establishment.create({
    name: "Colors",
    address: "417 Lafayette Street, New York, New York 10003",
    allergyFriendly: "Gluten-Free Kitchen" 
  });
  const huKitchen = await Food_Establishment.create({
    name: "Hu Kitchen",
    address: "78 5th Avenue, New York, New York 10011",
    allergyFriendly: "Dairy-Free Kitchen, Gluten-Free Kitchen" 
  });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const dairy = await Allergy.create({
    type: "Dairy"
  });
  const gluten = await Allergy.create({
    type: "Gluten"
  });
  const soy = await Allergy.create({
    type: "Soy"
  });
  const wheat = await Allergy.create({
    type: "Wheat" 
  });
  const egg = await Allergy.create({
    type: "Egg" 
  });
  const peanut = await Allergy.create({
    type: "Peanut"  
  });
  const seafood = await Allergy.create({
    type: "Seafood"  
  });
  const sesame = await Allergy.create({
    type: "Sesame"  
  });
  const treeNut = await Allergy.create({
    type: "Tree Nut"  
  });
  const sulfite = await Allergy.create({
    type: "Sulfite"   
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

  process.exit();
}

main();