
const customerServiceOverlay = document.getElementById('customer-service-overlay');
const customerServiceOverlayClose = document.getElementById('customer-service-overlay-close');
customerServiceOverlay.addEventListener('click', function() {
    var node = customerServiceOverlay;
    openOverlay(node);
})
customerServiceOverlayClose.addEventListener('click', function() {
    var node = customerServiceOverlay;
    closeOverlay(node);
})

function closeOverlay(node) {
    console.log('here');
    node.classList.add('hide');
}

function openOverlay(node) {
    console.log('here');
    node.classList.remove('hide');
}