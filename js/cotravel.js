const designDialog = document.querySelector('#overlay-design-dialog');
const alertArr = document.getElementsByClassName('alert');
for (el of alertArr){
    el.addEventListener('click', function(){
        designDialog.showModal();
    })
}