<template>
    <div class="userList">
        <aButton text="Cadastrar" @click="createProducts" />
        <aButton text="Editar" :disabled="selectedItems.length !== 1" @click="editProduct" />
        <aButton text="Excluir" :disabled="selectedItems.length === 0" @click="deleteProduct" />
        <Grid :row="items" :columns="columns" @selection-changed="handleSelectionChange" />
    </div>
</template>

<script>
import collect from 'collect.js';

export default {
    name: "UserList",

    data: () => ({
        items: [],
        selectedItems: [], // Armazena os itens selecionados do grid
        columns: [
            { name: 'id', text: 'ID' },
            { name: 'email', text: 'E-mail' },
            { name: 'name', text: 'Nome' },
            { name: 'create_at', text: 'Criado Em', mask: 'date' },
        ],
        search: '',
    }),

    mounted() {
        this.loadItems();
    },

    methods: {
        loadItems() {
            this.$api.getData('user').then(r => {
                this.items = r;
            });
        },

        createProducts() {
            return this.$router.push({ name: 'userForm' })
        },

        editProduct() {
            let id = collect(this.selectedItems).pluck('id').first();
            this.$router.push({ name: 'UserForm', params: { id: id } })
        },

        deleteProduct() {
            let id = collect(this.selectedItems).pluck('id').all();
            this.$swal.fire({
                icon: "error",
                title: "Deseja Excluir este Produto?",
                confirmButtonText: 'Excluir',
                confirmButtonColor: '#d33',
                showCancelButton: true,
            }).then(resp => {
                if (resp.isConfirmed) {
                    id.forEach(item => {
                        this.$api.deleteData(`user/${item}`);
                    })
                    location.reload();
                }
            })
        },

        handleSelectionChange(selectedItems) {
            this.selectedItems = selectedItems;
        },

        searchable(data) {
            if (!data)
                return this.loadItems()

            this.$api.postData('products/filter', { description: this.search }).then(r => {
                this.items = r
                console.log(r)
            });
        }
    }
}
</script>