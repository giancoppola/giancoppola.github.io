
// customer service overlay nodes and events
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

// information technology overlay nodes and events
const informationTechnologyOverlay = document.getElementById('information-technology-overlay');
const informationTechnologyCard = document.getElementById('information-technology-card');
informationTechnologyCard.addEventListener('click', function() {
    var node = informationTechnologyOverlay;
    openOverlay(node);
});
const informationTechnologyOverlayClose = document.getElementById('information-technology-overlay-close');
informationTechnologyOverlayClose.addEventListener('click', function() {
    var node = informationTechnologyOverlay;
    closeOverlay(node);
});

// sales marketing overlay nodes and events
const salesMarketingOverlay = document.getElementById('sales-marketing-overlay');
const salesMarketingCard = document.getElementById('sales-marketing-card');
salesMarketingCard.addEventListener('click', function() {
    var node = salesMarketingOverlay;
    openOverlay(node);
});
const salesMarketingOverlayClose = document.getElementById('sales-marketing-overlay-close');
salesMarketingOverlayClose.addEventListener('click', function() {
    var node = salesMarketingOverlay;
    closeOverlay(node);
});

// comms legal overlay nodes and events
const commsLegalOverlay = document.getElementById('comms-legal-overlay');
const commsLegalCard = document.getElementById('comms-legal-card');
commsLegalCard.addEventListener('click', function() {
    var node = commsLegalOverlay;
    openOverlay(node);
});
const commsLegalOverlayClose = document.getElementById('comms-legal-overlay-close');
commsLegalOverlayClose.addEventListener('click', function() {
    var node = commsLegalOverlay;
    closeOverlay(node);
});

// product management overlay nodes and events
const productMgmtOverlay = document.getElementById('product-management-overlay');
const productMgmtCard = document.getElementById('product-management-card');
productMgmtCard.addEventListener('click', function() {
    var node = productMgmtOverlay;
    openOverlay(node);
});
const productMgmtOverlayClose = document.getElementById('product-management-overlay-close');
productMgmtOverlayClose.addEventListener('click', function() {
    var node = productMgmtOverlay;
    closeOverlay(node);
});

function closeOverlay(node) {
    node.style.animation = 'closeOverlay 0.2s linear'
    setTimeout(() => {node.classList.add('hide')}, 150);
}

function openOverlay(node) {
    node.classList.remove('hide');
    node.style.animation = 'openOverlay 0.2s linear'
}