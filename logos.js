import Logo from "./Logo.js";
// import logos_details from "./logos_details.js";

const logos_details = [
    ["bitcoin.jpg", "Bitcoin Avenue", "Développement mobile"],
    ["malkyrs.jpg", "Malkyrs", "Jeu Vidéo"],
    ["storigin.jpg", "Storigin", "Conseil stratégie numérique"],
    ["evup.jpg", "EVUP", "Développement Web"],
    ["unep.jpg", "UNEP", "Développement Web"],
    ["redlab.jpg", "RED Lab", "Développement Web"],
    ["meal.jpg", "Meal Express", "Site e-commerce"],
    ["immo.jpg", "Immobilier du coin 50", "Site e-commerce"],
    ["404.jpg", "École 404", "Conseils et Formations"],
    ["espace.jpg", "Espace Projet", "Conseils et Formations"],
    ["normandie.jpg", "Région Normandie", "Conseil stratégie numérique"],
    ["linportant.jpg", "Linportant", "Développement Spécifique"],
    ["stn.jpg", "Startech Normandy", "Conseils et Formations"],
    ["storigin.jpg", "Storigin", "Conseils en stratégie numérique"],
    ["ensicaen.jpg", "ENSICAEN", "Conseils et Formations"],
];

// create an array of logo objects
var logos = [];
for (let data of logos_details) {
    logos.push(new Logo(data[0], data[1], data[2]));
}
console.log(logos);

// create the html output
var html_value = "";
for (let logo of logos) {
    html_value = html_value + logo.render();
}
console.log(html_value);

document.getElementById("input").innerHTML = html_value;
