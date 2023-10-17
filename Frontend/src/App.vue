<template>
    <Header />
    <RouterView></RouterView>
    <Footer/>
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import RouterView from './router';
export default {
    components: {
        Header,
        Footer,
    }
}
</script>

<style scoped>

</style>