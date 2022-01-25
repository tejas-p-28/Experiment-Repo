
let url = "http://localhost:1255/city";
const hotelUrl = "http://localhost:1255/hotel";

function getCity(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')
            let text = document.createTextNode(data[i].city_name)
            element.appendChild(text)
            element.value = data[i]._id
            document.getElementById('city').appendChild(element)
        }
    })
}

const getHotels = () => {
    const cityId = document.getElementById('city').value;
    while(hotels.length>0){
        hotels.remove(0)
    }
    fetch(`${hotelUrl}?city=${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data[i])
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')
            let text = document.createTextNode(data[i].name)
            element.appendChild(text)
            document.getElementById('hotels').appendChild(element)
        }
    })
}