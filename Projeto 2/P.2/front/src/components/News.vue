<template>
    <div id = "news">
        
        <Header></Header>
        <Ranking></Ranking>
        
        <main>
            <center> 
            <fieldset class="barras1">
                
            <br>
                <router-link to="/News2" id="marc" class="nav-link px-2 link-secondary"><h1>GTA Trilogy</h1></router-link>
                <p>GTA trilogy é lançado e recebe muitas críticas negativas.</p>
                <br>
                <img src="https://switch-brasil.com/wp-content/uploads/2021/10/GTA-Trilogy-DE-Scrn09102021.jpg" width=300 height=200>
                <br>
            </fieldset>
            <br>
            <fieldset class="barras2">
                <br>
                <router-link to="/News1" id="marc" class="nav-link px-2 link-secondary"><h1>Homem-Aranha: Sem Volta para Casa</h1></router-link>
                <p>Pré-venda começa no dia 29 de novembro.</p>
                <br>
                <img src="https://jpimg.com.br/uploads/2021/08/design-sem-nome-2021-08-23t164811.980.jpg" width=300 height=200>
       
        
            </fieldset>
            <br>
            </center>
        </main>
    </div>    
</template>

<script>

import Header from './Header.vue';
import Ranking from './Ranking.vue';


export default {
    name: "news",
    props: ["name"],
    components: {
        Header,
        Ranking
    }
    
}
</script>

<style>
   
</style>