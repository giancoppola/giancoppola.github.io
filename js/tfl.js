let searchApiStatus;
let searchResponseObj;

const resultsGrid = document.getElementById("results-grid");
const alertText = document.getElementById("alert-text");
const queryField = document.getElementById('search-query');
queryField.addEventListener('keypress', (event) => {
    if (event.key === ('Enter')){
        searchBikePoints();
    }
    else {
        //pass
    }
})

function searchBikePoints(){
    let query = queryField.value;
    if (query == '') {
        alertText.classList.remove('hide');
        alertText.innerHTML = 'Please enter a search term!'
        resultsGrid.classList.remove('outset-top-border');
        while(resultsGrid.lastElementChild){
            resultsGrid.removeChild(resultsGrid.lastElementChild);
        }
        while(locationDetails.lastElementChild){
            locationDetails.removeChild(locationDetails.lastElementChild);
        }
    }
    else{
        alertText.classList.add('hide');
        resultsGrid.classList.add('outset-top-border');
        fetch(`https://api.tfl.gov.uk/BikePoint/Search?query=${query}`, {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin':'*',}
        })
        .then(response => {
            searchApiStatus = response.status;
            if (searchApiStatus === 200){
                return response.json();
            }
            else{
                console.log('error!')
            }
        })
        .then(data => {
            searchResponseObj = data;
            if (searchResponseObj.length < 1){
                alertText.classList.remove('hide');
                alertText.innerHTML = "No results found!"
                resultsGrid.classList.remove('outset-top-border');

            }
            else{
                alertText.classList.add('hide');
                resultsGrid.classList.add('outset-top-border');
            }
            while(resultsGrid.lastElementChild){
                resultsGrid.removeChild(resultsGrid.lastElementChild);
            }
            while(locationDetails.lastElementChild){
                locationDetails.removeChild(locationDetails.lastElementChild);
            }
            for (item of searchResponseObj){
                let searchItem = document.createElement('div');
                searchItem.classList.add('grid-item');
                searchItem.setAttribute('id', 'grid-item')
                searchItem.setAttribute('data', item.id);
                searchItem.setAttribute('tabindex', '1');
                searchItem.addEventListener("click", () => retrieveBikePoint(searchItem.getAttribute('data')));
                searchItem.innerHTML = item.commonName;
                resultsGrid.appendChild(searchItem);
            }
        })
        .catch(err => console.error(err));
    }
}

let retrieveApiStatus;
let retrieveResponseObj;

const locationDetails = document.getElementById('location-details');

function retrieveBikePoint(id){
    fetch(`https://api.tfl.gov.uk/BikePoint/${id}`, {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin':'*',}
    })
    .then(response => {
        retrieveApiStatus = response.status;
        if (retrieveApiStatus === 200){
            return response.json();
        }
        else{
            console.log("error!")
        }
    })
    .then(data => {
        retrieveResponseObj = data;
        console.log(data);
        while(locationDetails.lastElementChild){
            locationDetails.removeChild(locationDetails.lastElementChild);
        }
        addLocationInformation();
    })
    .catch(err => console.error(err));
}

function addLocationInformation() {
    // location name creation
    let locationName = document.createElement('h2');
    locationName.classList.add('location-name');
    locationName.innerHTML = retrieveResponseObj.commonName;
    // number of bikes creation
    let numBikes = document.createElement('p');
    numBikes.classList.add('grid-item', 'detail');
    numBikes.innerHTML = `Available bikes: ${retrieveResponseObj.additionalProperties[6].value}`;
    // number of standard bikes creation
    let normBikes = document.createElement('p');
    normBikes.classList.add('grid-item', 'detail');
    normBikes.innerHTML = `Standard bikes: ${retrieveResponseObj.additionalProperties[9].value}`;
    // number of e-bikes creation
    let eBikes = document.createElement('p');
    eBikes.classList.add('grid-item', 'detail');
    eBikes.innerHTML = `E-bikes: ${retrieveResponseObj.additionalProperties[10].value}`;
    // map button creation and function
    let mapBtn = document.createElement('button');
    let mapLink = document.createElement('a');
    mapLink.setAttribute('href', `https://www.google.com/maps/search/?api=1&query=${retrieveResponseObj.lat}%2C${retrieveResponseObj.lon}`);
    mapLink.setAttribute('target', '_blank');
    mapLink.innerHTML = 'view location';
    mapLink.classList.add('btn-link');
    mapBtn.classList.add('btn', 'location-link');
    mapBtn.appendChild(mapLink);
    // number of empty docks creation
    let emptyDocks = document.createElement('p');
    emptyDocks.classList.add('grid-item', 'detail');
    emptyDocks.innerHTML = `Empty docks: ${retrieveResponseObj.additionalProperties[7].value}`;
    // number of broken docks creation
    let brokeDocks = Number.parseInt(retrieveResponseObj.additionalProperties[8].value) -
    (Number.parseInt(retrieveResponseObj.additionalProperties[6].value) + Number.parseInt(retrieveResponseObj.additionalProperties[7].value));
    let brokenDocks = document.createElement('p');
    brokenDocks.classList.add('grid-item', 'detail');
    brokenDocks.innerHTML = `Broken docks: ${brokeDocks}`;
    // total number of docks creation
    let numDocks = document.createElement('p');
    numDocks.classList.add('grid-item', 'detail');
    numDocks.innerHTML = `Total docks: ${retrieveResponseObj.additionalProperties[8].value}`;
    // adding them to the div in the correct order
    locationDetails.appendChild(locationName);
    locationDetails.appendChild(numBikes);
    locationDetails.appendChild(normBikes);
    locationDetails.appendChild(eBikes);
    locationDetails.appendChild(mapBtn);
    locationDetails.appendChild(emptyDocks);
    locationDetails.appendChild(brokenDocks);
    locationDetails.appendChild(numDocks);
}