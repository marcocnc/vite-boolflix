
<script>
import { store } from '../../data/store';
import Cards from './Cards.vue';
export default {
    name:'CardsContainer',
    data(){
        return{
            store
        }
    },
    components:{
        Cards
    }
}
</script>

<template>
  <div class="cards-wrapper">
    <div class="container">
        <h2 v-if="store.userMovie.length > 0" class="text-white mt-3 p-2">MOVIE</h2>
        <div class="movies d-flex flex-wrap">
            <Cards v-for="movie in store.userMovie"
            :key="movie.id"
            :image="movie.poster_path"
            :title="movie.title"
            :original_title="movie.original_title"
            :desc="movie.overview"
            :original_language="movie.original_language"
            :vote_average="Math.ceil(movie.vote_average/2)"
            />
        </div>

        <h2 v-if="store.userSeries.length > 0" class="text-white mt-5 p-2">SERIE TV</h2>
        <div class="tv-series d-flex flex-wrap">
            <Cards v-for="serie in store.userSeries"
            :key="serie.id"
            :image="serie.poster_path"
            :title="serie.name"
            :original_title="serie.original_name"
            :desc="serie.overview"
            :original_language="serie.original_language"
            :vote_average="Math.ceil(serie.vote_average/2)"/>
        </div>
        
  </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

    h2{
        background-color: #0000007b;
    }
    
</style>