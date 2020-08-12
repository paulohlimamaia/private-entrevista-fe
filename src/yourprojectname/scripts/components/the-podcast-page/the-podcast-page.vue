<template>
  <div class="the-podcast-page">
    <div class="hero">
      <img
        class="menu"
        @click="openMenu"
        src="/styles/images/menu.png"
        alt="menu"
      />
      <div id="overlay">
        <div id="overlay-close" @click="closeMenu">x</div>
        <div id="overlay-title">valtech_</div>
        <hr id="overlay-hr" />
        <div id="overlay-subtitle">The Podcast</div>
        <li>
          <p>home</p>
          <p>the show</p>
          <p>episodes</p>
          <p>contact</p>
        </li>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">valtech_</h1>
        <hr />
        <h2 class="hero-subtitle">The Podcast</h2>
        <button type="button" class="hero-button">Listen Now</button>
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
  name: "the-podcast-page",
  methods: {
    openMenu(){
      document.getElementById("overlay").style.display = "block";
    },
    closeMenu(){
      document.getElementById("overlay").style.display = "none";
    },
    home(){
      console.log('home')
    },
    show(){
      console.log('show')
    },
    episodes(){
      console.log('episodes')
    },
    contact(){
      console.log('contact')
    }
  }
};
</script>
