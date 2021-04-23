<?php var_dump($_SERVER); ?>
<header>
     <nav>
       <ul>
         <li><a href="http://<?= $_SERVER["HTTP_HOST"] ?>/exos/cv/index.php">Accueil</a></li>
         <li><a href="http://<?= $_SERVER["HTTP_HOST"] ?>/exos/cv/pages/competences.php">Compétences</a></li>
         <li><a href="http://<?= $_SERVER["HTTP_HOST"] ?>/exos/cv/pages/experiences.php">Expériences</a></li>
         <li><a href="http://<?= $_SERVER["HTTP_HOST"] ?>/exos/cv/pages/formation.php">Formation</a></li>
       </ul>
     </nav>
 </header>