function displayTime(){
    time = new Date();
    // console.log(time);
    //--> it is written to obtain time on the console
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);

let mainMenu = document.querySelector('.mainMenu')
let closeMenu = document.querySelector('.closeMenu')
let openMenu = document.querySelector('.openMenu')

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show() {
  mainMenu.style.display = 'flex',
  mainMenu.style.top = '0px'
}

function close() {
  mainMenu.style.top = '-100%'
}

function updateMap() {
  fetch("data.json")
      .then(response => response.json())
      .then(rsp => {
          // console.log(rsp.data)
          rsp.data.forEach(element => {
              latitude = element.latitude;
              longitude = element.longitude;

              cases = element.users;
              if (cases>255){
                  color = "rgb(0, 204, 255)";
              }

              else{
                  color = `rgb(${cases}, 204, 205)`;
              }

              // Mark on the map
              new mapboxgl.Marker({
                  draggable: false,
                  color: color
              }).setLngLat([longitude, latitude])
              .addTo(map); 
          });
      })
}

updateMap()
