/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true */

/*eslint-env browser*/

/*uitvouwen opties*/
var x = document.getElementById("toggle");

function opties() {
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document.getElementById("btn").addEventListener("click", opties);

/*veranderen van text bij klik*/
var y = document.getElementById("btn");

function chanegtext() {
    if (y.innerHTML === "Meer opties") {
        y.innerHTML = "Minder opties";
    } else {
        y.innerHTML = "Meer opties";
    }
}

document.getElementById("btn").addEventListener("click", chanegtext);

