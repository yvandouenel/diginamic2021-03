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
  'nid' => $_GET['nid'] 
];
// Requête préparée
$req = $pdo->prepare('SELECT * FROM node WHERE nid = :nid');

//Execution de la requête
$req->execute($data);

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modification d'un node</title>
</head>
<body>
  <h1>Modification du node  <?= $_GET['nid'] ?></h1>
  <form action="/exos/sql1/index.php" method="POST">
  <?php while($d = $req->fetch(PDO::FETCH_ASSOC)): ?>
    <label for="title">Titre</label>
    <input type="text" value="<?= $d['title'] ?>" name="title"> 
    <input type="hidden" value="<?= $d['nid'] ?>" name="nid">
  <?php endwhile ?>
  <input type="submit" value="envoyer">
  </form>
</body>
</html>