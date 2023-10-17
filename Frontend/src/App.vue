<template>
    <!-- <Header /> -->
    <HeaderTest />
    <RouterView></RouterView>
    <Footer />
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import HeaderTest from './components/Header/HeaderTest.vue';

export default {
    components: {
        Header,
        Footer,
        HeaderTest
    }
}
</script>

<style scoped></style>