// Sélection des éléments HTML
const loginSection = document.getElementById('login-link'); // Onglet connexion/déconnexion
const userInfo = document.getElementById('user-info');
const navUsername = document.getElementById('nav-username');
const logoutButton = document.getElementById('logout-button');

// Vérifie l'état de connexion
const checkLoginStatus = () => {
    const username = localStorage.getItem('loggedInUser'); // Vérifie si un utilisateur est connecté
    if (username) {
        if (navUsername) navUsername.textContent = username;
        if (userInfo) userInfo.style.display = 'inline';

        if (loginSection) {
            loginSection.textContent = "Déconnexion"; // Change le texte du lien
        }
    } else {
        if (userInfo) userInfo.style.display = 'none';

        if (loginSection) {
            loginSection.textContent = "Se connecter"; // Remet le texte par défaut
            loginSection.href = "connexion.html"; // Renvoie à la page de connexion
        }
    }
};

// Vérifie l'état au chargement de la page
document.addEventListener('DOMContentLoaded', checkLoginStatus);
