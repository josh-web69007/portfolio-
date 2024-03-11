<script>
import emailjs from 'emailjs-com';
emailjs.init('8y5D7R-Yfp_LWjhl8');
export default{
    data(){
        return{
            name:'',
            lastName:'',
            objet:'',
            message:'',
        }
    },
        methods:{
            submitmail(){
                const templateParams = {
                    to_name: 'Muylle Joshua',
                    from_name: `${this.name} ${this.lastName}`,
                    objet: this.objet,
                    message: this.message
                };
            emailjs.send('service_2t9fvbt','template_i8i418o', templateParams)
                .then((Response)=>{
                        console.log('E-mail envoyé avec succés !', Response);
                        alert('E-mail envoyé avec succés !');
            },  (error) =>{
                    console.log('Erreur lors de l\'envoie de l\'e-mail:', error);
                    alert('Erreur lors de l\'envoie de l\'e-mail:');
            });    
        }
    }
}
</script>

<template>
<div id="form">
       
       <form @submit.prevent="submitmail" method="post" id="form-content" >
         <h1>Me contacter</h1>
         <br>
          <span>
           <label for="name" >Nom:</label>
           <input v-model="name" type="text" id="name" placeholder="Votre nom" required>

           <label for="lastName">Prénom:</label>
           <input v-model="lastName" type="text" id="lastName" placeholder="Votre prénom" required>

           <label for="objet">Objet:</label>
           <input v-model="objet" type="text" id="objet" placeholder="Votre objet"  required>
         </span> 
         <br>
           <label for="message">Votre message</label>
           <input v-model="message" class="message" type="textarea" id="message"  clos="30" row="50"  placeholder="Votre message"  required>

           <button class="buttom" type="submit">Envoyer</button>  
       </form>
   </div>
</template>

<style>
#form h1{
  font-size: 3em;
    font-style: oblique;
    margin: 0%;
    color:#a39c84;
}
#form {

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
      
    border-top: 0.3em solid;
    border-top-right-radius:5% ;
    border-top-left-radius: 5%;
    margin: 0%;
 

    height: auto;
    width: 100%;
}

#form-content{

  height: 25em;
  width: 50em;
  margin: 0%;
  
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

label{
  font-weight: bold;
  color: #dbc2a4;
}
input{
  margin: 1em 1em;
  border: 0.3em solid #bdad96;
  border-radius: 10%;
  
}
.message{
  height: 25%;
  width: 50%;
}

.buttom{
  cursor: pointer;
}
</style>
