<template>
    <header class="header" :class="{pc:!isMobile,mobile:isMobile}">
        <div class="container">
            <div class="logo">
                <h1>
                    <img :src="'./static/images/header/logo.png'" alt="logo">
                    <p>专注于退役军人服务</p>
                </h1>
            </div>
            <div class="nav" :class="{navOut:isNavShow}" ref="navBar">
                <ul>
                    <li v-for="(nav , index) in navList" :key="index" :class="{activeNav:activeName == nav.url }" @click="activeNavFun(index)">
                        <router-link :to="{name:nav.url}" tag="a" href="#">{{nav.text}}
                            <span class="caret" v-if="nav.dropDownList"></span>
                        </router-link>
                        <ul class='dropDownList' v-if="nav.dropDownList">
                            <li v-for="(navDropDown,dropDownIndex) in nav.dropDownList" :key="dropDownIndex">
                                <a href="#">{{navDropDown.dropDownText}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="navBtn" v-show="isMobile" @click="isNavShow = !isNavShow">
                <span class="btnStrip"></span>
                <span class="btnStrip"></span>
                <span class="btnStrip"></span>
            </div>
            <div class="mask" v-show="isNavShow" @click="isNavShow = !isNavShow"></div>
        </div>
    </header>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'headerVue',
    data() {
        return {
            msg: '',
            navList:[
                {
                    text:'首页',
                    url:'home',
                    id:1
                },
                {
                    text:'关于我们',
                    url:'aboutUs',
                    id:2,
                    dropDownList:[
                        {
                            dropDownText:'公司介绍'
                        },
                        {
                            dropDownText:'背景介绍'
                        }
                    ]
                }
            ],
            activeName:'home',
            isNavShow:false
        }
    },
    computed:{
        ...mapState(['isMobile'])
    },
    methods:{
        activeNavFun(index){
            this.activeName = this.navList[index].url
        },
        navBarFun(){
            if(this.isNavShow){
                this.isNavShow = false
            }else{
                this.isNavShow = true
            }
            
        }
    },
    mounted(){
        this.activeName = this.$route.name
    },
    created(){
    }
}
</script>

<style lang="stylus" scoped>
    headerHeight = 120px
    .header 
        width 100%
        height headerHeight
        background: #fff
        text-align center
        .container
            width 100%
            height 100%
            margin 0 auto
            padding 0 50px
            &::after
                visibility hidden
                display block
                font-size 0
                content " "
                clear both
                height 0
        .logo
            float left
            height 100%
            h1
                display block
                height 100%
                padding 15px
                img,p
                    display inline-block
                    vertical-align middle   
                img 
                    height 100%
                p
                    color #666
                    font-size 22px
                    font-weight 400
        .nav
            float right
            height 100%
            &>ul  
                height 100%
                &>li
                    position relative  
                    height 100%
                    line-height headerHeight
                    display inline-block
                    vertical-align middle
                    padding 41px 0
                    margin-right 15px
                    &:hover .dropDownList
                        display block
                    &.activeNav>a
                        background-color: $mainColor
                        color: #fff;
                        text-align: center;
                        border-radius: 26.5px;
                    &>a
                        color #777
                        display block
                        width 112px
                        height 38px
                        line-height 38px
                        &:hover
                            background-color: $mainColor
                            color: #fff;
                            text-align: center;
                            border-radius: 26.5px;
                        &>.caret 
                            display: inline-block;
                            width: 0;
                            height: 0;
                            margin-left: 2px;
                            vertical-align: middle;
                            border-top: 4px dashed;
                            border-top: 4px solid dashed
                            border-right: 4px solid transparent;
                            border-left: 4px solid transparent;
                    .dropDownList
                        display none
                        position absolute
                        top 120px
                        width 100%
                        background #fff
                        border 1px solid #eee
                        box-shadow 0 6px 12px rgba(0, 0, 0, .175);
                        padding: 5px 0;
                        z-index 2
                        &>li
                            height auto
                            line-height 1
                            padding 16px 0
                            &>a
                                color #333
                                &:hover
                                    color $mainColor
                    
                        


    /* pc端样式 */
    .pc
        &.header
            display block

    /* 手机端样式 */
    .mobile
        &.header
            display block
            .container
                width 100%
                padding 0 10px  
            .nav
                position fixed
                left -200px 
                top 0
                width 60%
                height 100vh
                background #f5f5f5
                box-shadow -1px 1px 5px #000
                transition 0.3s
                opacity 0
                z-index 10
                &.navOut
                    left 0
                    opacity 1
                    &>ul
                        margin-top 10px
                        &>li
                            width 100%
                            height 60px
                            padding 0
                            margin 0
                            text-align center
                            border-bottom 1px solid #ddd 
                            &>a
                                width auto 
                                height 100%
                                line-height 60px 
                                font-size 20px
                                border-radius 0
                .dropDownList
                    display none !important
            .navBtn
                float right
                width 40px
                height 40px
                margin-top 40px
                .btnStrip
                    display block
                    width 30px 
                    height 5px
                    margin 0 auto
                    margin-bottom 5px
                    background $mainColor
            .mask
                position fixed
                left 0
                top 0
                width 100%
                height 100vh
                z-index 5
                opacity 0
                


































</style>   
