/* https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter */
/* https://www.jqueryscript.net/other/Like-DisLike-Voting-Plugin-With-jQuery-thumbs-js.html */

function active_like() {
    var elem = document.getElementById("like_button");
    elem.classList.add('active');
    elem = document.getElementById("dislike_button");
    elem.classList.remove('active');
    elem = document.getElementById("rating_amount");
    elem.innerHTML = "1";
}

document.getElementById("like_button").addEventListener("click", active_like); //Je pakt ID like button > Click


function active_dislike() {
    var elem = document.getElementById("dislike_button");
    elem.classList.add('active');
    elem = document.getElementById("like_button");
    elem.classList.remove('active');
    elem = document.getElementById("rating_amount");
    elem.innerHTML = "-1";
}

document.getElementById("dislike_button").addEventListener("click", active_dislike);


document.getElementsByTagName("header")[0].style.display = "none"; // Als de pagina wordt geladen verstopt hij header en main
document.getElementsByTagName("main")[0].style.display = "none";

setInterval(function(){ // Na 3000 miliseconden doet ie de functie
    document.getElementById("loader").style.display = "none";
    document.getElementsByTagName("main")[0].style.display = "block";
    document.getElementsByTagName("header")[0].style.display = "block";

},3000);

/* https://www.w3schools.com/howto/howto_css_loader.asp */
/* Robbert Grobben */
