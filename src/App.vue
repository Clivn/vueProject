<template>
  <div id="app">
    <loading v-show="getLoading"></loading>
    <navbar v-show="getNav"></navbar>
    <transition
      enter-active-class="animated fadeIn"
    >
      <!--内容一致，就无需加载-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <footbar v-show="getFoot"></footbar>
  </div>
</template>

<script>

  import navbar from './components/navbar.vue';
  import footbar from './components/footbar.vue';
  import home from './components/home.vue';
  import {mapActions,mapGetters} from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  watch:{
    $route(to){
      console.log(to.path);
      this.changeRoute(to.path);
    }
  },
  mounted(){
    console.log(this.$route.path);
    this.changeRoute(this.$route.path);
  },
  methods:{
    changeRoute(path){
      path=path.substring(1);
      if(path=='home'||path=='follow'||path=='column'){
        this.$store.dispatch('showNav');
        this.$store.dispatch('showFoot');
      }
      if(path=='user'){
        this.$store.dispatch('hideNav');
        this.$store.dispatch('showFoot');
      }
      if(path=='login'||path=='reg'||path.indexOf('article')!=-1){
        this.$store.dispatch('hideNav');
        this.$store.dispatch('hideFoot');
      }
    }
  },
  components:{
    navbar,footbar
  },
  computed:mapGetters(
    ['getNav','getFoot','getLoading']
  )
}
</script>

<style>
 @import "assets/css/index.css";
</style>
