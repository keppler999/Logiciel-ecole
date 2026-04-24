const formTitle = document.getElementById('form-title');
const mainBtn = document.getElementById('main-btn');
const toggleBtn = document.getElementById('toggle-btn');
const toggleText = document.getElementById('toggle-text');
const nameField = document.getElementById('name-field');

let isSignUp = true;

toggleBtn.addEventListener('click', () => {
    isSignUp = !isSignUp;

    if (isSignUp) {
        formTitle.innerText = "Créer un compte";
        mainBtn.innerText = "Créer";
        toggleBtn.innerText = "Se connecter";
        toggleText.innerText = "Déjà un compte ?";
        nameField.style.display = "block";
    } else {
        formTitle.innerText = "Connexion";
        mainBtn.innerText = "Se connecter";
        toggleBtn.innerText = "Créer un compte";
        toggleText.innerText = "Pas encore de compte ?";
        nameField.style.display = "none";
    }
});

// Interception de la soumission pour ton futur Backend
document.getElementById('auth-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const action = isSignUp ? "Création de compte" : "Connexion";
    alert(action + " en cours pour Scholarite...");
});

