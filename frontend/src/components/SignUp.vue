<template>
    <section class="signup-container">

        <h1>Créer un compte</h1>

        <!-- Formulaire d'inscription -->
        <form class="form-card" v-on:submit.prevent="envoiForm">
            <div class="form-group">
                <label for="nom">Nom</label>
                <input type="text" v-model="signUpForm.nom" name="nom" id="nom" class="form-input" aria-invalid="false" required>
                <div class="form-err"></div>
            </div>
            <div class="form-group">
                <label for="prenom">Prénom</label>
                <input type="text" v-model="signUpForm.prenom" name="prenom" id="prenom" class="form-input" aria-invalid="false" required>
                <div class="form-err"></div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="signUpForm.email" name="email" id="email" class="form-input" aria-invalid="false" required>
                <div class="form-err"></div>
            </div>
            <div class="form-group">
                <label for="password">Mot de passe</label>
                <input type="password" v-model="signUpForm.password" name="password" id="password" class="form-input" aria-invalid="false" required>
                <div class="form-err"></div>
            </div>
            <div class="form-group">
                <label for="passwordConfirm">Confirmez le mot de passe</label>
                <input type="password" v-model="signUpForm.passwordConfirm" name="passwordConfirm" id="passwordConfirm" class="form-input" aria-invalid="false" required>
                <div class="form-err"></div>
            </div>
            <button class="form-btn">Se connecter</button>
        </form>

        <div class="sign-card">
            <p>Déjà inscrit ? <a href="" @click.prevent="changeForm(false)">Connectez-vous !</a></p>
        </div>

    </section>
</template>


<script>

    import axios from 'axios';

    export default {
        name: 'SignUp',
        props: {
            changeForm: Function 
        },
        data() {
            return {
                signUpForm:
                    {
                    nom: '',
                    prenom: '',
                    email: '',
                    password: '',
                    passwordConfirm: ''
                    }
            }
        },
        methods: {
            // Enregistrement d'un nouvel utilisateur
            envoiForm(){
                const nom = this.signUpForm.nom;
                const prenom = this.signUpForm.prenom;
                const email = this.signUpForm.email;
                const password = this.signUpForm.password;
                // Création du formulaire contenant les datas de l'utilisateur 
                var formData = new FormData();
                    formData.append('prenom', prenom);
                    formData.append('nom', nom);
                    formData.append('email', email);
                    formData.append('password', password);
                        // Envoi du formulaire via la méthode post d'axios 
                        axios({
                            method: "post",
                            url: "http://localhost:3000/api/users/signup",
                            data: this.signUpForm,
                            headers: { "Content-Type": "application/json" },
                        })
                        // Inscription réussite, maj du localStorage et redirection sur le Login
                        .then(reponse => { console.log(reponse)
                            alert("Inscription réussite ! Veuillez vous connecter pour accéder à votre compte !")
                            localStorage.clear();
                            this.$router.go(0); 
                        })
                    .catch((err) => {
                        alert(err.response.data.message)
                    })
                }
            }
        }

</script>


<style scoped>

    * {
        font-family: 'Titillium Web', sans-serif;
        background-color: white;
        border-radius: 5px;
    }

    .signup-container {
        padding: 0.5%;
    }

    h1 {
        text-align: center;
        font-size: 2em;
    }

    .form-card {
        margin-left: 5%;
        margin-right: 5%;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    input {
        margin-bottom: 3%;
    }

    .form-btn {
        width: 100%;
        margin-top: 3%;
        background-color: rgb(49, 94, 240);
        color: white;
        height: 3em;
        border-radius: 10px;
    }

    .sign-card {
        font-style: italic;
        text-align: center;
    }

    /* Small device (smartphone, to 767px max) */
    @media screen and (max-width: 767px) {

        h1 {
            font-size: 1.5em;
        } 

    }

</style>