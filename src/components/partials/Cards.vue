
<script>
export default {
    name: 'Cards',
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
            <img class="poster" :src="`http://image.tmdb.org/t/p/w342/${image}`">
        </li>
        <li>{{ title }}</li>
        <li>{{ original_title }}</li>
        <li>
            <img class="flag" :src="`/public/img/flags/language-${original_language}.svg`" :alt="original_language">
        </li>
        <li>{{ vote_average }}</li>
    </ul>
</template>

<style lang="scss" scoped>
    .flag{
        width: 40px;
    }
</style>