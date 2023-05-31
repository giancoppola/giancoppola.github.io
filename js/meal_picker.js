"use strict";
function getRandomInt(min, max) {
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
const bgAnim = document.getElementById("bg-anim");
bgAnim.appendChild(emoji);
let height = 100;
let rotate = 0;
emojiFall();
function emojiFall() {
    height = -20;
    emoji.innerHTML = getRandomEmoji();
    emoji.style.top = height + 'dvh';
    emoji.style.left = getRandomInt(1, 90) + 'dvw';
    emoji.style.transform = `rotate(${rotate}deg)`;
    bgAnim.appendChild(emoji);
}
setInterval(fall, 10);
function fall() {
    // if emoji is below page extent start again
    if (height >= 100) {
        emojiFall();
    }
    height += 0.2;
    rotate += 0.4;
    emoji.style.top = height + 'dvh';
    emoji.style.transform = `rotate(${rotate}deg)`;
}
function getRandomEmoji() {
    let rand = getRandomInt(0, emojiArr.length);
    return emojiArr[rand];
}
// -------------------------------------------------------------------------------------------------------------------------------------
