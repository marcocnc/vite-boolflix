<script>
import { store } from '../data/store';
export default {
    name: 'Header',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="header-container d-flex align-items-center justify-content-center">
        <header class="d-flex justify-content-between w-100 px-4">

            <!-- Logo -->
            <div class="logo">
                <img src="../../public/img/logo-boolflix.png" alt="logo-boolflix">
            </div>

            <!-- Research -->
            <div class="input-search d-flex align-items-center">
                <input type="text" placeholder="Ricerca..." class="me-3 p-1 rounded" v-model="store.searchInput" @keyup.enter="$emit('enter'), $emit('enterSeries')">
                <div class="btn btn-primary text-white" @click="$emit('enter'), $emit('enterSeries')">Search</div>
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

.header-container{
    height: 120px;
    background-color: $color_black;

    .logo{
        img{
            width: 200px;
            object-fit: cover;
        }
    }
}
</style>