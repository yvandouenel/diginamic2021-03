<?php
$hello = "Hello World";

$fruits = ["Banane", "Cerise", "Pomme"];
//parcours du tableau pour afficher chaque élément
foreach ($fruits as $fruit) {
  echo $fruit;
  echo '<br>';
  if($fruit == "Cerise") break;
};

echo $hello;