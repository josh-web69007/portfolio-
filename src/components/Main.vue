<script >
import modal from '@/components/modal.vue'
import formulaire from '@/components/formulaire.vue'


export default {
  components: {
    modal,
    formulaire,
  },

  data() {
    return {
      isModalVisible: false,
      selectedProject:null,
      projects: [
        {  
          id:1,
          titre: 'CV',
          description: "Création d'un CV avec la méthode CSS 'Flexbox",
          technologie: ['HTML5', 'CSS3'],
          image: '/src/Divers/img/CV.png',
          lienGitHub: 'https://github.com/josh-web69007/CV-en-HTML-CEF',
          
        },
        {
          id:2,
          titre: 'Cahier des charges',
          description: "Création d'un Cahier des charge pour la mise en place d'un site vitrine",
          image: '/src/Divers/img/cahier des charges.png',
          pdfPath: '/src/Divers/img/cahier des charges.pdf'
          
        },
        {
          id:3,
          titre: 'Dynamiser un site',
          description: "Dynamiser un espace commentaire à l'aide JavaScript",
          technologie: ['JavaScript'],
          image: '/src/Divers/img/JS.png',
          lienGitHub: 'https://github.com/josh-web69007/dynamiser-un-espace-commentaire',
        }
      ]
    };
  },
  methods: {
    openModal(projects) {
      this.selectedProject = projects;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
}
</script>

<template>
 <section id="content">
    <!-- Partie - Présentation -->
    <article id="presentaring">
        <a class="content-photo" href="/src/Divers/img/photo-de-profil.png" target="_blank"><img class="photo" src="/src/Divers/img/photo-de-profil.png" alt="photo-profil" width="200em" height="200em"></a>
        <h1>Joshua Muylle</h1>
        <h2>Développeur web & mobile , Junior</h2>
        <p class="text">Bonjour et bienvenue sur mon portfolio ! Je suis un passionné de technologie basé à Sérignan. À 18 ans, je me suis engagé dans un parcours de reconversion professionnelle au sein du Centre Européen de Formation, dans le but de devenir un développeur web et mobile Fullstack.<br><br>

Mon objectif est de mener ma carrière vers le domaine du développement informatique, où je pourrai mettre à profit mes compétences analytiques et mon désir d'apprentissage constant pour créer des solutions innovantes et impactantes. <br><br>

À travers ce portfolio, j'ai l'opportunité de vous présenter mes projets, mes compétences techniques. Je suis ouvert aux opportunités professionnelles stimulantes qui me permettront de contribuer de manière significative à des projets inspirants.

Je vous remercie de votre visite et je suis impatient de discuter de collaborations potentielles ou de toute autre opportunité d'échange. </p>
    
    </article>
<br>
    <!-- Partie - Mes Projects -->
   
    <div id="projects">
      <h1>Mes Projets</h1>

       <!-- Affichage de chaque projet -->
        <div class="contener-modal"> 
          
            <div class="modal" v-for="project in projects" :key="project.id"  @click="openModal(project)">     
        <h3>{{ project.titre }}</h3>
        <img class="image" :src="project.image" alt="Image du projet" width="200em" height="200em" >
    </div> 
</div>
   
    <!-- Fermeture du modal -->
     <modal :isVisible="isModalVisible" :project="selectedProject" @close="closeModal" />
  </div>
<br>
    <!-- Partie - Me contacter -->
  <formulaire></formulaire>

</section>
</template>

<style scoped>

/* Partie - Global */ 
#content {

    margin-top: 4.8em;
    width: 100%;
    height: 70%;
   
    
}
   
/* Partie - Présentation */ 
#presentaring {

    display: flex;
    flex-direction: column;
    justify-content: center;  
  
    text-align:center;
    text-indent: 2em;
    margin: 0%;
    padding-top: 2em;
   
}

#presentaring h1 , h2{

    text-align: center;
    font-style: oblique;
    margin: 0%;
    color:#a39c84;
}

#presentaring h1 {

    font-size: 3em;
    margin: 0;
}

#presentaring h2 {

    font-size: 2em;
}

.text{
       
    border: 0.5em solid #664833; 
    border-radius: 15%;
    box-shadow: 10px 5px 13px 0px  #dbc2a4 ;
    background-color: #a39c84;

    padding: 20px;
    max-width: 1000px; 
    margin: 0 auto; 
    margin-top: 1em;

    font-size: 1.3em;    
    line-height: 1.5em;

}

.content-photo{

  width: 20%;
 
}
.photo{

    float: left; 
  
    border-radius: 50%; 
    box-shadow: 0 0 20px #dbc2a4;
    cursor: zoom-in;

}

/* Partie - Projets */ 
#projects{

    display: flex;
    flex-direction:column;
    align-items: center;

    border-top: 0.3em solid;
    border-top-right-radius:5% ;
    border-top-left-radius: 5%;
    margin: 0%;
    margin-top: 2em;

}
#projects h1{
    font-size: 3em;
    font-style: oblique;
    margin: 0%;
    padding-top: 1em;
    color:#a39c84;

}

#projects h3{

    color:#8d5636 ;
    font-size: 2em;

}

#projects p{

    color:#664833;
    
}

.contener-modal{

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  width:100%;
  

}

.modal {

  display: flex;
  flex-direction:column;
  align-items: center;
   
  margin-top: 2em;
  padding: 0.5em 0.5em;
  width:20%;
  height: auto;
  
  background-color:  #a39c84;
  border: 0.2em solid #bdad96;
  border-radius: 20%;
  cursor:pointer;
}
.modal :hover{
  box-shadow: 10px 10px 20px #e6cba5; 
}
.image{
 
  border-radius: 100%;
}

</style>
