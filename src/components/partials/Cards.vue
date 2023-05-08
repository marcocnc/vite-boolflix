
<script>
import { store } from '../../data/store';
export default {
    name: 'Cards',
    data(){
        return{
            store
        }
    },
    props:{
        title: String,
        image: String,
        original_title: String,
        original_language: String,
        vote_average: Number
    },
}
</script>

<template>

    <div class="my-card mt-4">

        <div class="card-image">
            <img class="error w-100"  v-if=" image== null" src="/public/img/not-found.webp" alt="not-found">
            <img  class="poster w-100" v-else :src="`http://image.tmdb.org/t/p/w342/${image}`">
        </div>

        <div class="card-desc d-flex flex-column">
            <span>{{ title }}</span>
            <span>{{ original_title }}</span>
        </div>

        <div class="flag-img">
            <img class="flag" :src="`/public/img/flags/language-${original_language}.svg`" :alt="original_language">
        </div>

        <div class="rate">
            <i v-for="star in vote_average" :key="star" class="fa-solid fa-star"></i>
            <i v-for="star in (5 - vote_average)" :key="star" class="fa-regular fa-star"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;
    .my-card{
        width: calc(100% / 4 - 20px);
        margin-right: 10px;
        border: 1px solid $red_netflix;
        .flag{
        width: 40px;
    }

    .error{
        width: 342px;
        height: 458px;
    }

    .rate{
        i{
            color: darken($red_netflix, 30%);
        }
    }
    }
</style>