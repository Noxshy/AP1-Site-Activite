
document.getElementById("boutton").addEventListener("click", function () {

    const Adulte = parseInt(document.getElementById("adulte").value, 10) || 0;
    const Enfant = parseInt(document.getElementById("enfant").value, 10) || 0;
    const Duree = parseInt(document.getElementById("duree").value, 10) || 0;

    const PrixParAdulte = 5;
    const PrixParEnfant = 2; 

    const CoutAdulte = Adulte * PrixParAdulte * (Duree / 30);
    const CoutEnfant = Enfant * PrixParEnfant * (Duree / 30);

    const CoutTotal = CoutAdulte + CoutEnfant;

    document.getElementById("cout-total").textContent = CoutTotal.toFixed(2) + "€";
});






document.getElementById("bouttonAd").addEventListener("click", function () {
    const adultes = parseInt(document.getElementById("adulteAd").value, 10) || 0;
    const enfantsMoins12 = parseInt(document.getElementById("enfantmoins12").value, 10) || 0;
    const enfants12a16 = parseInt(document.getElementById("enfant12a16").value, 10) || 0;
    const enfants16a18 = parseInt(document.getElementById("enfant16a18").value, 10) || 0;

    const tarifBase = 50;

    const coutAdultes = adultes * tarifBase;
    const coutEnfantsMoins12 = enfantsMoins12 * tarifBase * 0.7; // 30% de réduction
    const coutEnfants12a16 = enfants12a16 * tarifBase * 0.8; // 20% de réduction
    const coutEnfants16a18 = enfants16a18 * tarifBase * 0.9; // 10% de réduction

    const coutTotalAd = coutAdultes + coutEnfantsMoins12 + coutEnfants12a16 + coutEnfants16a18;

    document.getElementById("cout-totalAd").textContent = coutTotalAd.toFixed(2) + "€";
});




document.getElementById("boutton-location").addEventListener("click", function () {
    // Récupération des valeurs
    const nombreRaquettes = parseInt(document.getElementById("nombre-raquettes").value, 10) || 0;
    const nombreBalles = parseInt(document.getElementById("nombre-balles").value, 10) || 0;
    const dureeLocation = parseInt(document.getElementById("duree-location").value, 10) || 0;

    // Tarifs
    const tarifRaquette = 5; // Prix par heure
    const tarifBalles = 2; // Prix par heure

    // Calculs
    const coutRaquettes = nombreRaquettes * tarifRaquette * dureeLocation;
    const coutBalles = nombreBalles * tarifBalles * dureeLocation;
    const coutTotalLocation = coutRaquettes + coutBalles;

    // Affichage du coût total
    document.getElementById("cout-total-location").textContent = coutTotalLocation.toFixed(2) + "€";
});



