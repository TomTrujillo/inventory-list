const location = document.querySelector('#myLocation');
const info = document.querySelectorAll('.info');
const trailerInput = document.querySelector('#input');
const status = document.querySelector('#status');
const list = document.querySelector('#myOl');
const dateElement = document.getElementById('date');
const add = document.getElementById('addBtn');

// array to store inventory list
let inList = [];

// eventListener for submit event
trailerInput.addEventListener('submit', function(e) {
  e.preventDefault();
  addInfo(info.value);
});

// function to add info
function addInfo(info) {
  if (item !== ' ') {
    const info = {
      name: item 
    };
  
// add obj to inList Array
    inList.push(info);

// clear the input box value
    trailerInput.value = '';
  }
}

// function to render inList to screen
function renderList(inList) {
  // clear everything inside <ol> with class="inventory-items"
  list.innerHTML = '';
}

// create a list item
const li = document.createElement ('li');
li.setAttribute('class', 'item');


// function to add inventory list to local storage
function addToLocalStorage(inList) {
  // convert array to a string and store it
  localStorage.setItem('inList', JSON.stringify(inList));
  //render string to screen
  renderList(inList);


}





//Clearing the list
// function removeAll(){
//   let lst = document.getElementsByTagName("ol");
//     lst[0].innerHTML = "";
// }