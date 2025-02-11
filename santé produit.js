// Tableau pour simuler le panier
let cart = [];

// Fonction pour ajouter au panier
function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    alert(productName + " a été ajouté au panier.");
}

// Fonction pour mettre à jour l'affichage du panier (si vous avez une page de panier)
function updateCart() {
    // Code pour afficher les articles dans le panier et calculer le total.
}
// Fonction pour ajouter au panier et stocker dans le localStorage
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + " a été ajouté au panier.");
}