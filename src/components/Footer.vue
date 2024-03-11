<script >

</script>

<template>
<div id="footer">
   <div class="logo">
        <a class="logo1" href="https://www.linkedin.com/in/joshua-muylle-129a062b2/" target="_blank"><img
          src="../Divers/Logo/linkedin.svg"
          alt="logo linkedin"
        /></a>
       <a class="logo2" href="https://github.com/josh-web69007" target="_blank"><img
          src="../Divers/Logo/github.svg"
          alt="logo GitHub"
        /></a> 
      </div>
      <div>
        <small class="footer__date"
        >Dernière mise à jour le
        <time datetime="2024-02-26">10 Mars 2024</time>
      </small>
    </div>
</div>


</template>

<style scoped>

#footer {
    
    width: 100%;
    
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    align-items:center;
           
}

.logo{

  display: flex;
  flex-direction: row;
  justify-content:center;
  
  width: 50%;
  margin: 1em 0em;
  
}

.logo1{
  padding-right: 2em;
  width:4%;
}

.logo2{
  width: 4%;
}

small {
  color:#dbc2a4;
}
</style>
