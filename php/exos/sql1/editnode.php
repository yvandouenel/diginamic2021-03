<?php 
// Récupération de l'instance de pdo
require_once($_SERVER["DOCUMENT_ROOT"] . "/exos/sql1/model/MyCMSPDO.php");

// Récupération d'un node
$record = MyCMSPDO::getNode();

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modification d'un node</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    <h1>Modification du node  <?= $_GET['nid'] ?></h1>
    <form action="/exos/sql1/index.php" method="POST" class="form">
  
    <label for="type">Type</label>
      <input type="text" value="<?= $record['type'] ?>" name="type"> 
      <br><br>
      
      <label for="title">Titre</label>
      <input type="text" value="<?= $record['title'] ?>" name="title"> 
      <br><br>
      
      <label for="body">Corps</label>
      <textarea name="body"><?= $record['body'] ?></textarea>
      <br><br>

      <label for="summary">Résumé</label>
      <textarea name="summary"><?= $record['summary'] ?></textarea>
      <br><br>

      <label for="seo_title">Titre SEO</label>
      <input type="text" value="<?= $record['seo_title'] ?>" name="seo_title"> 
      <br><br>

      <label for="path">Chemin</label>
      <input type="text" value="<?= $record['path'] ?>" name="path"> 

      <br><br>

      <input type="hidden" value="<?= $record['nid'] ?>" name="nid">
    <input type="submit" value="envoyer">
    </form>
  </div>
</body>
</html>