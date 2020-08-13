<template>
  <div>
    <div class="episodes">
      <div class="episodes-content">
        <h1 class="episodes-title">Last Episodes</h1>
        <hr class="episodes-hr" />
        <div class="episodes-menu">
            <a href="#">all</a>
            <a href="#">development</a>
            <a href="#">design</a>
            <a href="#">project management</a>
        </div>
        <div class="episodes-cards">
            <template v-for="episode in episodes">
            <div class="episode-card" :key="episode.title">
                <div class="episode-card-content">
                    <header class="episode-card-header">
                        <h1 class="episode-card-title">{{episode.title}}</h1>
                        <h2 class="episode-card-subtitle">{{episode.dev}}</h2>
                        <h3 class="episode-card-text">{{episode.job}}</h3>
                    </header>
                    <footer class="episode-card-footer">
                        <img @click="play(episode)" class="footer-button" src="/styles/images/play.png" alt="play" />
                        <img @click="dev(episode.dev)" class="footer-button" :src="episode.pic" alt="dev" />
                    </footer>
                </div>
            </div>
            </template>
        </div>
        <button @click="view" type="button" class="episodes-button">View More</button>
      </div>
      <div class="circle"></div>
      <div class="background-text-episodes">Episodes</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "episodes",
  data() {
    return {
      episodes: [
          {
              title: 'Data Structures',
              dev: 'Jacqueline Cardozo',
              job: 'Front-end Dev Leader',
              pic: '/styles/images/dev1.png'
          },
          {
              title: 'tech to watch in 2020',
              dev: 'João Olivio',
              job: 'Front-end Dev Leader',
              pic: '/styles/images/dev2.png'
          },
          {
              title: 'how to get better at problem solving',
              dev: 'Derrick Pierce',
              job: 'Front-end Developer',
              pic: '/styles/images/dev3.png'
          },
          {
              title: 'new css logical properties',
              dev: 'Amanda Poole',
              job: 'Front-end Intern',
              pic: '/styles/images/dev4.png'
          },
      ]
    };
  },
  methods: {
      dev(developer){
          this.$emit('dev', developer);
      },
      play(episode){
          this.$emit('play', episode);
      },
      view(){
          this.$emit('view');
      }
  }
};
</script>
