let searchApiStatus;
let searchResponseObj;

const searchList = document.getElementById("search-list");
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
    }
    else{
        alertText.classList.add('hide');
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
            }
            else{
                alertText.classList.add('hide');
            }
            while(searchList.lastElementChild){
                searchList.removeChild(searchList.lastElementChild);
            }
            while(locationDetails.lastElementChild){
                locationDetails.removeChild(locationDetails.lastElementChild);
            }
            for (item of searchResponseObj){
                let searchItem = document.createElement('li');
                searchItem.classList.add('search-item');
                searchItem.setAttribute('data', item.id);
                searchItem.addEventListener("click", () => retrieveBikePoint(searchItem.getAttribute('data')));
                searchItem.innerHTML = item.commonName;
                searchList.appendChild(searchItem);
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
        addMapBtn();
    })
    .catch(err => console.error(err));
}

function addLocationInformation() {
    let numBikes = document.createElement('p');
    numBikes.innerHTML = `Number of available bikes: ${retrieveResponseObj.additionalProperties[6].value}`;
    let normBikes = document.createElement('p');
    normBikes.innerHTML = `Number of standard bikes: ${retrieveResponseObj.additionalProperties[9].value}`;
    let eBikes = document.createElement('p');
    eBikes.innerHTML = `Number of e-bikes: ${retrieveResponseObj.additionalProperties[10].value}`;
    let emptyDocks = document.createElement('p');
    emptyDocks.innerHTML = `Number of empty docks: ${retrieveResponseObj.additionalProperties[7].value}`;
    let brokeDocks = Number.parseInt(retrieveResponseObj.additionalProperties[8].value) -
    (Number.parseInt(retrieveResponseObj.additionalProperties[6].value) + Number.parseInt(retrieveResponseObj.additionalProperties[7].value));
    let brokenDocks = document.createElement('p');
    brokenDocks.innerHTML = `Number of broken docks: ${brokeDocks}`;
    let numDocks = document.createElement('p');
    numDocks.innerHTML = `Total number of docks: ${retrieveResponseObj.additionalProperties[8].value}`;
    locationDetails.appendChild(numBikes);
    locationDetails.appendChild(normBikes);
    locationDetails.appendChild(eBikes);
    locationDetails.appendChild(emptyDocks);
    locationDetails.appendChild(brokenDocks);
    locationDetails.appendChild(numDocks);
}

function addMapBtn() {
    let mapLink = document.createElement('a');
    mapLink.setAttribute('href', `https://www.google.com/maps/search/?api=1&query=${retrieveResponseObj.lat}%2C${retrieveResponseObj.lon}`);
    mapLink.setAttribute('target', '_blank');
    mapLink.innerHTML = 'View location on map';
    locationDetails.appendChild(mapLink);
}