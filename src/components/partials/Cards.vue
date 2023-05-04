
<script>
export default {
    name: 'Cards',
    props:{
        title: String,
        original_title: String,
        original_language: String,
        vote_average: Number
    }
}
</script>

<template>
    <ul>
        <li>{{ title }}</li>
        <li>{{ original_title }}</li>
        <li>{{ original_language }}</li>
        <li>{{ vote_average }}</li>
    </ul>
</template>

<style lang="scss" scoped>
    
</style>