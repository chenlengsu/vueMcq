<template>
    <footer class="footer" :class="{pc:!isMobile,mobile:isMobile}">
        <div class="footerMain">
            <div class="leftNav">
                <ul>
                    <li v-for="(footNav,index) in navList" :key="index">
                        <h3>{{footNav.text}}</h3>
                        <ul v-show="!isMobile">
                            <li v-for="(footChildLi,childLiIndex) in footNav.dropDownList" :key="childLiIndex">
                                <a href="">{{footChildLi.dropDownText}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="rightWrap">
                <div class="tel_Time">
                    <div class="tel">
                        <h4>服务热线</h4>
                        <p>131-571-72521</p>
                    </div>
                    <div class="serviceTime">
                        <h4>客服工作时间</h4>
                        <p>09：00-18：00（周一到周五）</p>
                    </div>
                </div>
                <div class="qrCode" v-show="!isMobile">
                    <div class="imgQrCode"> 
                        <img :src="'./static/images/footer/weCat_user.jpg'" alt="">
                    </div>
                    <div class="imgQrCode">
                        <img :src="'./static/images/footer/weCat_user.jpg'" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="end">
            <p>Copyright ©2019 浙江mcq 浙ICP备19xxxxxx号</p>
        </div>
    </footer>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'footerVue',
    data() {
        return {
            msg: '',
            navList:[
                {
                    text:'了解mcq',
                    url:'aboutUs',
                    id:1,
                    dropDownList:[
                        {
                            dropDownText:'mcq简介'
                        }
                    ]
                },
                {
                    text:'关于我们',
                    url:'aboutUs',
                    id:2,
                    dropDownList:[
                        {
                            dropDownText:'业务介绍'
                        }
                    ]
                },
                {
                    text:'新闻动态',
                    url:'',
                    id:3,
                    dropDownList:[
                        {
                            dropDownText:'公司动态'
                        },
                        {
                            dropDownText:'行业动态'
                        }
                    ]
                },
                {
                    text:'退役政策',
                    url:'',
                    id:4,
                    dropDownList:[
                        {
                            dropDownText:'退役军人法律'
                        },
                        {
                            dropDownText:'退役军人行政法规'
                        },
                        {
                            dropDownText:'退役军人政策文件'
                        }
                    ]
                }
            ],
            activeName:'首页'
        }
    },
    computed:{
        ...mapState(['isMobile'])
    },
    methods:{
        activeNavFun(i){
            this.activeName = this.navList[i].text
        }
    }
}
</script>

<style lang="stylus" scoped>

    footerHeight = 140px
    
   /* pc 端 样式 */
    .pc
        &.footer 
            padding-top: 50px;
            padding-bottom 10px
            background: #242424;
            color #eee
            width 100%
            .footerMain
                width 100%
                margin-bottom 100px
                &::after
                    display table
                    content ""
                    clear both
                .leftNav
                    float left
                    width 50%
                    padding-left 50px
                    border-right 1px solid #999
                    height footerHeight
                    &>ul>li
                        float left
                        width 25%
                        h3
                            font-size 16px
                            color inherit
                            margin-bottom 18px
                        &>ul>li
                            margin-bottom 15px
                            &>a
                                font-size 13px
                                color inherit
                .rightWrap
                    float left
                    width 50%
                    padding-right 50px
                    .tel_Time
                        float left
                        width 41.66666667%
                        max-width 260px
                        height footerHeight
                        padding-left 20px
                        padding-top 15px
                        font-size 16px
                    .qrCode
                        float left
                        width: 58.33333333%;
                        max-width: 371px;
                        border-left 1px solid #999
                        height footerHeight
                        padding-top 20px
                        padding-left 50px
                        .imgQrCode 
                            display inline-block
                            margin-right 20px                        
                            img
                                display block
                                width 100px
                                height 100px
            .end
                margin 0 50px
                border-top 2px solid #999
                padding-top 5px
                text-align center
                font-size 15px

       
    /* mobole 端 样式 */
    .mobile
        &.footer
            width 100%
            padding-top: 50px;
            padding-bottom 10px
            text-align center
            background: #242424;
            color #eee
            .footerMain
                width 100%
                margin-bottom 50px
                .leftNav
                    margin-bottom 15px
                    &>ul>li
                        display inline-block
                        margin 0 10px
                .rightWrap
                    .tel_Time
                        .tel
                            h4,p
                                display inline
            .end
                margin 0 50px
                border-top 2px solid #999
                padding-top 5px
                font-size 15px
                 


</style>   
