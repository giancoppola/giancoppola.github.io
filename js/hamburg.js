const jobCards = ['customer-service', 'information-technology', 'sales-marketing', 'comms-legal', 'product-management'];
for (let i=0; i<jobCards.length; i++){
    document.getElementById(`${jobCards[i]}-card`).addEventListener('click', function() {
        var node = document.getElementById(`${jobCards[i]}-overlay`);
        openOverlay(node);
    });
    document.getElementById(`${jobCards[i]}-overlay-close`).addEventListener('click', function() {
        var node = document.getElementById(`${jobCards[i]}-overlay`);
        closeOverlay(node);
    });
}

const benefitCards = ['arena-tickets', 'employee-credit', 'community-days', 'personal-development', 'flexible-budget', 'company-pension']
for (let i=0; i<benefitCards.length; i++){
    document.getElementById(`${benefitCards[i]}-card`).addEventListener('click', function() {
        var node = document.getElementById(`${benefitCards[i]}-overlay`);
        openOverlay(node);
    });
    document.getElementById(`${benefitCards[i]}-overlay-close`).addEventListener('click', function() {
        var node = document.getElementById(`${benefitCards[i]}-overlay`);
        closeOverlay(node);
    });
}

function closeOverlay(node) {
    node.style.animation = 'closeOverlay 0.2s linear'
    setTimeout(() => {node.classList.add('hide')}, 150);
}

function openOverlay(node) {
    node.classList.remove('hide');
    node.style.animation = 'openOverlay 0.2s linear'
}