<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Retour Post</title>
</head>
<body>
  Bonjour <?= $_POST["firstname"] . " " . $_POST["lastname"]; ?>
  <?= "<br>" ?>
  <?php var_dump($_POST); ?>
</body>
</html>