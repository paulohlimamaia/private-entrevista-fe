import Vue from "vue";

// Import Components
import HireMePlease from "./components/hire-me-please/hire-me-please.vue";
import Hero from "./components/hero/hero.vue";
import Episodes from "./components/episodes/episodes.vue";
import About from "./components/about/about.vue";
import Next from "./components/next/next.vue";
import Footer from "./components/footer/footer.vue";



// Vue Declaration for Components
Vue.component(HireMePlease.name, HireMePlease);
Vue.component(Hero.name, Hero);
Vue.component(Episodes.name, Episodes);
Vue.component(About.name, About);
Vue.component(Next.name, Next);
Vue.component(Footer.name, Footer);

// Import Directives
import { backgroundDirective, ellipsis } from "./directives";

// Vue Declaration for Directives
Vue.directive(ellipsis.name, ellipsis);
Vue.directive(backgroundDirective.name, backgroundDirective);

new Vue({
  // eslint-disable-line no-new
  el: "#main-container"
});
