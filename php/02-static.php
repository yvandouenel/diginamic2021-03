<?php

function test() {
  static $a = 0; // cette instruction ne sera exécutée que la première fois 
  $a ++;
  echo "a : " . $a . "\n"; 
  if(isset($a)) echo "a est définie dans le scope local à la fonction test";
  else echo "a non définie";  
  echo "<br>";
}
test();//1


// isset test si la variable est définie dans ce scope (ici global)
if(isset($a)) echo "a définie";
else echo "a non définie dans le scope global";
echo "<br>";
echo "<br>";

var_dump($_GET);
