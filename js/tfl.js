let searchApiStatus;
let searchResponseObj;

const searchList = document.getElementById("search-list");
const alertText = document.getElementById("alert-text");

function searchBikePoints(){
    let query = document.getElementById("search-query").value;
    fetch(`https://api.tfl.gov.uk/BikePoint/Search?query=${query}`, {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin':'*',}
    }).then(response => {
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

let retrieveApiStatus;
let retrieveResponseObj;

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
        console.log(data)
    })
    .catch(err => console.error(err));
    // google maps api link = https://www.google.com/maps/search/?api=1&query=${lat}%2C${lon}
}