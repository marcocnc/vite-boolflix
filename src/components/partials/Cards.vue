
<script>
export default {
    name: 'Cards',
    props:{
        title: String,
        original_title: String,
        original_language: String,
        vote_average: Number
    },
}
</script>

<template>
    <ul>
        <li>{{ title }}</li>
        <li>{{ original_title }}</li>
        <li>
            <!-- <img :src="/public/img/original_language.png"> -->
            <img :src="`/public/img/flags/language-${original_language}.svg`" :alt="original_language">
        </li>
        <li>{{ vote_average }}</li>
    </ul>
</template>

<style lang="scss" scoped>
    img{
        width: 40px;
    }
</style>