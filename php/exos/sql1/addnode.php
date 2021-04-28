<?php 
// Récupération de la classeMyCMSPDO 
require_once($_SERVER["DOCUMENT_ROOT"] . "/exos/sql1/model/MyCMSPDO.php");

?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ajout d'un node</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    <h1>Ajout d'un node</h1>
    <form action="/exos/sql1/index.php" method="POST" class="form">
      <label for="title">Titre</label>
      <input type="text" name="title"> 
      <br><br>
      
      <label for="body">Corps</label>
      <textarea name="body"></textarea>
      <br><br>

      <label for="summary">Résumé</label>
      <textarea name="summary"></textarea>
      <br><br>

      <label for="seo_title">Titre SEO</label>
      <input type="text" name="seo_title"> 
      <br><br>

      <label for="path">Chemin</label>
      <input type="text" name="path"> 

      <br><br>
      <input type="hidden" value="1" name="add">
    <input type="submit" value="Envoyer">
    </form>
  </div>
</body>
</html>