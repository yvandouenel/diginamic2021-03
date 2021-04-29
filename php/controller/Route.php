<?php

class Route
{
  // Attributs qui va lister toutes les routes
  public static $routes = [];

  /**
   * Méthode qui permet d'ajouter des routes
   */
  public static function add($pattern, $method = "GET", $view_name = "view_standard", $controller_method)
  {
    array_push(self::$routes, [
      'pattern' =>  $pattern,
      'method' => $method,
      'view_name' => $view_name,
      'controller_method' => $controller_method
    ]);
  }
  /**
   * Vérifie si la route existe et dans l'affirmative
   * retourne la route en question
   */
  public static function check()
  {
    // parse_url() analyse une URL et retourne ses composants
    $parsed_url = parse_url($_SERVER['REQUEST_URI']);

    // soit l'url en question a un chemin et sinon le chemin est la racine (opérateur ternaire)
    $path = isset($parsed_url['path']) ? $parsed_url['path'] : '/';

    // Récupération de la méthode (GET ou POST)
    $method = $_SERVER["REQUEST_METHOD"];

    // On vérifie si le couple chemin / methode  existe bien
    foreach(self::$routes as $route) {
      // comparaison de la méthode 
      if ($route["method"] == $method && preg_match($route["pattern"], $path)) {
        // Ici, je sais que la route existe bien
        return $route;
      }

    }
    return NULL;
  }
  public static function initRoutes(){
    // Route qui permet de voir un node (/node/xxx)
    self::add("~^/node/[0-9]+/?$~","GET","node.php","getNode");
  }

}
