
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
        vote_average: Number,
        desc: String
    },
}
</script>

<template>

    <div class="my-card mt-3">

        <!-- Card Image -->
        <div class="card-image">
            <img class="error w-100"  v-if=" image== null" src="/public/img/not-found.webp" alt="not-found">
            <img  class="poster w-100" v-else :src="`http://image.tmdb.org/t/p/w342/${image}`">
        </div>

        <div class="card-desc d-flex flex-column h-100 w-100 p-2">
            <span class="fw-bold">{{ title.toUpperCase() }}</span>
            <span class="original-title">{{ original_title }}</span>
            <span class="film-desc">"{{ desc }}"</span>

            <div class="flag-img d-flex justify-content-center my-2">
                <img class="flag" :src="`/public/img/flags/language-${original_language}.svg`" :alt="original_language">
            </div>

            <div class="rate d-flex justify-content-center mt-3">
                <i v-for="star in vote_average" :key="star" class="fa-solid fa-star"></i>
                <i v-for="star in (5 - vote_average)" :key="star" class="fa-regular fa-star"></i>
            </div>
        </div>

        
    </div>
</template>

<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;
    .my-card{
        width: calc(100% / 4 - 20px);
        margin-right: 10px;
        position: relative;

        
        
        .flag{
            width: 40px;

        
        }

        .card-image,
        .error{
            height: 100%;
            object-fit: cover;

            img{
                height: 100%;
                border: 1px solid $red_netflix;
            }
        }

        .card-image{
            .error{
                width: 342px;
                
            }
        }

        .card-desc{
            background-color: #00000079;
            position: absolute;
            top: 0;
            color: white;
            opacity: 0;
            cursor: pointer;

            &:hover{
                opacity: 1;
            }
        }

        .film-desc{
            font-size: 12px;
            color:lightgray;
            overflow: hidden;

            .original-title{
                font-size: 13px;
            }
        }
    }
</style>