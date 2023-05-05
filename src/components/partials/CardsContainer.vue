
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
    <div class="cards-wrapper d-flex flex-wrap">
        <Cards v-for="result in store.userMovie.results"

        :key="result.id"
        :title="result.title"
        :original_title="result.original_title"
        :original_language="result.original_language"
        :vote_average="result.vote_average"
        />
        
        <Cards v-for="serie in store.userSeries.results"
        :key="serie.id"
        :image="serie.poster_path"
        :title="serie.name"
        :original_title="serie.original_name"
        :original_language="serie.original_language"
        :vote_average="serie.vote_average"/>
  </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;
    
</style>