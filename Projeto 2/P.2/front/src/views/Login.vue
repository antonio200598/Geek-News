<template>
  <div id="login">
      <Header />
      <fieldset class="barras1">
        <center>
            <h1>Logar</h1><br>
            <input type="text" name="username" v-model="email" placeholder="Email" /><br>
            <br>
            <input type="password" name="password" mminlength="8" aria-errormessage="" v-model="senha" placeholder="Senha" /><br>
            <br>
            <button class ="bot" type="button" v-on:click="login()">Logar</button><br>
            <br>
        </center>
        
      </fieldset>
      
  </div>
</template>

<script>

import Header from '../components/Header.vue';

export default 
{
  name: 'Login',

  components: {
        
        Header
    },
        data() {
            return {
                input: {
                    email: "",
                    senha: ""
                },
                
            }
        },
        
        methods: 
        {
            login: function () 
            {
                if (this.email == "admin" && this.senha == "12345678")  
                {
                    alert("Login realizado");
                    this.$router.push({ name: "Admin", params: {name: "admin"} });
                }
                
                 else if (this.email == "usuario" && this.senha == "12345678") 
                 {
                    alert("Login realizado");
                    this.$router.push({ name: "User", params: {name: "User"} });
                 }
                 else 
                {
                    alert("Dados Incorretos");
                
                } 

               
            
            },
            
            
        }
        
}

</script>

<style>
     
</style>