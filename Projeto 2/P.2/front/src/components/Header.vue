<template>
    <div id = "header"> 
        <div class = "nav-teste">
            <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    
                    <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/letter-g-icon-18-256.png" width="120" height="80">
                    <a href="front\src\views\Home.vue" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <svg class="bi me-2" width="40" height="32" role="img" ><use xlink:href="https://uploaddeimagens.com.br/imagens/SeqVgCY"></use></svg>
                    </a>
                   
                    <ul class="nav col-12 col-md-auto mb-2 justify-content-left mb-md-1">
                        <li><router-link to="/Home" id="marc" class="nav-link px-2 link-secondary">Notícias</router-link></li>
                        <li><router-link to="/" id="marc" class="nav-link px-2 link-secondary">Quiz</router-link></li>
                        <li><router-link to="/Lists" id="marc" class="nav-link px-2 link-secondary">Listas</router-link></li>    
                        
                    </ul>        
                   
                    <div class="col-md-3 text-end">
                
                    <button type="button" class="btn btn-warning"><router-link to="/Login" id="marc" class="nav-link px-2 link-secondary">Logar</router-link></button>
                    <button type="button" class="btn btn-primary"><router-link to="/Add" id="marc" class="nav-link px-2 link-secondary">Cadastrar</router-link></button>
                    </div>
                </header>
            </div>
        </div>
    </div>
                        
</template>

<script>



export default {
    name: "header",
    props: ["name"]
    
}
</script>

<style>
   

</style>