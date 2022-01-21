const dt = new Date();
  document.getElementById("date").innerHTML = dt.toLocaleDateString();

// Load event listeners
loadEventListeners();

function loadEventListeners() {
  // Dom load event
  document.addEventListener('DOMContentLoaded', getTasks);

}

// Get tasks from local storage
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(task);
    li.appendChild(t);
    if (inputValue === '') {
    // alert("You must enter a trailer # and status");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    const span = document.createElement("SPAN");
    span.className = "close";
    li.appendChild(span);
  });
}


// Create a new list item when clicking on the "Add" button
function addItem() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  alert("You must enter a trailer # and status");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  const span = document.createElement("SPAN");
  span.className = "remove";
  li.appendChild(span);

  //Store in local storage
  storeTaskInLocalStorage(inputValue);

}

function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function removeAll(){
  alert('Confirm Delete?');
  let lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}
const findMyCity = () => {

  const status =document.querySelector('.status');

  const success = (position) => {
      console.log(position);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

      fetch(geoApiUrl)
      .then(res => res.json())
      .then(data => {
          status.textContent = data.city
      })
  }

  const error = () => {
      status.textContent = "Unable to find your location";
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

document.querySelector('.find-city').addEventListener('click',findMyCity);



