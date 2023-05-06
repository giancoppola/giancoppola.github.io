const experienceYear = document.querySelector("#year");
const experienceSection = document.querySelector("#main-experience");
const fullPage = document.body.parentElement;
const experienceDistance = () => { return experienceSection.offsetTop - fullPage.scrollTop };

document.addEventListener("scroll", (event) => {
    let height = experienceDistance();
    if (height < 5 && height > -3790){
        let distance = Math.abs(height);
        if (distance < 5){
            experienceYear.style.top = 0 + "px";
        }
        else{
            experienceYear.style.top = distance + "px";
        }
        const distances = [273, 474, 711, 948, 1185, 1422, 1659, 1896, 2133, 2370, 2607, 2844, 3081, 3318, 3555];
        if (distance < distances[0]){ experienceYear.innerHTML = "2009"; }
        else if (distance > distances[0] && distance < distances[1]){ experienceYear.innerHTML = "2010"; }
        else if (distance > distances[1] && distance < distances[2]){ experienceYear.innerHTML = "2011"; }
        else if (distance > distances[2] && distance < distances[3]){ experienceYear.innerHTML = "2012"; }
        else if (distance > distances[3] && distance < distances[4]){ experienceYear.innerHTML = "2013"; }
        else if (distance > distances[4] && distance < distances[5]){ experienceYear.innerHTML = "2014"; }
        else if (distance > distances[5] && distance < distances[6]){ experienceYear.innerHTML = "2015"; }
        else if (distance > distances[5] && distance < distances[6]){ experienceYear.innerHTML = "2015"; }
        else if (distance > distances[6] && distance < distances[7]){ experienceYear.innerHTML = "2016"; }
        else if (distance > distances[7] && distance < distances[8]){ experienceYear.innerHTML = "2017"; }
        else if (distance > distances[8] && distance < distances[9]){ experienceYear.innerHTML = "2018"; }
        else if (distance > distances[9] && distance < distances[10]){ experienceYear.innerHTML = "2019"; }
        else if (distance > distances[10] && distance < distances[11]){ experienceYear.innerHTML = "2020"; }
        else if (distance > distances[11] && distance < distances[12]){ experienceYear.innerHTML = "2021"; }
        else if (distance > distances[12] && distance < distances[13]){ experienceYear.innerHTML = "2022"; }
        else if (distance > distances[13]){ experienceYear.innerHTML = "2023"; }
        console.log(distance);
    }
});

$(document).ready(function(){
    $('.main-experience-container-roles').slick({
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        appendArrows: $('.main-experience-container-navigation'),
        prevArrow: '<button type="button" class="slick-prev" onclick="yearUpdatePrev()">Previous</button>',
        nextArrow: '<button type="button" class="slick-next" onclick="yearUpdateNext()">Next</button>',
        adaptiveHeight: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 800,
                settings: "unslick",
            }
        ]
    });
});

const mobileYear = document.querySelector("#mobile-year");

const pates = document.querySelector("#pates");
const uob = document.querySelector("#uob");
const heyhuman = document.querySelector("#heyhuman");
const sapient = document.querySelector("#sapient");
const hybrideye = document.querySelector("#hybrideye");
const thingser = document.querySelector("#thingser");
const bluebaboon = document.querySelector("#bluebaboon");
const radancy = document.querySelector("#radancy");

function yearUpdatePrev() {
    if (pates.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2017";
    }
    if (uob.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2009";
    }
    if (heyhuman.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2011";
    }
    if (sapient.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2014";
    }
    if (hybrideye.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2014";
    }
    if (thingser.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2015";
    }
    if (bluebaboon.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2016";
    }
    if (radancy.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2016";
    }
}

function yearUpdateNext() {
    if (pates.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2011";
    }
    if (uob.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2014";
    }
    if (heyhuman.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2014";
    }
    if (sapient.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2015";
    }
    if (hybrideye.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2016";
    }
    if (thingser.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2016";
    }
    if (bluebaboon.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2017";
    }
    if (radancy.classList.contains("slick-active")) {
        mobileYear.innerHTML = "2009";
    }
}


$(document).ready(function(){
    $('.main-projects-container-grid').slick({
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        appendArrows: $('.main-projects-container-navigation'),
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 800,
                settings: "unslick",
            }
        ]
    });
});

$(document).ready(function(){
    $('.main-skillset-container-grid').slick({
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        appendArrows: $('.main-skillset-container-navigation'),
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 800,
                settings: "unslick",
            }
        ]
    });
});

const mobileMedia = window.matchMedia("(max-width: 800px)");
mobileMedia.onchange = (query) => {
    if (query.matches){
        console.log('mobile viewport')
        $('.main-experience-container-roles').slick('refresh');
        $('.main-projects-container-grid').slick('refresh');
        $('.main-skillset-container-grid').slick('refresh');
    }
    else{
        // do nothing
    }
}