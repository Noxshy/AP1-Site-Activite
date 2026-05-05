// Sélection des éléments HTML
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const signupErrorDiv = document.getElementById('signup-error-div');
const loginErrorDiv = document.getElementById('login-error-div');
const welcomeSection = document.getElementById('welcome-section');
const signupSection = document.getElementById('signup-section');
const loginSection = document.getElementById('login-section');
const userNameSpan = document.getElementById('user-name');
const logoutButton = document.getElementById('logout-button');
const goHomeButton = document.getElementById('go-home-button');
const loginLink = document.getElementById('login-link');
const userInfo = document.getElementById('user-info');
const navUsername = document.getElementById('nav-username');

// ✅ Vérifie si un utilisateur est connecté et met à jour l'affichage
const checkLoginStatus = () => {
    const username = localStorage.getItem('loggedInUser');

    if (username) {
        if (navUsername) { 
            navUsername.textContent = username;
        }
        if (userInfo) {
            userInfo.style.display = 'inline';
        }
        if (loginLink) {
            loginLink.style.display = 'none';
        }

        // Vérification pour la page de connexion
        if (welcomeSection && userNameSpan) {
            userNameSpan.textContent = username;
            welcomeSection.style.display = 'block';
            if (signupSection) signupSection.style.display = 'none';
            if (loginSection) loginSection.style.display = 'none';
        }
    } else {
        if (userInfo) userInfo.style.display = 'none';
        if (loginLink) loginLink.style.display = 'inline';
    }
};

// ✅ Gestion de la redirection vers l'accueil
goHomeButton?.addEventListener('click', () => {
    window.location.href = "../index.html";
});

// ✅ Déconnexion
logoutButton?.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    location.reload();
});

// ✅ Gestion de la création de compte
signupForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    signupErrorDiv.innerHTML = ''; 
    signupErrorDiv.style.color = 'red';

    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    // Définition des RegEx
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    let errorMessages = '';

    // Validation
    if (!usernameRegex.test(username)) {
        errorMessages += '<p>* Le nom d’utilisateur doit contenir entre 3 et 15 caractères (lettres, chiffres, underscores).</p>';
    }

    if (!passwordRegex.test(password)) {
        errorMessages += '<p>* Le mot de passe doit contenir au moins 8 caractères, avec une majuscule, une minuscule et un chiffre.</p>';
    }

    // Vérifie si l'utilisateur existe
    if (localStorage.getItem(username)) {
        errorMessages += '<p>* Ce nom d’utilisateur est déjà utilisé.</p>';
    }

    // Affichage des erreurs ou création du compte
    if (errorMessages) {
        signupErrorDiv.innerHTML = errorMessages;
    } else {
        localStorage.setItem(username, password); // Enregistrement simple
        signupErrorDiv.style.color = 'green';
        signupErrorDiv.innerHTML = '<p>✅ Compte créé avec succès ! Vous pouvez maintenant vous connecter.</p>';
        signupForm.reset();
    }
});

// ✅ Gestion de la connexion
loginForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    loginErrorDiv.innerHTML = ''; 
    loginErrorDiv.style.color = 'red';

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    const savedPassword = localStorage.getItem(username);

    if (!username || !password) {
        loginErrorDiv.innerHTML = '<p>* Veuillez remplir tous les champs.</p>';
        return;
    }

    if (!savedPassword || savedPassword !== password) {
        loginErrorDiv.innerHTML = '<p>* Nom d’utilisateur ou mot de passe incorrect.</p>';
        return;
    }

    // Connexion réussie
    localStorage.setItem('loggedInUser', username);
    checkLoginStatus();
});

// ✅ Vérifie l'état de connexion au chargement
document.addEventListener('DOMContentLoaded', checkLoginStatus);
