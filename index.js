document.addEventListener("DOMContentLoaded", function() {

    const unoButton = document.getElementById("unoButton");
    const dueButton = document.getElementById("dueButton");
    const treButton = document.getElementById("treButton");
    const quattroButton = document.getElementById("quattroButton");

    unoButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://images6.alphacoders.com/113/1139591.jpg", "_blank");
    });
    dueButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://giffiles.alphacoders.com/211/211786.gif", "_blank");
    });
    treButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://images4.alphacoders.com/126/1264954.jpg", "_blank");
    });
    quattroButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://images8.alphacoders.com/128/1284988.jpg", "_blank");
    });
});
var message = "NON CI PROVARE COGLIONE!";
var message2 = "TI SPACCO LA FACCIA ANIMALE!";
var message3 = "SIII VABBE TI PIACEREBBE!";

function rtclickcheck(keyp){ if (navigator.appName == "Netscape" && keyp.which == 3){ alert(message); return false; }

if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) { alert(message); return false; } }

document.onmousedown = rtclickcheck;
document.addEventListener("keydown", function (event){
if (event.ctrlKey){
    event.preventDefault();
    alert(message3);
}
if(event.keyCode == 123){
    event.preventDefault();
    alert(message2);
}
});