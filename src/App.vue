<template>
    <div id="app">
      <headerVue></headerVue>
      <router-view/>
      <footerVue></footerVue>
    </div>
</template>

<script>
import headerVue from "./pages/header/header.vue"
import footerVue from "./pages/footer/footer.vue"
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'App',
  components:{
    headerVue,  
    footerVue  
  },
  computed:{
    ...mapState(['isMobile'])
  },
  methods:{
    ...mapMutations(['changeIsMobile']),
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  },
  created(){
    if (this._isMobile()) {
      this.changeIsMobile(true)
      console.log(this.isMobile)
      // alert("手机端");
    } else {
      this.changeIsMobile(false)
      console.log(this.isMobile)
      // alert("pc端");
    }
    
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
}
ul,ol{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
