<script>

export default {

    data() {
        return {
            isActiveMenu: 'menu-1' 
        };
    },
    methods: {
        changeActiveMenu(menu) {
            this.isActiveMenu = menu; 
        }
    },
}
</script>

<template>
     <nav id="header">  
        <!-- Menu -->
        <router-view>
        <router-link :to="{ name: 'Erreur' }"><img src="../Divers/Logo/layer-group-solid.svg" alt=""></router-link>
        <a href="#presentaring" class="menu menu-1" :class="{ 'active-menu': isActiveMenu === 'menu-1' }" @click="changeActiveMenu('menu-1')">Présentation</a>
        <a href="#projects" class="menu menu-2" :class="{ 'active-menu': isActiveMenu === 'menu-2' }" @click="changeActiveMenu('menu-2')">Mes Projets</a>
        <a href="#form" class="menu menu-3" :class="{ 'active-menu': isActiveMenu === 'menu-3' }" @click="changeActiveMenu('menu-3')">Me Contacter</a>
        
        <!-- Icone -->
        <a href="header"><img class="up" src="../Divers/Logo/house-solid.svg" alt="revenir en haut de la page d'acceuil" title="revenir en haut de page" width="100%" height="100%"></a>
        </router-view>
    </nav>

</template>

<style scoped>

#header{
    
    position: fixed;
    top: 0;
    width: 100%;
    height:10%;
    

    display: flex;
    flex-direction:row;
    flex-wrap: nowrap;
    justify-content:space-evenly ;
    align-items: center;

}
.menu {
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    padding-top: 0.3em;
    background-color: #bdad96;
    border: 0.2em solid #8d5636;
    border-radius: 1em;
    color: #8d5636;
    width: 8%;
    height: 30%;
}


.active-menu {
    text-decoration: underline;
    color: #6d713f;
}

.up {
    border-radius: 15%;
    height: 2em;
    width: 2em;
}

img{
    height: 2em;
    width: 2em;
}

</style>
