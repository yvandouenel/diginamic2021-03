<?php
// Tableau à index. Attention, l'index est un nombre qui commence à 0
$fruits = ["Banane", "Cerise", "Pomme"];

var_dump($fruits);
echo "<br>";
echo $fruits[1];
echo "<br>";

// Tableau associatif avec des clés sous forme de chaînes de caractères
$menus = [
  "lundi" => "Purée",
  "Mardi" => "Raviolis",
  "Mercredi" => "Avocat crevettes",
];
var_dump($menus);
echo "<br>";
echo $menus["Mercredi"];
echo "<br>";

// Parcours du tableau "fruits" (à index)
foreach ($fruits as $fruit) {
  echo $fruit;
  echo "<br>";
}

// Parcours du tableau "menus" (associatif)
foreach ($menus as $key => $dish) {
  echo $key . " : " . $dish;
  echo "<br>";
}

// Autre exemple de parcours d'un tableau plus complexe
// Tableau associatif qui stocke un tableau à index
$eleve = [
  "notes" => [14, 12]
];

$eleve['notes'][] = 17.5; // Ajout d'une valeur au tableau à index
$eleve["majeur"] = true; // Ajout d'une clé et de sa valeur (boolean)
$eleve["professeurs"] = ["Mr Durand", "Mme Dupond"];// Ajout d'une clé et de sa valeur ([])

// Parcours d'un tableau associatif avec la boucle foreach as $key => $value
foreach($eleve as $key => $value) {
  if($key == "notes" || $key == "professeurs") {
      echo $key . " : ";
      // Parcour d'un tableau à index avec la boucle foreach as $value
      foreach($eleve[$key] as $value) {
          echo $value;
          echo " - ";
      } 
  } 
  else {
          echo $key . " : " . $value;
          echo " - ";
      }
}
echo count($eleve["notes"]); // affiche la taille du tableau
echo " - ";
echo count($eleve["professeurs"]);// affiche la taille du tableau