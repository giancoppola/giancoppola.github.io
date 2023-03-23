// card overlay events and functions

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