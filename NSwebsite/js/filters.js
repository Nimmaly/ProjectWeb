//INFORMATIE

var afbeeldingen = document.querySelectorAll("#afbeeldingen article");
for (var i = 0; i < afbeeldingen.length; i++) {
    var afbeelding = afbeeldingen[i];
    console.log("test");
    afbeelding.addEventListener("click", function (e) {
        if (e.target.classList.contains("button4")) {
            console.log("test");
            e.target.parentElement.getElementsByTagName("div")[0].classList.toggle("informatie");
        }
    });
}


//SORTEREN

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Sluit de dropdown wanneer de gebruiker buiten het menu klikt.

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classlist.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

//Bron: Jorik


//popup

var h1 = document.querySelector(".popuphoofd");
var popup = document.querySelector(".popup");

h1.addEventListener("click", function(){ //anonieme functie, alles wat erin staat wordt uitgevoerd on click
    popup.classList.toggle("open") //.toggle = aan en uitzetten van de class
});




