// JavaScript source code

var TotalPrice = 0.00;
var addonprice = 0.00;


document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");

document.getElementById("p1").innerHTML = "Total        $" + parseInt(sessionStorage.getItem("price"));
function myFunction() {


    alert("Thank You For Ordering! Your order of $" + sessionStorage.getItem("price") + " has been accepted. We will delivery it to you shortly.");
    sessionStorage.setItem("price", 0);
    sessionStorage.setItem("OrderCart", "")
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}
function clearing() {
    sessionStorage.setItem("price", 0);
    sessionStorage.setItem("OrderCart", "")
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}



function orderform() {
    addonprice = 13.00;

    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
  
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");

    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Crab cakes.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
        

        
}   

function orderform2() {
    addonprice = 20;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));

    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Truffle Fries.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}

function orderform3() {
    addonprice = 15;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Scallops.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}
function orderform4() {
    addonprice = 22;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Figs.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}

function orderform5() {
    addonprice = 8;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Chips.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}
function orderform6() {
    addonprice = 9;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Mashed Potatoes.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}

function lamb() {
    addonprice = 32;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Rack of Lamb.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}
function beef() {
    addonprice = 40;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Wellington.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}
function ravioli() {
    addonprice = 33;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Ravioli.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}
function duck() {
    addonprice = 33;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Duck Confit.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}

function vodka() {
    addonprice = 14;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Vodka Martini.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}
function drink() {
    addonprice = 10;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Pina Colada.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}
function mojito() {
    addonprice = 12;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Mojito.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}
function bloodymary() {
    addonprice = 10;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Bloody Mary.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}

function lemonsorbet() {
    addonprice = 21;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Lemon Sorbet.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}
function appletarte() {
    addonprice = 19;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Apple Tarte.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}
function goatcheesesouffle() {
    addonprice = 26;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Goat Cheese Souffle.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}
function lavacake() {
    addonprice = 18;
    sessionStorage.setItem("price", parseInt(sessionStorage.getItem("price")) + parseInt(addonprice));
    document.getElementById("p1").innerHTML = "Total        $" + sessionStorage.getItem("price");
    sessionStorage.setItem("OrderCart", document.getElementById("ordercart").innerHTML += "<br /> Lava Cake.\tx1\t" + "($" + addonprice + ")");
    document.getElementById("ordercart").innerHTML = sessionStorage.getItem("OrderCart");
}