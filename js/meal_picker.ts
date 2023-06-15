function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is inclusive and the minimum is inclusive
  }

// -------------------------------------------------------------------------------------------------------------------------------------

// JS Animation setup for falling food emojis

const emojiArr = ['🍝', '🍜', '🍛', '🍣', '🍱', '🍤', '🍥',
                  '🥮', '🥡', '🥟', '🥧', '🥣', '🥗', '🍲',
                  '🥘', '🍳', '🧆', '🥙', '🍖', '🍗', '🥩',
                  '🥓', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮',
                  '🌯'];

let emoji = document.createElement('span');
emoji.setAttribute('id', 'emoji');

const bgAnim = document.getElementById("bg-anim") as HTMLDivElement;
bgAnim.appendChild(emoji);

let height = 100;
let rotate = 0;
emojiFall();

function emojiFall(){
  height = -20;
  emoji.innerHTML = getRandomEmoji();
  emoji.style.top = height + 'dvh';
  emoji.style.left = getRandomInt(1,90) + 'dvw';
  emoji.style.transform = `rotate(${rotate}deg)`;
  bgAnim.appendChild(emoji);
}

setInterval(fall, 10);

function fall(){
    // if emoji is below page extent start again
    if (height >= 100){emojiFall()}
    height+= 0.2;
    rotate+= 0.4;
    emoji.style.top = height + 'dvh';
    emoji.style.transform = `rotate(${rotate}deg)`;
}

function getRandomEmoji(){
  let rand = getRandomInt(0,emojiArr.length);
  return emojiArr[rand];
}

// -------------------------------------------------------------------------------------------------------------------------------------

const vegBtn = document.querySelector("#veggie") as HTMLButtonElement;
const typeAnyBtn = document.querySelector("#Tany") as HTMLButtonElement;
const meatBtn = document.querySelector("#meat") as HTMLButtonElement;
const quickBtn = document.querySelector("#quick") as HTMLButtonElement;
const lengthAnyBtn = document.querySelector("#Lany") as HTMLButtonElement;
const longBtn = document.querySelector("#long") as HTMLButtonElement;

const typeBtnArr: HTMLButtonElement[] = [vegBtn, typeAnyBtn, meatBtn];
const lengthBtnArr: HTMLButtonElement[] = [quickBtn, lengthAnyBtn, longBtn];

typeBtnArr.forEach((node) => {
  node.addEventListener("click", () => {
    activeBtnSelection(node, 'type');
  })
})
lengthBtnArr.forEach((node) => {
  node.addEventListener("click", () => {
    activeBtnSelection(node, 'length');
  })
})

function activeBtnSelection(node: HTMLButtonElement, type: string) {
  if (type === "type") {
    node.classList.toggle('active');
    let newArr: HTMLButtonElement[] = [vegBtn, typeAnyBtn, meatBtn];
    let index = newArr.indexOf(node);
    newArr.splice(index, 1);
    newArr.forEach((item) => {
      item.classList.remove("active");
    })
  }
  else if (type === "length") {
    node.classList.toggle('active');
    let newArr: HTMLButtonElement[] = [quickBtn, lengthAnyBtn, longBtn];
    let index = newArr.indexOf(node);
    newArr.splice(index, 1);
    newArr.forEach((item) => {
      item.classList.remove("active");
    })
  }
}