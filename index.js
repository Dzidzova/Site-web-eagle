// JavaScript pour l'interactivité de la page principale

document.addEventListener("DOMContentLoaded", () => {
    // Ajout d'une animation au survol des boutons de domaine
    const domainButtons = document.querySelectorAll(".btn");

    domainButtons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.boxShadow = "none";
        });
    });

    // Placeholder pour d'autres fonctionnalités futures
    console.log("Bienvenue sur le site ! Les interactions sont prêtes.");
});
