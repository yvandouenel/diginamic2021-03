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

// Est-ce que je dois modifier un enregistrement ?
// Si je dois modifier un enregistrement, c'est que je suis en méthode POST

if(isset($_POST["nid"])) {
  try {
    $data = [
        'nid' => $_POST['nid'],
        'title' => $_POST['title']
    ];

    $req = $pdo->prepare('UPDATE node SET 
        title = :title    
        WHERE nid = :nid');
    $req->execute($data);

  } catch (PDOException $e) {
      echo "Pb de requête", $e->getMessage();
  }
}

// Vue de tous mes nodes
// Paramètres de la requête préparée
$data = [
  'type' => "article"
];
// Requête préparée
$req = $pdo->prepare('SELECT * FROM node WHERE type = :type');

//Execution de la requête
$req->execute($data);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liste des nodes</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>
<body>

<table class="table" >
<th style="text-align: left;">ID</th>
<th style="text-align: left;">Titre</th>
<th style="text-align: left;">Action</th>
</tr>
<?php while($d = $req->fetch(PDO::FETCH_ASSOC)): ?>
<tr>
  <td><?= $d['nid'] ?></td> 
  <td><?= $d['title'] ?></td> 
  <td><a href="/exos/sql1/editnode.php?nid=<?= $d['nid'] ?>">Modifier</a></td>
</tr>
<?php endwhile ?>
</table>
  
</body>
</html>