<template>
  <div class="header">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <div class="header_top">
      <div id="logo"> 
        <div id="logo_1"><h1>DonnaKaran</h1></div>
        <div id="logo_2"><img src="../assets/karan3.png" alt=""></div>
      </div>
      <div id="header_top_icon">
        <p><i class="far fa-heart"></i></p>
        <p><i class="far fa-user" aria-hidden="true"></i></p>
        <p><i class="fa fa-shopping-bag"></i></p>
      </div>
    </div>
    <fixed-header :threshold="200" >
    <div class="header_middle">
      <div class="search_logo">
        <div id="search_img"><img src="../assets/karan1.png" alt=""></div>
        <div id="search_input">
          <input type="text" placeholder="SEARCH ">
          <i class="fas fa-search icon"></i>
        </div>
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
    </fixed-header>
    <div class="header_down">
      Enjoy an extra 30% off sale styles with code: DKSALE30 | Complimentary shipping on US orders of $75+ View Details Donna Karan New York
    </div>
    
  </div>
</template>

<script>

import FixedHeader from 'vue-fixed-header'

export default {
  name: 'Header',
  props: {
      }, 
  components: {
    FixedHeader
  }
    }

</script>


<style scoped>
  .header_middle.vue-fixed-header--isFixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
  }

  .header_middle {
    background-color: #383333;
  }

  .header {
    background-color:#383333;
    color: #ffffff;
  }

  .header_top {
    background-color: #000;
    display: flex;
    flex-wrap: wrap;
  }

  #header_top_icon p{
    display: inline;
    margin-right: 5rem;
  }

  #header_top_icon {
    margin-top: 2rem;
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

  #search_input {
    background-color:#383333;
    margin-top: 1rem;
    overflow: hidden;
  }

  #search_input input[type=text] {
    background-color: #383333;
    border: 1px solid #ffffff;
    height: 25px;
    width: 250px;
    color: #ffffff;
    overflow: hidden;
    border-right: none;
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

  #search_input i {
    border: 1px solid #ffffff;
    position: absolute;
    border-left: none;
    }

  .icon { 
    text-align: center; 
    height: 27px;
    margin-right: 1rem;
    } 

</style>
