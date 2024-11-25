<template>
    <div class="site">
        <header>
            <header>
                <h1>Site</h1>
            </header>

            <div>
                <!-- <aSwitch text="Click - me" v-model="change" @change="changeTextButton" /> -->
                <aButton text="click" @click="changeTextButton"/>
                <aInput type="number" :placeholder="text"/>
                <aSelect v-model="select" text="Selecione" placeholder="Selecione algum" :options="[{id:'celta', description: 'Celta Preto'}, {id: 'Vectra', description: 'Vectra 1997'} ]" @change="load"/>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Site',

    data() {
        return {
            text: null,
            change: false,

            options: {
                1: 'Sim',
                2: 'Não',
            }
        }
    },

    methods: {
        changeTextButton() {
            this.text = 'KARALHO MENÓ'
        },

        load(){
            if(this.select == 'celta')
                this.text = 'CELTA'
            else 
                this.text = 'VECTRA'
        }
    }

}
</script>