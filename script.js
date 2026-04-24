const btnSwitch = document.getElementById('btn-switch');
const btnMain = document.getElementById('btn-main');
const title = document.getElementById('form-title');
const groupNom = document.getElementById('group-nom');
const groupEmail = document.getElementById('group-email');

let isLoginMode = false;

btnSwitch.addEventListener('click', () => {
    isLoginMode = !isLoginMode;

    if (isLoginMode) {
        title.innerText = "Se connecter";
        btnMain.innerText = "Se connecter";
        btnSwitch.innerText = "Pas de compte ? Créer";
        groupEmail.style.display = "none"; // On masque l'email pour la connexion selon tes consignes (Nom + Pass)
        groupNom.querySelector('label').innerText = "Nom d'utilisateur";
    } else {
        title.innerText = "Créer un compte";
        btnMain.innerText = "Créer";
        btnSwitch.innerText = "Se connecter";
        groupEmail.style.display = "block";
        groupNom.querySelector('label').innerText = "Nom complet";
    }
});

// Capture de la soumission du formulaire
document.getElementById('scholarite-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const action = isLoginMode ? "Connexion en cours..." : "Création du compte en cours...";
    alert(action);
    // Ici, tu pourras attacher ta logique Supabase
});
