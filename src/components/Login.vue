<template>
    <img class="loginImage"
        src="https://irp.cdn-website.com/33406c6e/dms3rep/multi/P%C3%A3es-com-ingredientes-regionais.jpg"
        alt="Imagem do Google Drive">
    <div class="loginPage">
        <div class="container login">
            <div class="welcomeScreen">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimVOX93rytkgGA-g75fGqpAl9GSpbMvVd9Q&s"
                    alt="Logo">
                <h1>Olá Seja Bem Vindo!</h1>
            </div>
            <div class="loginScreen">
                <p> <i class="fa-solid fa-lock"></i> Realize o seu Login abaixo</p>
                <aInput :required="true" wid="6" v-model="form.email" icon="fa-regular fa-user" placeholder="Informe seu E-mail"
                    label="E-mail" />
                <aInput :required="true" wid="6" notes="aaaaaaa" icon="fa-solid fa-lock" label="Senha" v-model="form.password"
                    type="password" placeholder="Inform Sua Senha" />
                <div class="buttons">
                    <aSwitch v-model="form.keepConnected" text="Mantenha-me Conectado" :value="true" />
                    <aButton v-model="submit" text="Acessar" @click="openSite" />
                </div>
                <span v-if="access == false && access != null">
                    <p> Acesso Negado, Verifique seu <b>E-mail</b> ou sua <b>Senha</b></p>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',

    data: () => {
        return ({
            form: {
                email: null,
                password: null,
                keepConnected: false,
            },
            submit: null,
            access: null
        })
    },

    methods: {
        async openSite() {
            try {
                const response = await this.$api.postData('auth/login', {
                    email: this.form.email,
                    password: this.form.password,
                    keepConnected: this.form.keepConnected
                });

                if (response && response.access_token) {
                    localStorage.setItem('token', response.access_token);
                    this.access = true;
                    this.$router.push({ name: 'HomePage' });
                } else {
                    this.access = false;
                }
            } catch (error) {
                this.access = false;
            }
        }
    }

}
</script>