var d = new Date();
function myFunction() {
    var Date1 = document.getElementById('date').value;
    var d1 = new Date(Date1)
    if (d < d1) {
        alert("We will see you on" + Date1 + ".A Confimration email will be sent out to you");
    }
    else {
        alert("Invalid Date Selected");
    }
    
    
}

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function () {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function () {
    modal2.style.display = "block";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
window.onclick = function () {
    if (event.target == modal) {
        modal2.style.display = "none";
    }
}

var modal3 = document.getElementById('myModal3');
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementsByClassName("close3")[0];
btn3.onclick = function () {
    modal3.style.display = "block";
}
span3.onclick = function () {
    modal3.style.display = "none";
}
window.onclick = function () {
    if (event.target == modal) {
        modal3.style.display = "none";
    }
}

var price = new Array();
price["Chinese New Years"] = "12.99";
price["Regular Buffet"] = "9.99";
price["Premium Buffet"] = "20.99";



function Menu() {
    var item = document.getElementById("menu").value;
    var Quantity = document.getElementById("quantity").value;
    var total = (price[item] * Quantity).toFixed(2);;

    document.getElementById("order").innerHTML = item + "&nbsp;x"+ Quantity;
    document.getElementById("display").innerHTML = "Total € " + total;
}





