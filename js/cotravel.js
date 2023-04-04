const designDialog = document.querySelector('#overlay-design-dialog');
const alertArr = document.getElementsByClassName('alert');
for (el of alertArr){
    el.addEventListener('click', function(){
        designDialog.showModal();
    })
}

const burgerMenu = document.querySelector('#home-grid-menu-burger');
burgerMenu.addEventListener('click', function() {
    burgerMenuToggle();
});

function burgerMenuToggle() {
    burgerMenu.classList.toggle('open');
    for (node of burgerMenu.getElementsByTagName('span')){
        node.classList.toggle('open');
    }
}