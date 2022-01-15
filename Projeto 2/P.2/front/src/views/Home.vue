<template>
    <News></News>
</template>

<script>

import News from "../components/News.vue";
import Header from '../components/Header.vue';

export default {
    name: "home",
    props: ["name"],
    components: {
        News,
        Header
        
        
    },
};
</script>

<style></style>
