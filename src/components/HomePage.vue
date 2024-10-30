<script setup lang="ts">
</script>

<template>
    <header>
        <div class="wrapper">
            <nav class="menu">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimVOX93rytkgGA-g75fGqpAl9GSpbMvVd9Q&s" />
                <div class="routes">
                    <span class="menuItem">
                        <i class="fa fa-bars"></i>
                        <RouterLink class="item" to="/cardapio">Cardapio</RouterLink>
                    </span>
                    <span class="menuItem">
                        <i class="fa fa-bars"></i>
                        <RouterLink class="item" to="/cardapio">Cardapio</RouterLink>
                    </span>
                    <span class="menuItem">
                        <i class="fa fa-bars"></i>
                        <RouterLink class="item" to="/cardapio">Cardapio</RouterLink>
                    </span>
                    <span class="menuItem">
                        <i class="fa fa-bars"></i>
                        <RouterLink class="item" to="/cardapio">Cardapio</RouterLink>
                    </span>
                    <span class="menuItem">
                        <i class="fa fa-bars"></i>
                        <RouterLink class="item" to="/cardapio">Cardapio</RouterLink>
                    </span>
                </div>
            </nav>
        </div>
    </header>
    <RouterView />
</template>