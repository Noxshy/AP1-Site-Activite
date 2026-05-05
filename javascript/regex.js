// Sélection du formulaire
const formulaire = document.querySelector('.contact-form');

// Sélection de la div pour afficher les messages d'erreur
const errorDiv = document.getElementById('error_div');

// Écoute de l'événement de soumission du formulaire
formulaire.addEventListener('submit', (event) => {
    // Empêche l'envoi du formulaire si les validations échouent
    event.preventDefault();

    // Réinitialisation de la div des erreurs
    errorDiv.innerHTML = ''; // Vide le contenu précédent
    errorDiv.style.color = 'red'; // Style pour afficher les erreurs en rouge

    // Récupération des valeurs des champs
    const nom = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const sujet = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Définition des RegEx
    const nomRegex = /^[a-zA-ZÀ-ÿ\s\-']+$/; // Lettres, accents, espaces, tirets, apostrophes
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email standard
    const sujetRegex = /^.{3,}$/; // Minimum 3 caractères
    const messageRegex = /^.{10,}$/; // Minimum 10 caractères

    // Variable pour stocker les messages d'erreur
    let errorMessages = '';

    // Validation des champs
    if (!nomRegex.test(nom)) {
        errorMessages += '<p>*Le nom doit contenir uniquement des lettres.</p>';
    }

    if (!emailRegex.test(email)) {
        errorMessages += '<p>*Veuillez entrer une adresse email valide.</p>';
    }

    if (!sujetRegex.test(sujet)) {
        errorMessages += '<p>*Le sujet doit contenir au moins 3 caractères.</p>';
    }

    if (!messageRegex.test(message)) {
        errorMessages += '<p>*Le message doit contenir au moins 10 caractères.</p>';
    }

    // Affichage des messages d'erreur ou soumission du formulaire
    if (errorMessages) {
        errorDiv.innerHTML = errorMessages; // Affiche les erreurs dans la div
    } else {
        errorDiv.style.color = 'green'; // Change la couleur en vert pour le succès
        errorDiv.innerHTML = '<p>✅ Votre message a été envoyé avec succès !</p>';
        formulaire.submit(); // Soumet le formulaire
    }
});
