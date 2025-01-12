'use strict'

// Sélectionne le formulaire et tous ses éléments
let formulaire = document.getElementById('formulaire');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let adress = document.getElementById('adress');
let password = document.getElementById('password');
let confirmpassword = document.getElementById('confirmpassword');
let button = document.getElementById('submit');

// Sélectionne les champs d'erreur
let erreurNom = document.getElementById('erreur-nom');
let erreurPrenom = document.getElementById('erreur-prenom');
let erreurEmail = document.getElementById('erreur-email');
let erreurBirthdate = document.getElementById('erreur-birthdate');
let erreurAdress = document.getElementById('erreur-adress');
let erreurPassword = document.getElementById('erreur-password');
let erreurConfirmPassword = document.getElementById('erreur-confirmpassword');


// Ajouter un événement pour la soumission du formulaire
formulaire.addEventListener('submit', (e) => {
    // Empêcher l'envoi par défaut
    e.preventDefault();

        // Réinitialiser les messages d'erreur
        resetErrors();

        // Valider chaque champ
        let valid = true;
    
        if (nom.value.trim() === '') {
            erreurNom.textContent = 'Votre nom est obligatoire.';
            erreurNom.style.visibility = 'visible';
            nom.classList.add('champ-invalide');

            valid = false;
        } else if (nom.value.trim().length < 5 || nom.value.trim().length > 15) {
            erreurNom.textContent = 'Votre nom doit contenir entre 5 et 15 caractères.';
            erreurNom.style.visibility = 'visible';
            nom.classList.add('champ-invalide');

            valid = false;
        } else {
            erreurNom.textContent = ''; // Réinitialiser l'erreur si le champ est valide
            erreurNom.style.visibility = 'hidden';
            nom.classList.remove('champ-invalide');
            console.log('Nom valide :', nom.value.trim());
        }
    
        if (prenom.value.trim() === '') {
            erreurPrenom.textContent = 'Votre prénom est obligatoire.';
            erreurPrenom.style.visibility = 'visible';
            prenom.classList.add('champ-invalide');
            valid = false;
        } else if (prenom.value.trim().length < 5 || prenom.value.trim().length > 15) {
            erreurPrenom.textContent = 'Votre prénom doit contenir entre 5 et 15 caractères.';
            erreurPrenom.style.visibility = 'visible';
            prenom.classList.add('champ-invalide');
            valid = false;
        } else {
            erreurPrenom.textContent = ''; // Réinitialiser l'erreur si le champ est valide
            erreurPrenom.style.visibility = 'hidden';
            prenom.classList.remove('champ-invalide');
            console.log('Prénom valide :', prenom.value.trim());
        }        
    
        // Valide un email avec une expression régulière
        function validateEmail(email) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
        }

        if (email.value.trim() === '') {
            erreurEmail.textContent = 'Votre email est obligatoire.';
            erreurEmail.style.visibility = 'visible';
            email.classList.add('champ-invalide');
            valid = false;
        } else if (!validateEmail(email.value)) {
            erreurEmail.textContent = 'Veuillez entrer un email valide.';
            erreurEmail.style.visibility = 'visible';
            email.classList.add('champ-invalide');
            valid = false;
        } else {
            // Si l'email est valide
            erreurEmail.textContent = '';  // Réinitialiser l'erreur
            erreurEmail.style.visibility = 'hidden'; // Cacher le message d'erreur
            email.classList.remove('champ-invalide'); // Retirer la classe d'invalidité
            console.log('Email valide :', email.value.trim());
        }
        
        if (birthdate.value === '') {
            erreurBirthdate.textContent = 'Votre date de naissance est obligatoire.';
            erreurBirthdate.style.visibility = 'visible';
            birthdate.classList.add('champ-invalide');
            valid = false;
        } else {
            // Récupère la date actuelle
            const currentDate = new Date();
        
            // Récupère la date saisie dans le formulaire (en format YYYY-MM-DD)
            const birthDate = new Date(birthdate.value);
        
            // Vérifie si la date saisie est supérieure à la date actuelle
            if (birthDate > currentDate) {
                erreurBirthdate.textContent = 'La date saisie ne pas être postérieur à celle d\'aujourd\'hui.';
                erreurBirthdate.style.visibility = 'visible';
                birthdate.classList.add('champ-invalide');
                valid = false;
            } else {
                // Si la date de naissance est valide (pas dans le futur)
                erreurBirthdate.textContent = '';
                erreurBirthdate.style.visibility = 'hidden';
                birthdate.classList.remove('champ-invalide');
            }
        }
        
        if (adress.value.trim() === '') {
            erreurAdress.textContent = 'L\'adresse est obligatoire.';
            erreurAdress.style.visibility = 'visible'; // Rendre le message visible
            adress.classList.add('champ-invalide');   // Ajouter une classe CSS pour marquer le champ invalide
            valid = false;                          // Mettre isValid à false pour empêcher la soumission du formulaire
        } else {
            // Si le champ adresse n'est pas vide, réinitialiser l'erreur
            erreurAdress.textContent = '';
            erreurAdress.style.visibility = 'hidden'; // Cacher le message d'erreur
            adress.classList.remove('champ-invalide'); // Retirer la classe d'erreur du champ
        }
    
        if (password.value === '') {
            erreurPassword.textContent = 'Votre mot de passe est obligatoire.';
            erreurPassword.style.visibility = 'visible'; // Rendre le message visible
            password.classList.add('champ-invalide');    // Ajouter la classe CSS pour marquer le champ invalide
            valid = false;
        } else if (password.value.length < 8) {
            erreurPassword.textContent = 'Votre mot de passe doit contenir au moins 8 caractères.';
            erreurPassword.style.visibility = 'visible'; // Rendre le message visible
            password.classList.add('champ-invalide');    // Ajouter la classe CSS pour marquer le champ invalide
            valid = false;
        } else {
            // Si le mot de passe est valide, réinitialiser l'erreur
            erreurPassword.textContent = '';
            erreurPassword.style.visibility = 'hidden'; // Cacher le message d'erreur
            password.classList.remove('champ-invalide'); // Retirer la classe d'erreur du champ
        }
        
        if (confirmpassword.value === '') {
            erreurConfirmPassword.textContent = 'Veuillez confirmer votre mot de passe.';
            erreurConfirmPassword.style.visibility = 'visible'; // Rendre le message visible
            confirmpassword.classList.add('champ-invalide');    // Ajouter la classe CSS pour marquer le champ invalide
            valid = false;
        } else if (confirmpassword.value !== password.value) {
            erreurConfirmPassword.textContent = 'Les mots de passe ne correspondent pas.';
            erreurConfirmPassword.style.visibility = 'visible'; // Rendre le message visible
            confirmpassword.classList.add('champ-invalide');    // Ajouter la classe CSS pour marquer le champ invalide
            valid = false;
        } else {
            // Si la confirmation du mot de passe est valide, réinitialiser l'erreur
            erreurConfirmPassword.textContent = '';
            erreurConfirmPassword.style.visibility = 'hidden'; // Cacher le message d'erreur
            confirmpassword.classList.remove('champ-invalide'); // Retirer la classe d'erreur du champ
        }
        
    
        // Si tout est valide, soumettre le formulaire
        if (valid) {
            alert('Formulaire soumis avec succès !');
            formulaire.submit(); // Peut être commenté pour éviter l'envoi réel lors des tests
        }

        // // Si tout est valide, soumettre le formulaire
        // if (isValid) {
        // alert('Formulaire soumis avec succès !'); // Affichage du message de succès
        // // formulaire.submit(); // Commenter cette ligne pour éviter l'envoi réel pendant les tests
        // }
    });

// Réinitialise tous les messages d'erreur
function resetErrors() {
    erreurNom.textContent = '';
    erreurPrenom.textContent = '';
    erreurEmail.textContent = '';
    erreurBirthdate.textContent = '';
    erreurAdress.textContent = '';
    erreurPassword.textContent = '';
    erreurConfirmPassword.textContent = '';
}

