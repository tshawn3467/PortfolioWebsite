//Project Meal Maker

//dish factory
const dish = (entree, side, veggie) => {
    return {
    entree,
    side,
    veggie
    }
  };
  
  //random dish creator
  const listEntrees = [['Steak','$12'], ['Salmon', '$15'], ['Chicken', '$10'], ['Pork', '$11']];
  const listSides = ['Potatos', 'Soup', 'Salad', 'Rice'];
  const listVeggies = ['Corn', 'Green Beans', 'Asparagus', 'Carrots'];
  
  function dishCreator(obj)  {
    obj = dish(listEntrees[Math.floor(Math.random() * listEntrees.length)], listSides[Math.floor(Math.random() * listSides.length)], listVeggies[Math.floor(Math.random() * listSides.length)]);
    return obj;
  };
  
  //Create menu for weekdays
  let monday = dishCreator();
  let tuesday = dishCreator();
  let wednesday = dishCreator();
  let thursday = dishCreator();
  let friday = dishCreator();
  let weeklyMenu = [['Monday', monday], ['Tuesday', tuesday], ['Wednesday', wednesday], ['Thursday', thursday], ['Friday', friday]];
  
  //Print menu for the week
  for (i = 0; i < weeklyMenu.length; i++) {
    console.log(weeklyMenu[i][0] + ':');
    console.log(weeklyMenu[i][1].entree[0]);
    console.log(weeklyMenu[i][1].side);
    console.log(weeklyMenu[i][1].veggie);
    console.log(weeklyMenu[i][1].entree[1]);
    console.log();
  }
  
  //Random selection
  let selection = weeklyMenu[Math.floor(Math.random() * weeklyMenu.length)];
  
  console.log(`You chose our special for ${selection[0]}.`);
  console.log(`This comes with ${selection[1].entree[0]} and a side of ${selection[1].side} and ${selection[1].veggie}.`);
  console.log(`Your total comes to ${selection[1].entree[1]}.`);  