<template>
    <footer>
        <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">

        <div class="footer-main">
            <div id="footer-about">
                <p><strong>ABOUT</strong></p>
                <p>STORES</p>
                <p>CAREERS</p>
                <p>OUR STORY</p>
                <p>ACCESSIBILITY</p>
            </div>
            <div id="footer-help">
                <p><strong>HELP</strong></p>
                <p>CUSTOMER SERVICE</p>
                <p>CONTACT US</p>
                <p>DKNY INSIDER</p>
            </div>
            <div id="footer-legal">
                <P><strong>LEGAL</strong></P>
                <P>TERMS OF USE</P>
                <P>PRIVACY POLICY</P>
                <P>EU PRIVACY NOTICE</P>
                <P>UK TAX STRATEGY</P>
                <P> CALIFONIA SB </P>
            </div>
            <div id="footer-social-network">
                <p><strong>DKNY</strong></p>
                <p id="social-icons">
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-tumblr"></i>
                    <i class="fab fa-pinterest-p"></i>
                </p>

                <p><strong>DONNAKARAN</strong></p>
                <p id="social-icons">
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                </p>

                <p id="privicy">
                    <span>Site Map | </span>
                    <span>Terms of Use |</span>
                    <span>Supply Chain</span>
                </p>     
            </div>
            <div id="footer-email">
                <p><strong>Sign up for our newsletter</strong></p>
                <p><input type="email" placeholder="EMAIL ADDRESS"></p>
                <p><input type="submit" placeholder="SUBMIT"></p>
            </div>
        </div>
    </footer>
</template>






<script>
export default {
    name: "Footer",
    components: {

    }
}
</script>



<style scoped>
.footer-main {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    background-color:#000;
    color: #ffffff;
    height: 20rem;
}

.footer-main div{
    margin-top: 1rem;
}

.footer-main div p{
    margin-top: 1rem;
    text-align: left;
    margin-left: 3rem;
    
}

#social-icons {
    letter-spacing: 1.5rem;
    color: #383333;
}

#social-icons :hover {
    letter-spacing: 1.5rem;
    color: #ffffff;
}

#footer-social-network p{
    margin-bottom: 2rem;
}

#footer-email p input[type=submit] {
    background-color: #383333;
    border: 1px solid #ffffff;
    padding: 4px;
    height: 25px;
    width: 11rem;
    color: #ffffff;
    
  }

#footer-email p input[type=email] {
    background-color: #000;
    border: 1px solid #ffffff;
    padding: 4px;
    height: 25px;
    width: 10rem;
    color: #ffffff;
  }

::placeholder { 
    color:#ffffff;
    opacity: 1; 
  }

#privicy {
    display: flex;
    font-size: 80%;
}
</style>