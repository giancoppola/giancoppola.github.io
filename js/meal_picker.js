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

alert_message = document.getElementById("alert")

function quickMeals() {
  if (veg_active == true) {
    meals_length = quick_veg_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("convo").innerHTML = quick_veg_meals[choice];
    alert_message.innerHTML = "";
  }
  else if (meat_active == true) {
    meals_length = quick_meat_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("convo").innerHTML = quick_meat_meals[choice];
    alert_message.innerHTML = "";
  }
  else if (any_active == true) {
    meals_length = quick_any_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("convo").innerHTML = quick_any_meals[choice];
    alert_message.innerHTML = "";
  }
  else {
    alert_message.innerHTML = "Please pick a type of meal!";
  }
}

function longMeals() {
  if (veg_active == true) {
    meals_length = long_veg_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("convo").innerHTML = long_veg_meals[choice];
    alert_message.innerHTML = "";
  }
  else if (meat_active == true) {
    meals_length = long_meat_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("convo").innerHTML = long_meat_meals[choice];
    alert_message.innerHTML = "";
  }
  else if (any_active == true) {
    meals_length = long_any_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("convo").innerHTML = long_any_meals[choice];
    alert_message.innerHTML = "";
  }
  else {
    alert_message.innerHTML = "Please pick a type of meal!";
  }
}

function anyMeals() {
  if (veg_active == true) {
    meals_length = any_veg_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("convo").innerHTML = any_veg_meals[choice];
    alert_message.innerHTML = "";
  }
  else if (meat_active == true) {
    meals_length = any_meat_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("convo").innerHTML = any_meat_meals[choice];
    alert_message.innerHTML = "";
  }
  else if (any_active == true) {
    meals_length = any_any_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("convo").innerHTML = any_any_meals[choice];
    alert_message.innerHTML = "";
  }
  else {
    alert_message.innerHTML = "Please pick a type of meal!";
  }
}

veg_btn = document.getElementById("veg")
root = document.querySelector(':root');

veg_active = false;
meat_active = false;
any_active = false;

function vegActive() {
  if (veg_active !== true){
    veg_active = true;
    meat_active = false;
    any_active = false;
    veg_btn.classList.add("active-btn");
    root.style.setProperty('--veg-after', '" ⌄"');
    root.style.setProperty('--meat-after', '" ⌃"');
    root.style.setProperty('--any-after', '" ⌃"');
  }
  else{
    veg_active = false;
    veg_btn.classList.remove("active-btn");
    root.style.setProperty('--veg-after', '" ⌃"');
  }
}

function meatActive() {
  if (meat_active !== true){
    veg_active = false;
    meat_active = true;
    any_active = false;
    root.style.setProperty('--veg-after', '" ⌃"');
    root.style.setProperty('--meat-after', '" ⌄"');
    root.style.setProperty('--any-after', '" ⌃"');
  }
  else{
    meat_active = false;
    root.style.setProperty('--meat-after', '" ⌃"');
  }
}

function anyActive() {
  if (any_active !== true){
    veg_active = false;
    meat_active = false;
    any_active = true;
    root.style.setProperty('--veg-after', '" ⌃"');
    root.style.setProperty('--meat-after', '" ⌃"');
    root.style.setProperty('--any-after', '" ⌄"');
  }
  else{
    any_active = false;
    root.style.setProperty('--any-after', '" ⌃"');
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is inclusive and the minimum is inclusive
}