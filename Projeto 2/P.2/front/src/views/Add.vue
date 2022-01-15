<template>
  <div id="Cadastro">
   <Header />
      
      <body>
        <div class="barras1">
            
            <form action="" @submit="validarCadastroUsuario">
                <center>
                    <label for="">Cadastrar</label><br>
                    <br>
                    <input v-model="nome" class="nome" minlength="6" aria-errormessage="Mínimo 6 dígitos" type="text"  placeholder="Usuário(Mínimo 6 dígitos)"><br>
                    <br>
                    <input v-model="email" class="email" type="email" placeholder="Email"><br>
                    <br>
                    <input v-model="senha" class="senha" minlength="8" aria-errormessage="Mínimo 8 dígitos" type="password"  placeholder="Senha(Mínimo 8 dígitos)"><br>
                    <br>
                    <input v-model="dataNasc" class="data" type="date"  placeholder="Data de nascimento"><br>
                    <br>
                    <button type="submit" class="bot">Cadastrar</button>

                </center>
                
            </form>
        </div>
    </body>
  </div>
</template>

<script>

import Header from '../components/Header.vue'
export default 
{
  name: 'Cadastro',

    components: {
        Header
    },

        data() {
            return {
                nome: null,
                email: null,
                senha: null,
                dataNasc: null
            }
        },
        methods: {
        validarCadastroUsuario: function () {
            if (this.nome == null || this.email == null || this.senha == null || this.dataNasc == null) {
                alert("Prencha todos os campos");
            } else {
                alert("Usuario Cadastrado")
            }
        }
    }
}

</script>

<style>

</style>