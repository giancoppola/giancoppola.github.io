function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is inclusive and the minimum is inclusive
}
// -------------------------------------------------------------------------------------------------------------------------------------
// JS Animation setup for falling food emojis
var emojiArr = ['🍝', '🍜', '🍛', '🍣', '🍱', '🍤', '🍥',
    '🥮', '🥡', '🥟', '🥧', '🥣', '🥗', '🍲',
    '🥘', '🍳', '🧆', '🥙', '🍖', '🍗', '🥩',
    '🥓', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮',
    '🌯'];
var emoji = document.createElement('span');
emoji.setAttribute('id', 'emoji');
var bgAnim = document.getElementById("bg-anim");
bgAnim.appendChild(emoji);
var height = 100;
var rotate = 0;
emojiFall();
function emojiFall() {
    height = -20;
    emoji.innerHTML = getRandomEmoji();
    emoji.style.top = height + 'dvh';
    emoji.style.left = getRandomInt(1, 90) + 'dvw';
    emoji.style.transform = "rotate(".concat(rotate, "deg)");
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
    emoji.style.transform = "rotate(".concat(rotate, "deg)");
}
function getRandomEmoji() {
    var rand = getRandomInt(0, emojiArr.length);
    return emojiArr[rand];
}
// -------------------------------------------------------------------------------------------------------------------------------------
