<template>
  <div id="user">
    <Header />
    <center>
    <fieldset class = "barras1">
      <h1>Bem vindo!</h1>
      <br>
      
        <h1>Dados:</h1><br>
        <h2>Usuário: user</h2>
        <h2>Email: user@gmail.com</h2>

    </fieldset>
      <br>
    <fieldset class = "barras2">
          <h1>Publicações que você leu: </h1><br>
          <router-link class = "marc" to="/News2"><h3>GTA Trilogy</h3>
            <p>GTA trilogy é lançado e recebe muitas críticas negativas.</p>
          </router-link>  
            <br>
            <br>
          <router-link class = "marc" to="/News1"><h3>Homem-Aranha: Sem Volta para Casa</h3>
            <p>Pré-venda começa no dia 29 de novembro.</p>
          </router-link>    
            <br>
    </fieldset>
    </center>  
    
       
    
  </div>
</template>

<script>
import  Header from '../components/Header.vue'
export default {
  name: 'user',
  props:["user"],
  components:{
    Header
  },
  data() {
    return {};
}
}
</script>

<style>

</style>