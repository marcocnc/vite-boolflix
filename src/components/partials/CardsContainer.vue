
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
  <div class="container">
    <div class="cards-wrapper d-flex flex-wrap mt-5">
        <Cards v-for="movie in store.userMovie.results"
        :key="movie.id"
        :image="movie.poster_path"
        :title="movie.title"
        :original_title="movie.original_title"
        :original_language="movie.original_language"
        :vote_average="Math.ceil(movie.vote_average/2)"
        />
        
        <Cards v-for="serie in store.userSeries.results"
        :key="serie.id"
        :image="serie.poster_path"
        :title="serie.name"
        :original_title="serie.original_name"
        :original_language="serie.original_language"
        :vote_average="Math.ceil(serie.vote_average/2)"/>
  </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;
    
</style>