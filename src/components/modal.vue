
<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <h2 class="titre-modal">{{ project.titre }}</h2>
          <img :src="project.image" alt="Image du projet" class="project-image-modal">
          <p class="text-modal">{{ project.description }}</p>
          <p class="text-modal">{{ project.technologie }}</p>
          <a v-if="project.pdfPath" :href="project.pdfPath" target="_blank" class="text-modal">Voir le PDF</a>
        <a v-else :href="project.lienGitHub" target="_blank" class="text-modal">Lien GitHub</a>
      
        </div>
      </div>
    </div>
  </template>
 
  
  <script>

export default {
    props: ['isVisible', 'project',],
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  };

  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(63, 53, 44, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  
  .modal {
    
    max-width: 100%; 
    width: 50%;
    height:70%;

    background-color:#4e4f34;
    padding-top: 5em;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(63, 53, 44, 1);

  }
  
  .modal-content {
    width: 100%; 
    height:100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #ec0f0f;
  }

  .project-image-modal {
   
    width:16em;
    height: auto;
}

.titre-modal{
  text-align: center;
  font-size: 3em;
  font-style: oblique;
  margin: 0%;
  padding-bottom: 0.3em;
  color:#a39c84;
}

.text-modal{
  color:#cda279;
  font-size:1.1em;
}

.modal-content a {
  cursor: pointer;
}


  </style>

