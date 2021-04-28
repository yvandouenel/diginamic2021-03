<?php
class MyCMSPDO {

  function __construct() {
    
  }
  public static function getPDOInstance() {
    try {
      // new appelle le constructeur (__construct) de la classe PDO
      $pdo = new PDO('mysql:host=local.php.my;dbname=mycms;charset=utf8', 'diginamic', '123');
      // -> permet d'appeler les méthodes (ou les attributs) de l'objet
      // :: Appel d'une méthode "static" ou méthode de classe
      // setAttribute est une méthode de la classe PDO
      // ATTR_ERRMODE est attribut static (sans $ signifie que c'est une constante de classe)
      $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
      return $pdo;
    }
    catch(PDOException $e) {
      echo "Pb de connexion à la base de données ", $e->getMessage();
    }
  }
  public static function getAllNodes() {

  }
}