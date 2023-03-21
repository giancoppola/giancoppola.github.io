
const customerServiceOverlay = document.getElementById('customer-service-overlay');
const customerServiceCard = document.getElementById('customer-service-card');
customerServiceCard.addEventListener('click', function() {
    var node = customerServiceOverlay;
    openOverlay(node);
});
const customerServiceOverlayClose = document.getElementById('customer-service-overlay-close');
customerServiceOverlayClose.addEventListener('click', function() {
    var node = customerServiceOverlay;
    closeOverlay(node);
});

function closeOverlay(node) {
    node.classList.add('hide');
}

function openOverlay(node) {
    node.classList.remove('hide');
}