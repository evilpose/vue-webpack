<template>
    <div>

    <!-- 中间轮播图区域 -->

    <mt-swipe :auto="4000">
    <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
    <!-- <mt-swipe-item v-for="item in LunbotuList" :key="item.url">
        <img :src="item.img" alt="">
    </mt-swipe-item> -->
    <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    </mt-swipe>


    <!-- 九宫格到六宫格的改造 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-home"></span> -->
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span> -->
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-location"></span> -->
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-search"></span> -->
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-phone"></span> -->
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
    </ul> 

    <!-- <h3>HomeContainer</h3> -->

    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            // LunbotuList:[]  // 保存轮播图的数组
        }
    },
    // created(){
    //     this.getLunbotu()
    // },
    methods:{
        // getLunbotu(){   //获取轮播图的数据的方法
        // this.$http.get('http://39.105.29.12:8585/app/v1/albums/active').then(resule =>{
        //     // console.log(resule.body)
        //     if(resule.body.statu === 0){
        //         //成功的
        //         this.LunbotuList = resule.body.message;
        //     }else{
        //         //失败的
        //         Toast('获取加载轮播图失败')
        //     }
        // })
        // }
    },

}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    //nth-child(2) 父元素的第二个子元素
    // .mint-swipe-item:nth-child(1){
    //     background-color: red;
    // }
    // .mint-swipe-item:nth-child(2){
    //     background-color: rebeccapurple;
    // }
    // .mint-swipe-item:nth-child(3){
    //     background-color: yellowgreen;
    // }
    .mint-swipe-item{   // & 符号形成嵌套，形成交集选择器
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: rebeccapurple;
        }
        &:nth-child(3){
            background-color: yellowgreen;
        }
        img{
        width:100%;
        height: 100%;
            }
        }   
    }
    
    .mui-grid-view.mui-grid-9{
        background-color: white;
        border: none;
        img{
            width: 60px;
            height: 60px;
        }
           
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size: 13px
    }

</style>
