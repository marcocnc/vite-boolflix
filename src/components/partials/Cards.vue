
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
    <ul>
        <li>
            <img class="error"  v-if=" image== null" src="/public/img/not-found.webp" alt="not-found">
            <img  class="poster" v-else :src="`http://image.tmdb.org/t/p/w342/${image}`">
        </li>
        <li>{{ title }}</li>
        <li>{{ original_title }}</li>
        <li>
            <img class="flag" :src="`/public/img/flags/language-${original_language}.svg`" :alt="original_language">
        </li>
        <li >
            <!--  se star <= votoaverage allora stampo stellina piena
             altrimenti stellina vuota  -->
            <i v-for="star in vote_average" :key="star" class="fa-solid fa-star"></i>
            <i v-for="star in (5 - vote_average)" :key="star" class="fa-regular fa-star"></i>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    .flag{
        width: 40px;
    }

    .error{
        width: 342px;
        height: 458px;
    }
</style>