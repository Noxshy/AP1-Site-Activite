<?php
//inclure les fonctions pour la base
include("fonctions.php");

//Connexion à la base de données
$cnx=connect_bd('cinema');

if ($cnx) // si connexion correcte
{
    // On prépare la requête (une seule fois)
    $result = $cnx->prepare('INSERT INTO film (titre, anneeSortie, affiche, idGenre)
    VALUES (:titre, :anneeSortie, :affiche, :idGenre)');
    
    // On affecte aux variables les valeurs des données postées du formulaire
    $titre = filter_input (INPUT_POST,"titre", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $anneeSortie = filter_input (INPUT_POST,"anneeSortie");
    $affiche = filter_input (INPUT_POST,"affiche", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $genre = filter_input (INPUT_POST,"genre");
    
    // On lie chaque marqueur à une variable en précisant le type de données
    $result->bindParam(':titre', $titre, PDO::PARAM_STR);
    $result->bindParam(':anneeSortie', $anneeSortie, PDO::PARAM_STR);
    $result->bindParam(':affiche', $affiche, PDO::PARAM_STR);
    $result->bindParam(':idGenre', $genre, PDO::PARAM_STR);

// On execute la requête
$result->execute();

// Résultats
echo '<p>'.$result->rowCount().' film a été ajoutée dans la table Film</p>';
echo "<p>Il s'agit du film $titre sorti en $anneeSortie</p>";
echo '<p>Son identifant est : '.$cnx->lastInsertId().'</p>'; // Dernier id autoincrémenté inséré
}
else 
{
echo "erreur";
}
deconnect_bd('cinema');
?>