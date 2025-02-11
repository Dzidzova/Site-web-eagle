<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $product = htmlspecialchars($_POST["product"]);
    $quantity = htmlspecialchars($_POST["quantity"]);
    $email = htmlspecialchars($_POST["email"]);
    
    $to = "VOTRE_EMAIL@domaine.com";
    $subject = "Nouvelle commande : $product";
    $message = "Produit : $product\nQuantité : $quantity\nEmail : $email";
    $headers = "From: $email";
    
    if(mail($to, $subject, $message, $headers)) {
        echo "Commande envoyée avec succès.";
    } else {
        echo "Erreur lors de l'envoi.";
    }
}
?>