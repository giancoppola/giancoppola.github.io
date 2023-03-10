// veggie meal arrays
quick_veg_meals = ['Pastina', 'Courgettes and Eggs', 'Spicy Aubergine'];
long_veg_meals = ['Veggie Lasagne', 'Parmigiana', 'Leek and Potato Soup'];
any_veg_meals = quick_veg_meals.concat(long_veg_meals);

// meat meal arrays
quick_meat_meals = ['Cotolette', 'Spice Tailor Curry', 'Massaman Curry', 'Sea Bass',
                    'Carbonara', 'Chinese Rice Soup'];
long_meat_meals = ['Chilli', 'Roast', 'Lasagne', 'Haddock and Pea Risotto',
                    'Air Fryer Rotisserie', 'Nagi Chicken', 'Chicken Soup'];
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
    document.getElementById("meal-text").innerHTML = quick_veg_meals[choice];
    document.getElementById("modal-icon").classList.remove("hide");
    document.getElementById("convo").style.cursor = "pointer";
    document.getElementById("convo").style.pointerEvents = "auto";
    alert_message.innerHTML = "";
  }
  else if (meat_active == true) {
    meals_length = quick_meat_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("meal-text").innerHTML = quick_meat_meals[choice];
    document.getElementById("modal-icon").classList.remove("hide");
    document.getElementById("convo").style.cursor = "pointer";
    document.getElementById("convo").style.pointerEvents = "auto";
    alert_message.innerHTML = "";
  }
  else if (any_active == true) {
    meals_length = quick_any_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("meal-text").innerHTML = quick_any_meals[choice];
    document.getElementById("modal-icon").classList.remove("hide");
    document.getElementById("convo").style.cursor = "pointer";
    document.getElementById("convo").style.pointerEvents = "auto";
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
    document.getElementById("meal-text").innerHTML = long_veg_meals[choice];
    document.getElementById("modal-icon").classList.remove("hide");
    document.getElementById("convo").style.cursor = "pointer";
    document.getElementById("convo").style.pointerEvents = "auto";
    alert_message.innerHTML = "";
  }
  else if (meat_active == true) {
    meals_length = long_meat_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("meal-text").innerHTML = long_meat_meals[choice];
    document.getElementById("modal-icon").classList.remove("hide");
    document.getElementById("convo").style.cursor = "pointer";
    document.getElementById("convo").style.pointerEvents = "auto";
    alert_message.innerHTML = "";
  }
  else if (any_active == true) {
    meals_length = long_any_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("meal-text").innerHTML = long_any_meals[choice];
    document.getElementById("modal-icon").classList.remove("hide");
    document.getElementById("convo").style.cursor = "pointer";
    document.getElementById("convo").style.pointerEvents = "auto";
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
    document.getElementById("meal-text").innerHTML = any_veg_meals[choice];
    document.getElementById("modal-icon").classList.remove("hide");
    document.getElementById("convo").style.cursor = "pointer";
    document.getElementById("convo").style.pointerEvents = "auto";
    alert_message.innerHTML = "";
  }
  else if (meat_active == true) {
    meals_length = any_meat_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("meal-text").innerHTML = any_meat_meals[choice];
    document.getElementById("modal-icon").classList.remove("hide");
    document.getElementById("convo").style.cursor = "pointer";
    document.getElementById("convo").style.pointerEvents = "auto";
    alert_message.innerHTML = "";
  }
  else if (any_active == true) {
    meals_length = any_any_meals.length;
    choice = getRandomInt(0, meals_length);
    document.getElementById("meal-text").innerHTML = any_any_meals[choice];
    document.getElementById("modal-icon").classList.remove("hide");
    document.getElementById("convo").style.cursor = "pointer";
    document.getElementById("convo").style.pointerEvents = "auto";
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

// -------------------------------------------------------------------------------------------------------------------------------------

// JS Animation setup for falling food emojis

emojiArr = ['🍝', '🍜', '🍛', '🍣', '🍱', '🍤', '🍥',
            '🥮', '🥡', '🥟', '🥧', '🥣', '🥗', '🍲',
            '🥘', '🍳', '🧆', '🥙', '🍖', '🍗', '🥩',
            '🥓', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮',
            '🌯'];

let emoji = document.createElement('span');
emoji.setAttribute('id', 'emoji');

let bgAnim = document.getElementById("bg-anim");
bgAnim.appendChild(emoji);

let high = 100;
let rotate = 0;
emojiFall();
function emojiFall(){
  high = -20;
  emoji.innerHTML = getRandomEmoji();
  emoji.style.top = high + 'vh';
  emoji.style.left = getRandomInt(1,90) + 'vw';
  emoji.style.transform = `rotate(${rotate}deg)`;
  bgAnim.appendChild(emoji);
}
setInterval(fall, 10);
function fall(){
  if (high >= 100){emojiFall()}
  high+= 0.2;
  rotate+= 0.4;
  emoji.style.top = high + 'vh';
  emoji.style.transform = `rotate(${rotate}deg)`;
}
function getRandomEmoji(){
  let rand = getRandomInt(0,emojiArr.length);
  return emojiArr[rand];
}

// -------------------------------------------------------------------------------------------------------------------------------------

// functionality for the modal and pulling meal information from JSON

const modal = document.getElementById("modal");
function modalClose(){
  modal.style.display = "none";
}

let recipeObj;
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const obj = JSON.parse(this.responseText);
  recipeObj = obj;
}
xmlhttp.open("GET", "../JSON/meals.json");
xmlhttp.send();

function recipe(){
  let meal = document.getElementById("meal-text").innerHTML.toLowerCase();
  // console.log(recipeObj[meal].recipe);
  modal.style.display = "flex";
  console.log(recipeObj[meal].image);
  document.getElementById("modal-img").innerHTML = recipeObj[meal].emoji;
  document.getElementById('modal-title').innerHTML = recipeObj[meal].title;
}

// -------------------------------------------------------------------------------------------------------------------------------------

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is inclusive and the minimum is inclusive
}