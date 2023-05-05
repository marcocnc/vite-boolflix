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
                store.userMovie = result.data;
                console.log('store.userMovie', store.userMovie);
            })
        },

        getApiPopularMovies(){
            axios.get(store.apiUrlPopularMovies)
            .then(res =>{
                store.popularMovies = res.data.results;
            })
        },

        getApiSeries(){
            axios.get(store.apiUrlSeries, {
                params:{
                    query: store.searchInput
                }
            })
            .then(result =>{
                store.userSeries = result.data;
                console.log('store.userSeries', store.userSeries);
            })
        }
    },

    // mounted(){
    //     this.getApiPopularMovies(),
    //     this.getApiSeries()
    // }
}
</script>

<template>

 <Header @search="getApiMovies()" @enter="getApiMovies()" @enterSeries="getApiSeries()" @serie="getApiSeries()"/>

  <Main />

</template>

<style lang="scss">
@use './scss/main.scss' as *;


</style>