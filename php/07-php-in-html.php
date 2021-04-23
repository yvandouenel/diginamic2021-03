<?php
require_once(__DIR__."./exos/include_require/settings.php");
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<?php if(isset($settings)) : ?>
  Nom de la base de données : 
  <?= $settings["dbname"] ?>
  <?php else : ?>
    <h1>Attention, votre site web n'a pas accès au fichier de config</h1>
<?php endif ?>
</body>
</html>