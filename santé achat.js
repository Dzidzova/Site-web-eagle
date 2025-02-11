// Tableau pour simuler le panier
let cart = [];

// Fonction pour ajouter au panier
function addToCart(productName, productPrice) {
    // Ajoute un produit au panier
    const product = { name: productName, price: productPrice };
    cart.push(product);

    // Met à jour l'affichage du panier
    updateCart();
}

// Fonction pour mettre à jour l'affichage du panier
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    // Vide le panier avant de le réafficher
    cartItemsContainer.innerHTML = '';

    // Affiche chaque article dans le panier
    let totalPrice = 0;
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <span class="price">€${item.price.toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(cartItemDiv);

        totalPrice += item.price;
    });

    // Met à jour le prix total
    totalPriceContainer.innerText = `€${totalPrice.toFixed(2)}`;
}

// Fonction pour simuler le passage à la caisse
function checkout() {
    if (cart.length === 0) {
        alert('Votre panier est vide!');
        return;
    }

    alert('Vous allez passer à la caisse. Merci pour votre commande!');
    // Réinitialise le panier après commande
    cart = [];
    updateCart();
}
