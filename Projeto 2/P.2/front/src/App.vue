<template>
  
  <router-view />
  
</template>

<script>
import About from "./views/About.vue";
import Header from "./components/Header.vue";
import Home from "./views/Home.vue";
import News from "./components/News.vue";
import News1 from "./views/News1.vue";
import News2 from "./views/News2.vue";
import Login from "./views/Login.vue";
import Add from "./views/Add.vue";
import User from "./views/User.vue";
import Admin from "./views/Admin.vue";
export default {
  name: "App",
  components: { 
    Home,
    Header,
    News,
    News1,
    News2,
    Login,
    Add,
    User,
    Admin,
    About,
  },
  data()   {
    return {
      tasks: [], 
  };
  },
  provide() {
    return {
      tasks: this.tasks,
    };
  },
  methods: {
    clique() {
      this.$router
        .push({ name: "Not", params: { name: "antonio" } })
        .catch(() => {});
    },
  },
  };
</script>

<style></style>
