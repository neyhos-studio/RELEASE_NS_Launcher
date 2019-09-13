// Panneaux
let ongletJeu = document.getElementById('ongletJeu');
let ongletSocial = document.getElementById('ongletSocial');
let ongletBoutique = document.getElementById('ongletBoutique');
let ongletActus = document.getElementById('ongletActus');

ongletSocial.style.display = "none";
ongletBoutique.style.display = "none";
ongletActus.style.display = "none";

// Btn menu
let btnJeu = document.getElementById('btnJeu');
let btnSocial = document.getElementById('btnSocial');
let btnBoutique = document.getElementById('btnBoutique');
let btnActualites = document.getElementById('btnActualites');

btnJeu.style.textShadow = "0 0 0.5em black, 0 0 0.5em black,0 0 0.5em black"

btnJeu.onclick = function() {
    btnJeu.style.textShadow = "0 0 0.5em black, 0 0 0.5em black,0 0 0.5em black"
    btnSocial.style.textShadow = "none"
    btnBoutique.style.textShadow = "none"
    btnActualites.style.textShadow = "none"

    ongletJeu.style.display = "flex"
    ongletSocial.style.display = "none";
    ongletBoutique.style.display = "none";
    ongletActus.style.display = "none";
}

btnSocial.onclick = function() {
    btnJeu.style.textShadow = "none"
    btnSocial.style.textShadow = "0 0 0.5em black, 0 0 0.5em black,0 0 0.5em black"
    btnBoutique.style.textShadow = "none"
    btnActualites.style.textShadow = "none"

    ongletJeu.style.display = "none"
    ongletSocial.transi
    ongletSocial.style.display = "flex";
    ongletBoutique.style.display = "none";
    ongletActus.style.display = "none";
}

btnBoutique.onclick = function() {
    btnJeu.style.textShadow = "none"
    btnSocial.style.textShadow = "none"
    btnBoutique.style.textShadow = "0 0 0.5em black, 0 0 0.5em black,0 0 0.5em black"
    btnActualites.style.textShadow = "none"

    ongletJeu.style.display = "none"
    ongletSocial.style.display = "none";
    ongletBoutique.style.display = "flex";
    ongletActus.style.display = "none";
}

btnActualites.onclick = function() {
    btnJeu.style.textShadow = "none"
    btnSocial.style.textShadow = "none"
    btnBoutique.style.textShadow = "none"
    btnActualites.style.textShadow = "0 0 0.5em black, 0 0 0.5em black,0 0 0.5em black"

    ongletJeu.style.display = "none"
    ongletSocial.style.display = "none";
    ongletBoutique.style.display = "none";
    ongletActus.style.display = "flex";
}