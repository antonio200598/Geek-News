<template>
    <div id="rank"> 
        <fieldset class = "ranking" >
            <center> 
            <br>
            <h1>Mais Lidas:</h1>
            <br>
            <router-link class = "marc" to="/News2"><h3>GTA Trilogy</h3>
            <p>GTA trilogy é lançado e recebe muitas críticas negativas.</p>
          </router-link>  
            <br>
            <br>
          <router-link class = "marc" to="/News1"><h3>Homem-Aranha: Sem Volta para Casa</h3>
            <p>Pré-venda começa no dia 29 de novembro.</p>
          </router-link>    
            <br>
            </center>
        </fieldset>
    </div>
        
</template>

<script>
export default {
    name: "rank",
    props: ["name"],
}
</script>

<style>

</style>