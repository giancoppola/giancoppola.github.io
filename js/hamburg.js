window.alert('Work in progress!');

// card overlay events and functions

const jobCards = ['customer-service', 'information-technology', 'sales-marketing', 'comms-legal', 'product-management'];
for (let i=0; i<jobCards.length; i++){
    document.getElementById(`${jobCards[i]}-card`).addEventListener('click', function() {
        let overlay = document.getElementById(`${jobCards[i]}-overlay`);
        let card = document.getElementById(`${jobCards[i]}-card`);
        openOverlay(overlay, card);
    });
    document.getElementById(`${jobCards[i]}-overlay-close`).addEventListener('click', function() {
        let overlay = document.getElementById(`${jobCards[i]}-overlay`);
        let card = document.getElementById(`${jobCards[i]}-card`);
        closeOverlay(overlay, card);
    });
}

const benefitCards = ['arena-tickets', 'employee-credit', 'community-days', 'personal-development', 'flexible-budget', 'company-pension']
for (let i=0; i<benefitCards.length; i++){
    document.getElementById(`${benefitCards[i]}-card`).addEventListener('click', function() {
        let overlay = document.getElementById(`${benefitCards[i]}-overlay`);
        let card = document.getElementById(`${benefitCards[i]}-card`);
        openOverlay(overlay, card);
    });
    document.getElementById(`${benefitCards[i]}-overlay-close`).addEventListener('click', function() {
        let overlay = document.getElementById(`${benefitCards[i]}-overlay`);
        let card = document.getElementById(`${benefitCards[i]}-card`);
        closeOverlay(overlay, card);
    });
}

function closeOverlay(overlay, card) {
    if (window.matchMedia("(max-width: 1080px)").matches) {
        overlay.style.animation = 'closeOverlayMobile 0.2s linear';
    }
    else {
        overlay.style.animation = 'closeOverlay 0.2s linear';
    }
    setTimeout(() => {overlay.classList.add('hide')}, 150);
    card.classList.remove('active');
}

function openOverlay(overlay, card) {
    if (card.classList.contains('active')){
        closeOverlay(overlay, card);
    }
    else {
        overlay.classList.remove('hide');
        if (window.matchMedia("(max-width: 1080px)").matches) {
            overlay.style.animation = 'openOverlayMobile 0.2s linear';
        }
        else {
            overlay.style.animation = 'openOverlay 0.2s linear';
        }
        card.classList.add('active');
    }
}

// language toggle event and function

const langToggle = document.getElementById('language-toggle');
langToggle.addEventListener('click', function() {
    let active = langToggle.getAttribute('active');
    languageToggle(active);
});

function languageToggle(active){
    const englishButton = document.getElementById('language-toggle-text-english');
    const germanButton = document.getElementById('language-toggle-text-german');
    const langToggleInner = document.getElementById('language-toggle-inner');
    if (active === 'english'){
        langToggle.setAttribute('active', 'german');
        langToggleInner.style.animation = 'langToGerman 0.2s linear';
        langToggleInner.style.left = '140px';
        englishButton.classList.remove('active');
        englishButton.classList.add('inactive');
        germanButton.classList.remove('inactive');
        germanButton.classList.add('active');
        langChange('german');
    }
    else if (active === 'german'){
        langToggle.setAttribute('active', 'english');
        langToggleInner.style.animation = 'langToEnglish 0.2s linear';
        langToggleInner.style.left = '0px';
        englishButton.classList.add('active');
        englishButton.classList.remove('inactive');
        germanButton.classList.add('inactive');
        germanButton.classList.remove('active');
        langChange('english');
    }
}

//changing language via JSON

let langObj;
const xmlhttp = new XMLHttpRequest;
xmlhttp.onload = function() {
    const obj = JSON.parse(this.responseText);
    langObj = obj;
  }
xmlhttp.open("GET", "../JSON/hamburg.json");
xmlhttp.send();

function langChange(lang){
    if (lang === 'english'){
        let node;
        for (items in langObj){
            node = document.getElementById(items);
            node.innerHTML = langObj[items].english;
        }
    }
    else if (lang === 'german'){
        let node;
        for (items in langObj){
            node = document.getElementById(items);
            node.innerHTML = langObj[items].german;
        }
    }
}