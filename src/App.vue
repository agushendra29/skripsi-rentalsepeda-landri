<template>
<div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    components: { Header, Footer },
    name: 'App',
    computed: {
        hide() {
            if (this.$route.name == "Login") return false
            else if (this.$route.name == "Register") return false
            else return true
        }
    }
}
</script>

<style>
#app {
    font-family: zillaslab, palatino, "Palatino Linotype", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
}
</style>
