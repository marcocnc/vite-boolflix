<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import {store} from './data/store';
export default {
    name: 'App',
    data(){
        return{
            store
        }
    },

    components:{
        Header,
        Main
    },

    methods:{
        getApiMovies(){
            console.log(store.searchInput);
            axios.get(store.apiUrlMovies, {
                params:{
                    query: store.searchInput
                }
            })
            .then(result =>{
                store.userMovie = result.data.results;
            })
        },
        
        getApiPopularMovies(){
            axios.get(store.apiUrlPopularMovies)
            .then(res =>{
                store.popularMovies = res.data.results;
                console.log(store.popularMovies.results);
            })
        },

        getApiSeries(){
            axios.get(store.apiUrlSeries, {
                params:{
                    query: store.searchInput
                }
            })
            .then(result =>{
                store.userSeries = result.data.results;
            })
        }
    },

    mounted(){
        this.getApiPopularMovies();
    }
}
</script>

<template>

 <Header @enter="getApiMovies()" @enterSeries="getApiSeries()"/>

  <Main />

</template>

<style lang="scss">
@use './scss/main.scss' as *;


</style>