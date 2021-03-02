import Logo from "./Logo.js";
// import logos_details from "./logos_details.js";

export const logos_details = [
    ["404.jpg", "École 404", "Conseils et Formations"],
    ["stn.jpg", "Startech Normandy", "Conseils et Formations"],
    ["storigin.jpg", "Storigin", "Conseil stratégie numérique"],
    ["bitcoin.jpg", "Bitcoin Avenue", "Développement mobile"],
    ["evup.jpg", "EVUP", "Développement Web"],
    ["unep.jpg", "UNEP", "Développement Web"],
    ["redlab.jpg", "RED Lab", "Développement Web"],
    ["meal.jpg", "Meal Express", "Site e-commerce"],
    ["immo.jpg", "Immobilier du coin 50", "Site e-commerce"],
    ["espace.jpg", "Espace Projet", "Conseils et Formations"],
    ["storigin.jpg", "Storigin", "Conseils en stratégie numérique"],
    ["eniscaen.jpg", "ENSICAEN", "Conseils et Formations"],
    ["linportant.jpg", "Linportant", "Développement Spécifique"],
    ["malkyrs.jpg", "Malkyrs", "Jeu Vidéo"],
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
