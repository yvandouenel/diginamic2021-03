<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/model/Model.php");

class Controller
{
  /**
   * Récupère d'abord le nid dans l'url et retourne la donnée correspondante
   */
  public static function getNode()
  {
    // Récupération du nid
    // parse_url() analyse une URL et retourne ses composants
    $parsed_url = parse_url($_SERVER['REQUEST_URI']);

    // soit l'url en question a un chemin et sinon le chemin est la racine (opérateur ternaire)
    $path = isset($parsed_url['path']) ? $parsed_url['path'] : '/';

    $pattern = '~^/node/([0-9]+)/?$~';

    if (preg_match($pattern, $path, $matches, PREG_OFFSET_CAPTURE)) {
      if (isset($matches[1][0])) {
        return Model::getNode($matches[1][0]);
      }
    }
    return NULL;
  }
}
