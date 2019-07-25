<template>
  <div class="home" :class="{pc:!isMobile,mobile:isMobile}">
    <!-- 轮播图 -->
    <!-- <div class="swiper-container">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(slide,index) in slideList" :key="index" :style="{backgroundImage:'url('+slide+')'}"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div> -->
    <div id="slider">
      <swiper :options="swiperOption">
        <swiper-slide><img src="static/images/home/banner01.png"></swiper-slide>
        <swiper-slide><img src="static/images/home/banner02.png"></swiper-slide>
      </swiper>
      <div class="swiper-button-next"></div> 
      <div class="swiper-button-prev"></div> 
      <div class="swiper-pagination"></div> 
    </div>
    <!--main  -->
    <el-container class="system">
      <el-main>
        <el-row>
          <el-col :xs="12">
            <div class="mcq_tit">
              <h3>MI CAI QUAN</h3>
              <div class="mcq_tit_main">
                <p><span class="line"></span><i></i></p>
                <h4>迷彩泉</h4>
                <p><i></i><span class="line"></span></p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="system_main" :gutter="30">
          <el-col v-for="(system,index) in systemList" :key="index" :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div class="head">
              <div class="imgWrap">
                <img :src="system.imgSrc" alt="">
              </div>
            </div>
            <div class="tit">
              {{system.tit}}
            </div>
            <div class="info">
              <p> {{system.info}}</p>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-container class="advantage">
      <el-main>
        <el-row>
          <el-col :xs="12">
            <div class="advantage_tit">
              <div class="left">
                <span>4</span>
                <span>大</span>
              </div>
              <div class="right">
                <p><span>优势，见证迷彩泉</span><span>行业实力</span></p>
                <p>我们有优秀的核心优势，不断完善，不断追求，造就更高品质</p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="advantage_main" :gutter="30">
          <el-col :class="{ 'advantage_active' : !advantageImgFlag[index]}" v-for="(advantage,index) in advantageList"  :key="index" :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div class="wrap" @mouseenter="advantageEnter(index)" @mouseleave="advantageLeave(index)">
              <div class="head">
                  <img :src="advantageImgFlag[index] ? advantage.imgSrc : advantage.imgSrc_active" alt="">
              </div>
              <div class="tit">
                {{advantage.tit}}
              </div>
              <div class="info">
                <p> {{advantage.info}}</p>
              </div>
              <i class="arrowBottom"></i>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <!--  <el-container>
      <el-main>
        <el-row :gutter="10">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">1</el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">2</el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">3</el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">4</el-col>
        </el-row>
      </el-main>
    </el-container> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'
