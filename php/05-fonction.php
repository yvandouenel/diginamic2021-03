<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fonctions</title>
</head>
<body>
<?php
// sans & : passage par valeur (copie de la valeur)
// avec & : passage par référence (pas de copie)
function addFive($a) {
  $a += 5; // on ajout 5 à $a
  return $a;
}
$num = 2;
$result = addFive($num);

$stack = array("orange", "banana");
$length = array_push($stack, "apple", "raspberry");
echo $length;
print_r($stack);

function addition($a, $b) :bool {
  return $a + $b;
}
$res = addition(5, -2);
echo "Résultat de addition : ";
var_dump($res);

?> 
<?= "resultat : " . $result . "<br>" ?>
<?= "num : " . $num ?>
</body>
</html>