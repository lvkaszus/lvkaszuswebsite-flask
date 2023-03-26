/*
    @lvkaszus : lvkasz.us
    JavaScript Core Script (lvweb-core.js)

    GitHub: https://github.com/lvkaszus/lvkaszuswebsite-core

    "I tried to make my code as less spaghetti as possible :(" - lvkaszus 2023
*/



// Subtitle Phrase Randomizer

function zaktualizujAktualnaFraze() {
    const frazy = [
           "informatyka",
           "sieci komputerowe",
           "technika komputerowa",
           "linux / *nix",
           "programowanie",
           "dj",
           "zabawa",
           "życie"
        ];

    let aktualnaFraza = 0;
    const element = document.querySelector("#logo-description");
    element.textContent = frazy[aktualnaFraza];

    setInterval(() => {
        aktualnaFraza = (aktualnaFraza + 1) % frazy.length;
        element.textContent = frazy[aktualnaFraza];
    }, 1000);
  }
  zaktualizujAktualnaFraze();


// Make me on photo clickable in 'o mnie' page and view photo in new tab

var currentPageURL = window.location.href;

if (currentPageURL === 'https://lvkasz.us/about_me') {
   var jaNaObrazku = document.getElementById("image-me");
   jaNaObrazku.addEventListener("click", function() {
     window.open(this.src);
   });
}


// Display page information to JavaScript Console

console.log('lvkaszusWebsite - version: 4.0 - @lvkaszus : lvkaszus™');
console.log('.');
console.log('Do not try to hack something. ;)');
console.log('.');
