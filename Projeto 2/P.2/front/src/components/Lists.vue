<template>
    <div id = "lists">
        
        <Header></Header>
        <Ranking></Ranking>
        
        <main>
            <center> 
            <fieldset class="barras1">
            <center> 
            <br>
            <router-link to="/" id="marc" class="nav-link px-2 link-secondary">
            <h2>Homem-Aranha: Sem Volta para Casa - Todos os Vilões Confirmados em Sem Volta Para Casa</h2>
            </router-link>
            <p>Todos os vilões que você verá em Homem-Aranha: Sem Volta para Casa!</p>
            <br>
            <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/11/legiao_M_jveBVqN7yK.png.jpeg" width=300 height=200>
            </center>    
            
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
    name: "lists",
    props: ["name"],
    components: {
        Header,
        Ranking
    }
    
}
</script>

<style>
   
</style>