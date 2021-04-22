<?php 
$a = 12; // portée globale
function test() {
  global $c;
  $c = 3;
  $GLOBALS['b'] = 24;
  echo "a : " . $GLOBALS['a'] . "<br>"; 
  echo "c : " . $c . "<br>"; 
}
test();
echo "a : " . $a. "<br>"; 
echo "b : " . $b. "<br>"; 
echo "c : " . $c. "<br>"; 
