<template>
  <div class="home">
    <div id="images_1">
      <div><img src="../assets/dknyPICS/dkny21.jpg" alt="" srcset=""></div>  
    </div>

    <div id="images">
      <div id="i_2"><img src="../assets/dknyPICS/dkny22.jpg" alt="" srcset=""></div>
      <div id="i_2"><img src="../assets/dknyPICS/dkny23.jpg" alt="" srcset=""></div>
      <div id="i_2"><img src="../assets/dknyPICS/dkny10.jpg" alt="" srcset=""></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    
  }
}
</script>

<style scoped>
  
  
  #images_1 img{
    height: 100%;  
    width: 100%;
      }

  #images {
    margin-top: 1%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    ;
      }

  #i_1 img {
    height: 25%;
    width: 40%;
    align-self: center;
  }

  #i_2 img {
    height: 20em;
    width: 20em;
    align-self: center;
  }


</style>