// import Swiper from "swiper"
import 'swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home',
  data() {
    return {
      swiperOption: {
        loop:true,
        autoplay: 2500,
        speed: 1000,
        pagination:{
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList:[
        require('../../../static/images/home/banner01.png'),
        require('../../../static/images/home/banner02.png')
      ],
      systemList:[
        {
          imgSrc:require('../../../static/images/home/system_icon_01_train.png'),
          tit:'培训体系',
          info:'内设技能培训、营销培训、管理培训和学历培训等板块，多方面满足支持退役军人就业创业的需求'
        },
        {
          imgSrc:require('../../../static/images/home/system_icon_01_train.png'),
          tit:'培训体系',
          info:'内设技能培训、营销培训、管理培训和学历培训等板块，多方面满足支持退役军人就业创业的需求'
        },
        {
          imgSrc:require('../../../static/images/home/system_icon_01_train.png'),
          tit:'培训体系',
          info:'内设技能培训、营销培训、管理培训和学历培训等板块，多方面满足支持退役军人就业创业的需求'
        },
        {
          imgSrc:require('../../../static/images/home/system_icon_01_train.png'),
          tit:'培训体系',
          info:'内设技能培训、营销培训、管理培训和学历培训等板块，多方面满足支持退役军人就业创业的需求'
        }
      ],
      advantageList:[
        {
          imgSrc:require('../../../static/images/home/advantage_icon_01_countryEnterprise.png'),
          imgSrc_active:require('../../../static/images/home/advantage_icon_01_countryEnterprise_active.png'),
          tit:'资源优势',
          info:'在教育培训、汽车新零售、供应链金融、消费金融、互联网科技等拥有较大影响力'
        },
        {
          imgSrc:require('../../../static/images/home/advantage_icon_01_countryEnterprise.png'),
          imgSrc_active:require('../../../static/images/home/advantage_icon_01_countryEnterprise_active.png'),
          tit:'资源优势',
          info:'在教育培训、汽车新零售、供应链金融、消费金融、互联网科技等拥有较大影响力'
        },
        {
          imgSrc:require('../../../static/images/home/advantage_icon_01_countryEnterprise.png'),
          imgSrc_active:require('../../../static/images/home/advantage_icon_01_countryEnterprise_active.png'),
          tit:'资源优势',
          info:'在教育培训、汽车新零售、供应链金融、消费金融、互联网科技等拥有较大影响力'
        },
        {
          imgSrc:require('../../../static/images/home/advantage_icon_01_countryEnterprise.png'),
          imgSrc_active:require('../../../static/images/home/advantage_icon_01_countryEnterprise_active.png'),
          tit:'资源优势',
          info:'在教育培训、汽车新零售、供应链金融、消费金融、互联网科技等拥有较大影响力'
        }
      ],
      advantageImgFlag:[true,true,true,true]
    }
  },
  components:{
    swiper,
    swiperSlide
  },
  computed:{
    ...mapState(['isMobile'])
  },
  methods:{
    advantageEnter(index){
      this.advantageImgFlag[index] = false
      this.$forceUpdate();//数据层次太多，需手动更新数据
    },
    advantageLeave(index){
      this.advantageImgFlag[index] = true
      this.$forceUpdate();//数据层次太多，需手动更新数据
    }
  },  
  mounted(){

  }

}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/swiper_change.styl"
  @import "~common/stylus/mcq_ui.styl"


  
  // mobile 手机端样式 
  .mobile
    &.home
      width 100%
      .swiper-container
        z-index 1
        .swiper-slide
          width 100%
          background-repeat no-repeat
          background-size cover
          background-position  center
          img 
            width 100%
            height 100%
  // pc 端样式 
  .pc
    &.home
      width 100%
      .swiper-container
        z-index 1
        .swiper-slide
          width 100%
          background-repeat no-repeat
          background-size cover
          background-position  center
          img 
            width 100%
            height 100%
      .system
        width 100%
        .system_main
          text-align center
          .head
            boxCenter()
            width 200px
            height 200px
            margin 0 auto
            border 1px solid $mainColor
            border-radius 50%
            .imgWrap
              boxCenter()
              width 170px
              height 170px
              margin 0 auto
              border 1px solid $mainColor
              border-radius 50%
          .tit
            font-size 30px
            color #242424
            margin-bottom 20px
          .info
            color #666
            height 80px
            font-size 14px
            p
              width 80%
              margin 0 auto 
              display block
      .advantage
        margin-bottom 0
        background-image url(../../../static/images/home/advantage_bg.png)
        text-align center
        .advantage_tit
          color #fff
          display flex
          
          // & .left,& .right
          //   display inline-block
          //   vertical-align:middle
          .left
            // align-content center
            // align-items center
            align-self center
          .right 
            // align-content center
            // align-items center
            align-self center
            
        .advantage_main
          &>.advantage_active
            color #fff
            &>.wrap
              background-image url(../../../static/images/home/advantageMain_bg_active.png)
              transition 0.3s
              &>.tit
                color #fff
                transition 0.3s
              &>.info
                color #fff
                transition 0.3s
              &>.arrowBottom
                &::after
                  transition 0.3s
                  background #fff
                  background-image url(../../../static/images/home/arrow_bottom.png)
                  background-position center
                  background-repeat no-repeat
          .wrap
            position relative
            padding-top 47px
            height 285px
            background-image url(../../../static/images/home/advantageMain_bg.png)
            background-repeat no-repeat
            background-position center
            background-size contain
            margin-bottom 15px
            .head
              width 94px
              height 67px
              margin 0 auto
              margin-bottom 13px
            .tit
              font-size: 22px;
              color: #222;
              font-weight: bold;
              margin-bottom 5px
            .info
              color: #666;
              font-size: 13px;
              width: 78%;
              max-width 280px
              margin: 0 auto;
              padding: 0 6px;
              textOverflowHide(3)
            .arrowBottom
              position absolute 
              bottom 7.5%
              left 0
              right 0
              display block
              width 36px
              height 36px
              margin 0 auto
              &::after
                content:""
                display block
                width 100%
                height 100%
                border-radius 50%
                border 1px solid #ccc
                // background #fff
                background-image url(../../../static/images/home/arrow_bottom.png)
                background-position center
                background-repeat no-repeat
      
</style>
