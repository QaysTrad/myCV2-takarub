//Get the drawer
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("theBody").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById('hell').style.left = "auto";
    document.getElementById('hell').style.right = "auto";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("theBody").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById('hell').style.left = "30%";
    document.getElementById('hell').style.right = "30%";
}


function login(){
    var name = document.getElementById("name").value;
    alert(`Welcome ${name} here :D `);
    modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}