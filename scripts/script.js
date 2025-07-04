// JavaScript Document
console.log("peepee");


var mozaiekafbeelding = document.querySelector (".overig main article:first-of-type img:first-of-type")
var voorkant = document.querySelector (".overig main section:first-of-type article img:nth-of-type(2)")
var achterkant = document.querySelector (".overig main section:first-of-type article img:nth-of-type(3)")
var fotos =["mozaiek-pagina-lego/mnozaiek.jpeg", "mozaiek-pagina-lego/mozaiek-achterkant-lego.jpeg"]
var heartaudio = document.getElementById ("heartaudio")
var hart = document.getElementById ("like-button")
// verander afbeelding van voor naar achterkant en andersom 
function voorkantShow(){
    mozaiekafbeelding.src = fotos [0];
    achterkant.style.border = "1px solid #e2d8d8";
    voorkant.style.border = "1px solid #006DB7";
}

function achterkantShow(){
    mozaiekafbeelding.src = fotos [1];
    achterkant.style.border = "1px solid #006DB7";
    voorkant.style.border = "1px solid #e2d8d8";
}

function heartaudioPlay(){
    heartaudio.play();
}

// activeer het laten zien van de afbeeldingen door erop te klikken
voorkant.addEventListener("click", voorkantShow);
achterkant.addEventListener("click", achterkantShow);
hart.addEventListener ("click", heartaudioPlay);

// const element = document.getElementById('hamburger');
// element.onclick = () => {
//   element.classList.toggle("x");
// };


