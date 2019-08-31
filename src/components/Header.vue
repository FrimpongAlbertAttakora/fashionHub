<template>
  <div class="header">
    <div class="header_top">
      <div id="logo"> 
        <div id="logo_1"><h1>DonnaKaran</h1></div>
        <div id="logo_2"><img src="../assets/karan3.png" alt=""></div>
      </div>
      <div id="header_top_icon">
        <p>Icon</p>
      </div>
    </div>
    <div class="header_middle">
      <div class="search_logo">
        <div id="search_img"><img src="../assets/karan1.png" alt=""></div>
        <div id="search_input"><input type="search" name="" placeholder="SEARCH"></div>
      </div>
      <div>
      <nav> 
        <ul> 
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/clothing">clothing</router-link></li>
          <li><router-link to="/bags">Bags</router-link></li>
          <li><router-link to="/shoes">Shoes</router-link></li>
        </ul>
      </nav>
      </div>
    </div>
    <div class="header_down">
      Enjoy an extra 30% off sale styles with code: DKSALE30 | Complimentary shipping on US orders of $75+ View Details Donna Karan New York
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {

}
}
</script>


<style scoped>
  .header {
    background-color:#383333;
    color: #ffffff;
  }

  .header_top {
    background-color: #000;
    display: flex;
    flex-wrap: wrap;
  }

  #header_top_icon {
    flex: 1;
  }

  #logo {
    display: flex;
    flex-basis: 40%;
    flex: 1;
  
  }
  #logo_1 {
    background-color: #383333;
  }

  .search_logo {
    display: grid;
    grid-template-columns: 6fr 2fr;
    justify-items: stretch;

  }

  #search_input input[type=search] {
    background-color: #383333;
    border: 1px solid #ffffff;
    padding: 4px;
    height: 25px;
    width: 250px;
    color: #ffffff;
    margin-right: 2rem;
    margin-top: 1rem;
    overflow: hidden;
  }
  
  #search_img img{
    margin-left: 20%;
  }
  
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color:#ffffff;
    opacity: 1; /* Firefox */
  }

  .header_down {
    border-top: 1px solid #ffffff;
    margin-top: 1em;
    padding: 1rem;
  }

  ul{
    margin: 0;
    padding: 0;
    }

  nav a{
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    }

  nav a:hover{
    text-decoration: underline;
    }

  nav li{
    display: inline;
    padding: 0 30px 0 30px;
    }

</style>
