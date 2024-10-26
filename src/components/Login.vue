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
                <aInput wid="6" v-model="form.email" icon="fa-regular fa-user" placeholder="Informe seu E-mail" label="E-mail"/>
                <aInput wid="6" notes="aaaaaaa" icon="fa-solid fa-lock" label="Senha" v-model="form.password" type="password" placeholder="Inform Sua Senha" />
                <div class="buttons">
                    <aSwitch v-model="form.connected" text="Mantenha-me Conectado" :value="true"/>
                    <aButton v-model="submit" text="Enviar" />
                </div>
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
                connected: false,
            },
            submit: null
        })
    }
}
</script>