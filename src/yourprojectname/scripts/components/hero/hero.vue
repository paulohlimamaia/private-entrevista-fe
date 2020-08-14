<template>
  <div>
    <div class="hero">
      <img
        class="menu"
        @click="openMenu"
        src="/styles/images/menu.png"
        alt="menu"
      />
      <div id="overlay">
        <div id="overlay-close" @click="closeMenu">x</div>
        <img id="overlay-logo" src="/styles/images/logo-white.png" alt="logo" />
        <hr id="overlay-hr" />
        <div id="overlay-subtitle">The Podcast</div>
        <li>
          <p @click="home" >home</p>
          <p @click="show" >the show</p>
          <p @click="episodes" >episodes</p>
          <p @click="contact" >contact</p>
        </li>
      </div>
      <div class="hero-content">
        <img class="hero-logo" src="/styles/images/logo.png" alt="logo" />
        <hr />
        <h2 class="hero-subtitle">The Podcast</h2>
        <button @click="listenNow" type="button" class="hero-button">Listen Now</button>
      </div>

      <div class="stripes"></div>
      <div class="background-text">Podcast</div>
      <img class="blob1" src="/styles/images/blob1.png" alt="blob1" />
      <img class="mouse" src="/styles/images/mouse.png" alt="mouse" />
      <img
        class="arrow-down"
        src="/styles/images/arrow-down.png"
        alt="arrow-down"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
  methods: {
    openMenu(){
      document.getElementById("overlay").style.display = "block";
    },
    closeMenu(){
      document.getElementById("overlay").style.display = "none";
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
    listenNow(){
      this.$emit('listen-now')
    }
  }
};
</script>
