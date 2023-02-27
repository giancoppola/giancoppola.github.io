// veggie meal arrays
quick_veg_meals = ['Pastina', 'Courgettes and Eggs', 'Spicy Aubergine'];
long_veg_meals = ['Veggie Lasagne', 'Parmigiana', 'Leek and Potato Soup'];
any_veg_meals = quick_veg_meals.concat(long_veg_meals);

// meat meal arrays
quick_meat_meals = ['Cotolette', 'Spice Tailor Curry', 'Massaman Curry', 'Sea Bass'];
long_meat_meals = ['Chilli', 'Roast', 'Lasagne', 'Haddock and Pea Risotto'];
any_meat_meals = quick_meat_meals.concat(long_meat_meals);

// any meal arrays
quick_any_meals = quick_veg_meals.concat(quick_meat_meals);
long_any_meals = long_veg_meals.concat(long_meat_meals);
any_any_meals = any_veg_meals.concat(any_meat_meals);

function quickVegMeals() {
  meals_length = quick_veg_meals.length
  choice = getRandomInt(0, meals_length)
  console.log(quick_veg_meals[choice])
  document.getElementById("convo").innerHTML = quick_veg_meals[choice]
}

function longVegMeals() {
  meals_length = long_veg_meals.length
  choice = getRandomInt(0, meals_length)
  console.log(long_veg_meals[choice])
  document.getElementById("convo").innerHTML = long_veg_meals[choice]
}

function anyVegMeals() {
  meals_length = any_veg_meals.length
  choice = getRandomInt(0, meals_length)
  console.log(any_veg_meals[choice])
  document.getElementById("convo").innerHTML = any_veg_meals[choice]
}

veg_drop = document.getElementById("veg_buttons");
meat_drop = document.getElementById("meat_buttons");
any_drop = document.getElementById("any_buttons");
root = document.querySelector(':root');

function vegDropDown() {
  if (veg_drop.style.visibility !== "visible"){
    veg_drop.style.visibility = "visible";
    meat_drop.style.visibility = "hidden";
    any_drop.style.visibility = "hidden";
    root.style.setProperty('--veg-after', '" ⌄"')
    root.style.setProperty('--meat-after', '" ⌃"')
    root.style.setProperty('--any-after', '" ⌃"')
  }
  else{
    veg_drop.style.visibility = "hidden";
    root.style.setProperty('--veg-after', '" ⌃"')
  }
}

function meatDropDown() {
  if (meat_drop.style.visibility !== "visible"){
    veg_drop.style.visibility = "hidden";
    meat_drop.style.visibility = "visible";
    any_drop.style.visibility = "hidden";
    root.style.setProperty('--veg-after', '" ⌃"')
    root.style.setProperty('--meat-after', '" ⌄"')
    root.style.setProperty('--any-after', '" ⌃"')
  }
  else{
    meat_drop.style.visibility = "hidden";
    root.style.setProperty('--meat-after', '" ⌃"')
  }
}

function anyDropDown() {
  if (any_drop.style.visibility !== "visible"){
    veg_drop.style.visibility = "hidden";
    meat_drop.style.visibility = "hidden";
    any_drop.style.visibility = "visible";
    root.style.setProperty('--veg-after', '" ⌃"')
    root.style.setProperty('--meat-after', '" ⌃"')
    root.style.setProperty('--any-after', '" ⌄"')
  }
  else{
    any_drop.style.visibility = "hidden";
    root.style.setProperty('--any-after', '" ⌃"')
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is inclusive and the minimum is inclusive
}