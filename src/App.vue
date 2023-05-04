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
        getApi(){
            console.log(store.searchInput);
            axios.get(store.apiUrl, {
                params:{
                    num: store.numFilms,
                    offset: store.offset,
                    query: store.searchInput
                }
            })
            .then(result =>{
                console.log(result.data);
                store.userMovie = result.data;
                console.log('store.userMovie', store.userMovie);
            })
        }
    },

    // mounted(){
    //     this.getApi()
    // }
}
</script>

<template>

 <Header @search="getApi()" @enter="getApi()"/>

  <Main />

</template>

<style lang="scss">
@use './scss/main.scss' as *;


</style>