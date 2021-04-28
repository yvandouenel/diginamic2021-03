<?php
// Récupération de la données via une requête préparée
try {
  // new appelle le constructeur (__construct) de la classe PDO
  $pdo = new PDO('mysql:host=local.php.my;dbname=mycms;charset=utf8', 'diginamic', '123');
  // -> permet d'appeler les méthodes (ou les attributs) de l'objet
  // :: Appel d'une méthode "static" ou méthode de classe
  // setAttribute est une méthode de la classe PDO
  // ATTR_ERRMODE est attribut static (sans $ signifie que c'est une constante de classe)
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
        'title' => $_POST['title'],
        'body' => $_POST['body']
    ];

    $req = $pdo->prepare('UPDATE node SET 
        title = :title,    
        body = :body    
        WHERE nid = :nid');
    $req->execute($data);

  } catch (PDOException $e) {
      echo "Pb de requête", $e->getMessage();
  }
}

// Vue de tous mes nodes
// Paramètres de la requête préparée stockés dans un tableau associatif
$data = [
  'type' => "article"
];
// Requête préparée. pdo->prepare renvoie un objet puisque l'on va pouvoir appeler la 
// méthode execute (cf ligne 47). Attention, cette requête attend des paramètres (:type)
$req = $pdo->prepare('SELECT * FROM node WHERE type = :type');

//Execution de la requête. L'argument $data va permettre de remplacer les paramatres de la 
// requête
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
<?php while($record = $req->fetch(PDO::FETCH_ASSOC)): ?>
<tr>
  <td><?= $record['nid'] ?></td> 
  <td><?= $record['title'] ?></td> 
  <td><a href="/exos/sql1/editnode.php?nid=<?= $record['nid'] ?>">Modifier</a></td>
</tr>
<?php endwhile ?>
</table>
  
</body>
</html>