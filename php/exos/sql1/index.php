<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liste des nodes</title>
</head>
<body>
<?php
// Récupération de la données via une requête préparée
try {
  $pdo = new PDO('mysql:host=local.php.my;dbname=mycms;charset=utf8', 'diginamic', '123');
  // -> permet d'appeler les méthodes (ou les attributs) de l'objet
  // :: Appel d'une méthode "static" ou méthode de classe
  $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
}
catch(PDOException $e) {
  echo "Pb de connexion à la base de données ", $e->getMessage();
}

// Paramètres de la requête préparée
$data = [
  'type' => "article"
];
// Requête préparée
$req = $pdo->prepare('SELECT * FROM node WHERE type = :type');

//Execution de la requête
$req->execute($data);
echo '<table >';
echo '<tr>';
echo '<th style="text-align: left;">ID</th>'. 
'<th style="text-align: left;">Titre</th>'. 
'<th style="text-align: left;">Action</th>';
echo '</tr>';
while($d = $req->fetch(PDO::FETCH_ASSOC)) {
  echo '<tr>';
  echo "<td>" .$d['nid'] . "</td>". 
  "<td>" .$d['title'] . "</td>". 
  "<td><a href=\"\">Modifier</a></td>";
  echo '</tr>';
  //var_dump($d);
  //echo "nid : " . $d["nid"] . "<br>";
  //echo "body : " . $d["body"] . "<br>";
}
echo '</table>';

?>
  
</body>
</html>