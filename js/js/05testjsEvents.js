function popup(msg) {
    alert(msg);
}

// récupération de l'élément du dom
let h1 = document.getElementById("h1");
h1.onclick = function() {
    popup("Hello bob");
}

let x = `J'appelle les norvégiens les "Vikings".`;
console.log('x : ', x);
console.log(``);