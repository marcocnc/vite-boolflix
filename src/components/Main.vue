
<script>
import CardsContainer from './partials/CardsContainer.vue';
export default {
    name:'Main',
    components:{
        CardsContainer
    }
}
</script>

<template>
  <div class="main-wrapper pb-5">
    <main>
        <CardsContainer />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/partials/vars' as *;

    .main-wrapper{
        height: 100%;
        
        main{
            height: 100%;
        }
    }
</style>