<?php
// import de ma classe qui me permet de communiquer avec la BDD
require_once($_SERVER["DOCUMENT_ROOT"] . "/model/Model.php");

// parse_url() analyse une URL et retourne ses composants
$parsed_url = parse_url($_SERVER['REQUEST_URI']);


// soit l'url en question a un chemin et sinon le chemin est la racine (opérateur ternaire)
$path = isset($parsed_url['path']) ? $parsed_url['path'] : '/';

// pattern qui permet de reconnaître toutes les url des nodes 
$pattern = '~^/node/([0-9]+)/?$~';


if (preg_match($pattern, $path, $matches, PREG_OFFSET_CAPTURE)) {
  if(isset($matches[1][0])) {

   // Récupération des données via la classe Model
    $GLOBALS["node_data"] = Model::getNode($matches[1][0]);

   // Affichage des données
   require_once($_SERVER["DOCUMENT_ROOT"].'/view/node.php'); 
 }
}