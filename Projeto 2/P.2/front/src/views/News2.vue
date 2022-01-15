<template>
  <div class="news2">
  <br>

    <Header></Header>
    <Ranking></Ranking>

    <fieldset class="barras1">
        <center> 
        <br>
        <h1>GTA Trilogy</h1>
        <h3>GTA trilogy é lançado e recebe muitas críticas negativas.</h3>
        <br>
        <img src="https://switch-brasil.com/wp-content/uploads/2021/10/GTA-Trilogy-DE-Scrn09102021.jpg" width=500 height=300>
        <br>
        <br>
        <p>
        GTA: The Trilogy foi lançado há alguns dias, sendo recebido com críticas duras — e muitos memes — dos jogadores.
        <br>
        Agora, as notas e as impressões da comunidade já começaram a tomar forma no Metacritic… E não são nada positivas.
        <br>
        Até o momento da publicação desta matéria, o jogo conta com mais de 3.600 mil análises do público no PC. 
        <br>
        A maioria das notas são abaixo de 1, totalizando uma média de 0.5.
        <br>
        As versões de outras plataformas não estão tão longe. 
        <br>
        Os jogadores de PlayStation deram uma média de 0.7, enquanto os de Xbox e Switch deram 0.4 e 0.5, respectivamente.    
        </p>
        <br>
        </center>
    </fieldset>
    <br>
  </div>
</template>

<script>

import Header from '../components/Header.vue';
import Ranking from '../components/Ranking.vue';


export default {
  name: "news2",
  props: ["name"],
  components: {
        Header,
        Ranking
    }
};
</script>
