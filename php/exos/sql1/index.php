<?php
// Récupération de l'instance de pdo
require_once($_SERVER["DOCUMENT_ROOT"] . "/exos/sql1/model/MyCMSPDO.php");
$pdo = MyCMSPDO::getPDOInstance();

// Récupération de la données via une requête préparée


// Est-ce que je dois modifier un enregistrement ?
// Si je dois modifier un enregistrement, c'est que je suis en méthode POST

if(isset($_POST["nid"])) {
  try {
    $data = [
        'nid' => $_POST['nid'],
        'type' => $_POST['type'],
        'title' => $_POST['title'],
        'body' => $_POST['body'],
        'summary' => $_POST['summary'],
        'seo_title' => $_POST['seo_title'],
        'path' => $_POST['path']
    ];

    $req = $pdo->prepare('UPDATE node SET 
        type = :type,    
        title = :title,    
        body = :body,    
        summary = :summary,   
        seo_title = :seo_title,    
        path = :path    
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