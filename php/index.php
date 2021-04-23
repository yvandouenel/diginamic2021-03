<?php
$firstname = "Bob";

$otherfirstname = & $firstname; // ici on copie la valeur et non pas la référence

$firstname = "José";
echo "AKI";
echo $firstname;
echo "<br>";
echo $otherfirstname;