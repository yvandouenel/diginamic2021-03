<?php
try {
  $pdo = new PDO('mysql:host=local.php.my;dbname=mycms;charset=utf8', 'diginamic', '123');
  // -> permet d'appeler les méthodes (ou les attributs) de l'objet
  // :: Appel d'une méthode "static" ou méthode de classe
  $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
}
catch(PDOException $e) {
  echo "Pb de connexion à la base de données ", $e->getMessage();
}

/* $sql = 'select * from node where nid = 27;';
$req = $pdo->query($sql); */

// FETCH_ASSOC va nous permettre de récupérer les données 
// sous forme de tableau associatif
// La boucle while est utilisée pour parcourir l'ensemble des résultats 
// issues de notre requête SQL
/* while($d = $req->fetch(PDO::FETCH_ASSOC)) {
    //var_dump($d);
    echo "nid : " . $d["nid"] . "<br>";
    echo "body : " . $d["body"] . "<br>";
} */


// Paramètres de la requête préparée
$data = [
  'nid' => 27,
  'type' => "article"
];
// Requête préparée
$req = $pdo->prepare('SELECT * FROM node WHERE nid = :nid AND type = :type');

//Execution de la requête
$req->execute($data);

while($d = $req->fetch(PDO::FETCH_ASSOC)) {
  var_dump($d);
  //echo "nid : " . $d["nid"] . "<br>";
  //echo "body : " . $d["body"] . "<br>";
}

// Requête préparée d'insertion
/* try {
  // Paramètres de la requêtre préparée sous forme de tableau associatif
  $data = [
      'type' => 'article',
      'title' => 'Article entré via php',
      'body' => '<p>Ceci est le corps de mon deuxième article</p>',
      'path' => '/deuxieme-article'
  ];
  $req = $pdo->prepare('INSERT INTO node (type,title,body,path) VALUES (:type,:title,:body,:path)');
  $req->execute($data);
}
catch(PDOException $e) {
  echo "Pb de requête", $e->getMessage();
} */

// Mise à jour 
try {
  // Paramètres de la requête
  $data = [
      'nid' => 35,
      'title' => "Nouveau titre modifié",
      'seo_title' => "Hello",
      'body' => "Ceci est mon corps",
      'path' => "/nouveau-titre",
  ];
  // Préparation de la requête
  $req = $pdo->prepare('UPDATE node SET 
      title = :title, seo_title = :seo_title, body = :body, path = :path   
      WHERE nid = :nid');
      
  // Execution de la requête
  $req->execute($data);

} catch (PDOException $e) {
  echo "Pb de requête", $e->getMessage();
}
