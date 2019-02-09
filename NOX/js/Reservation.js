// JavaScript source code
// Get the modal
function Res() {

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
}
var d = new Date();

function ResFin() {
    var Time = document.getElementById('Time').value;
    var Party = document.getElementById('Party').value;
    var Date1 = document.getElementById('Date').value;
    var d1 = new Date(Date1)
    if (d < d1) {
        alert("You have reserved a table on " + Date1 + " at " + Time + " with a party size of " + Party);
    }
    else {
        alert("Invalid reservation. Please select a future date." );
    }

}