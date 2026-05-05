// Détecter si un élément est visible dans la fenêtre
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Ajouter la classe 'appear' pour animer les éléments visibles
function checkTimelineItems() {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('appear');
        }
    });
}

// Écouter les événements de défilement et de redimensionnement
window.addEventListener('scroll', checkTimelineItems);
window.addEventListener('resize', checkTimelineItems);

// Vérification initiale
document.addEventListener('DOMContentLoaded', checkTimelineItems);
