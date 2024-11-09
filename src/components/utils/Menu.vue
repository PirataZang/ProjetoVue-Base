<template>

    <div>
        <nav class="menu">
            <div class="logo">
                <router-link to="/" target="_blank">adawdawdw</router-link>
            </div>
            <div class="routes">
                <span class="menuItem" v-for="(route, index) in routes" :key="index">
                    <i :class="`${route.icon}`"></i>
                    <RouterLink class="item" :to="route.path">{{ route.name }}</RouterLink>
                </span>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    inject: ['allRoutes'],

    data() {
        return {
            routes: [],
        }
    },

    mounted() {
        this.load();
    },

    methods: {
        load() {
            this.routes = this.allRoutes;
        }
    }
}
</script>
