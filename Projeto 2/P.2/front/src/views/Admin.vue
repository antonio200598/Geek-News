<template>
  <div id="admin">
    <Header />
    <center>
    <fieldset class = "barras1">
      <h1>Bem vindo!</h1>
      <br>
      
        <h1>Dados:</h1><br>
        <h2>Usuário: admin</h2>
        <h2>Email: admin@gmail.com</h2>

    </fieldset>
      <br>
    <fieldset class = "barras2">
          <h1>Suas Publicações: </h1><br>
          <router-link class = "marc" to="/News2"><h3>GTA Trilogy</h3>
            <p>GTA trilogy é lançado e recebe muitas críticas negativas.</p>
          </router-link> <Bot /> 
            <br>
            <br>
          <router-link class = "marc" to="/News1"><h3>Homem-Aranha: Sem Volta para Casa</h3>
            <p>Pré-venda começa no dia 29 de novembro.</p>
          </router-link> <Bot />    
            <br>
          <a href="#"><h1>+ Escrever uma nova Postagem </h1></a> 


    </fieldset>
    </center>  
    
       
    
  </div>
</template>

<script>
import  Header from '../components/Header.vue'
import Bot from '../components/Botão.vue'
export default {
  name: 'admin',
  props:["admin"],
  components:{
    Header,
    Bot
  },
  data() {
    return {};
}
}
</script>

<style>

</style>