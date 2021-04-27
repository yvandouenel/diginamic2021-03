<?php

$email = $_POST["email"];
echo $email;
echo "<br>";

$pattern = "~^[^@]+@[^(@|\.)]+\.[a-z]{2,4}$~";
$result = preg_match($pattern, $email);
var_dump($result);
if($result != 0) {
  echo "<h1>Email correct</h1>";
} else echo "<h1>Email incorrect</h1>";