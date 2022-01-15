<template>
  <div class="news1">
  <br>

    <Header></Header>
    <Ranking></Ranking>

    <fieldset class="barras1">
        <center> 
        <br>
        <h1>Homem-Aranha: Sem Volta para Casa</h1>
        <h3>Pré-venda começa no dia 29 de novembro</h3>
        <br>
        <img src="https://jpimg.com.br/uploads/2021/08/design-sem-nome-2021-08-23t164811.980.jpg" width=500 height=300>
        <br>
        <br>
        <p>
            Pela primeira vez na história cinematográfica do Homem-Aranha, nosso herói amigo da vizinhança é desmascarado     
        <br>
        e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. 
        <br>
        Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos,  
        <br>
        e o forçam a descobrir o que realmente significa ser o Homem-Aranha.”
        <br>
        As versões de outras plataformas não estão tão longe. 
        <br>
        Homem-Aranha: Sem Volta Para Casa estreia em 16 de dezembro de 2021 no Brasil.    
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
  name: "news1",
  props: ["name"],
  components: {
        Header,
        Ranking
    }
};
</script>
