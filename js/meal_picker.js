meals = {
  veggie: {
    quick: ['Pastina', 'Courgettes and Eggs', 'Spicy Aubergine'],
    long: ['Veggie Lasagne', 'Parmigiana', 'Leek and Potato Soup'],
    any: function(){return this.quick.concat(this.long)},
  },
  meaty: {
    quick: ['Cotolette', 'Spice Tailor Curry', 'Massaman Curry', 'Sea Bass'],
    long: ['Chilli', 'Roast', 'Lasagne', 'Haddock and Pea Risotto'],
    any: function(){return this.quick.concat(this.long)}
  },
  any: {
    quick: quick_any_meals,
    // long: long_any_meals,
    // any: any_any_meals
  },
}

function any_meals(type) {
  if (type == )
  return meals.veggie.quick.concat(meals.meaty.quick)
}

// any meal arrays
// quick_any_meals = quick_veg_meals.concat(quick_meat_meals);
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

type_dropdown = document.getElementById("type-dropdown")
length_dropdown = document.getElementById("length-dropdown")

function mobileMeals() {
  if (type_dropdown.value == "veggie"){
    veg_active = true;
    meat_active = false;
    any_active = false;
    if (length_dropdown.value == "quick-length"){
      quickMeals();
    }
    else if (length_dropdown.value == "long-length"){
      longMeals();
    }
    else if (length_dropdown.value == "any-length"){
      anyMeals();
    }
    else{
      alert_message.innerHTML = "Please select a length of meal!";
    }
  }
  else if (type_dropdown.value == "meaty"){
    veg_active = false;
    meat_active = true;
    any_active = false;
    if (length_dropdown.value == "quick-length"){
      quickMeals();
    }
    else if (length_dropdown.value == "long-length"){
      longMeals();
    }
    else if (length_dropdown.value == "any-length"){
      anyMeals();
    }
    else{
      alert_message.innerHTML = "Please select a length of meal!";
    }
  }
  else if (type_dropdown.value == "any"){
    veg_active = false;
    meat_active = false;
    any_active = true;
    if (length_dropdown.value == "quick-length"){
      quickMeals();
    }
    else if (length_dropdown.value == "long-length"){
      longMeals();
    }
    else if (length_dropdown.value == "any-length"){
      anyMeals();
    }
    else{
      alert_message.innerHTML = "Please select a length of meal!";
    }
  }
  else{
    veg_active = false;
    meat_active = false;
    any_active = false;
    alert_message.innerHTML = "Please select a type of meal!";
  }
}

veg_btn = document.getElementById("veg");
meat_btn = document.getElementById("meat");
any_btn = document.getElementById("any");
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
    meat_btn.classList.remove("active-btn");
    any_btn.classList.remove("active-btn");
    veg_btn.classList.remove("other-active-btn");
    meat_btn.classList.add("other-active-btn");
    any_btn.classList.add("other-active-btn");
  }
  else{
    veg_active = false;
    veg_btn.classList.remove("active-btn");
    veg_btn.classList.remove("other-active-btn");
    meat_btn.classList.remove("other-active-btn");
    any_btn.classList.remove("other-active-btn");
  }
}

function meatActive() {
  if (meat_active !== true){
    veg_active = false;
    meat_active = true;
    any_active = false;
    veg_btn.classList.remove("active-btn");
    meat_btn.classList.add("active-btn");
    any_btn.classList.remove("active-btn");
    veg_btn.classList.add("other-active-btn");
    meat_btn.classList.remove("other-active-btn");
    any_btn.classList.add("other-active-btn");
  }
  else{
    meat_active = false;
    meat_btn.classList.remove("active-btn");
    veg_btn.classList.remove("other-active-btn");
    meat_btn.classList.remove("other-active-btn");
    any_btn.classList.remove("other-active-btn");
  }
}

function anyActive() {
  if (any_active !== true){
    veg_active = false;
    meat_active = false;
    any_active = true;
    veg_btn.classList.remove("active-btn");
    meat_btn.classList.remove("active-btn");
    any_btn.classList.add("active-btn");
    veg_btn.classList.add("other-active-btn");
    meat_btn.classList.add("other-active-btn");
    any_btn.classList.remove("other-active-btn");
  }
  else{
    any_active = false;
    any_btn.classList.remove("active-btn")
    veg_btn.classList.remove("other-active-btn");
    meat_btn.classList.remove("other-active-btn");
    any_btn.classList.remove("other-active-btn");
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is inclusive and the minimum is inclusive
}