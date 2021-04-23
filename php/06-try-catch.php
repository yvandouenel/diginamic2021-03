<?php
function somme($a, $b) {
  if (!is_numeric($a) || !is_numeric($b)) {
    throw new Exception('Erreur de la fonction \"somme\" qui ne peut ajouter des éléments non numériques. Merci de prévenir notre SAV : sav@ma-compagnie.fr'); 
  }
  return $a + $b;
}

try {
  $result = somme("1","2");
  echo( "Résultat : " . $result . "\n");
} catch(Exception $exception) {
  echo 'Exception attrapée : ', $exception->getMessage();
}