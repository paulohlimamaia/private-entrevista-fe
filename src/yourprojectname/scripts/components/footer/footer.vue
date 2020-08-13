<template>
  <div>
    <div class="footer-div">
      <div class="footer-content">
        <h1 class="footer-title">Subscribe</h1>
        <hr class="footer-hr-2" />
        <h4 class="footer-text">Subscribe to our newsletter, to be always aware of our company events.<br>We build the most powerful and flexible tools for internet commerce.</h4>
        <br><br>
        <form id="subscribe-form" v-on:submit.prevent="subscribe">
            <input type="text" name="email" placeholder="Type your email">
            <br class="breakline-mobile">
            <br class="breakline-mobile">
            <button type="submit" class="subscribe-button">send</button>
        </form>
        <hr class="footer-hr-white" />
        <img class="footer-logo" src="/styles/images/logo-white.png" alt="logo" />
        <hr class="footer-hr" />
        <div class="footer-menu">
            <a @click="home" >home</a>
            <a @click="show" >the show</a>
            <a @click="episodes" >episodes</a>
            <a @click="contact" >contact</a>
        </div>
        <h5>{{getYear()}} Valtech All rights reserved</h5>
      </div>

      <div class="background-text-footer">Subscribe</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-div",
  methods: {
    subscribe(submitEvent){
      if(submitEvent.target[0].value){
        this.$emit('subscribeEvent', submitEvent.target[0].value);
      }
    },
    home(){
      this.$emit('home')
    },
    show(){
      this.$emit('show')
    },
    episodes(){
      this.$emit('episodes')
    },
    contact(){
      this.$emit('contact')
    },
    getYear(){
      return new Date().getFullYear();
    }
  }
};
</script>
