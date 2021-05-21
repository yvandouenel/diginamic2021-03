//document.getElementById("demo").innerHTML = "Hello World!";
// Element racine du dom : window


// Récupération de mon paragraphe d'id demo
const p = document.getElementById("demo");
//console.log(`p : `, p);

// parcours des propriétés du paragraphe p grâce à la boucle for in
/* for(let property in p) {
    console.log(`propriété : `, property, typeof(p[property]));
    // si la propriété est de type objet, parcourons les propriétés de cet objet
    if(typeof(p[property]) == "object") {
        console.log(p[property], ` est un objet !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
        
    }
} */

//document.getElementById("demo").innerHTML = "J'écris ce que je veux ici";

document.getElementById("btn").onmouseover = function() {
    document.getElementById("demo").innerHTML = "J'écris ce que je veux ici";
    document.getElementById("demo").style.color = "red";
}
document.getElementById("btn").onmouseout = function() {
    document.getElementById("demo").innerHTML = "Paragraphe ici";
    document.getElementById("demo").style.color = "black";
}