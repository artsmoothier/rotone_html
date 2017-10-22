// Get the modal
// var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function popup() {
    var mod = document.getElementById("myModal");
    mod.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function popup_close() {
    var mod = document.getElementById("myModal");
    mod.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        var mod = document.getElementById("myModal");
        mod.style.display = "none";
    }
}