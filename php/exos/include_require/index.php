<?php

// __DIR__ permet de s'assurer que le chemin est bien relatif à ce fichier
require_once(__DIR__. "./settings.php"); 
//require_once($_SERVER['DOCUMENT_ROOT']. "./exos/include_require/settings.php"); 

echo $settings["dbname"];