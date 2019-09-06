<template>
    <div @tap="" class="moviesDetailContainer" >
       <div class="movies_img">
         <img :src="moviesDetail.images.large" alt="">
       </div>
        <p class="movies_name">{{moviesDetail.original_title}}霸王别姬</p>
        <div class="detail_content">
           <span>评分：{{moviesDetail.rating.average}}</span>
           <span>导演：{{moviesDetail.directors[0].name}}</span>
           <span>主演：{{moviesDetail.casts[0].name}}  {{moviesDetail.casts[1].name}}  {{moviesDetail.casts[2].name}}</span>
        </div>
        <button>我要观影</button>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "message-dail",
        data(){
         return{
           index:'',
           moviesDetail:{},
         }
        },
        computed:{
          ...mapState(['moviesArr'])
        },
      beforeMount(){
          console.log(this);
        //使用this.$mp.query.index取代onLoad中的options
        this.index=this.$mp.query.index;
        this.moviesDetail=this.moviesArr[this.index];
        console.log(this.moviesDetail);
      }
    }
</script>

<style >
  .moviesDetailContainer{
    margin-top: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .movies_img{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20rpx;
  }
  .movies_name{
    margin-top: 60rpx;
    text-align: center;
    font-weight: bold;
  }
  .detail_content{
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-top:30rpx;
    line-height: 50rpx;
    font-size:26rpx;
  }
  button{
    width: 70%;
    height:80rpx;
    background: green;
    line-height: 80rpx;
    color:#fff;
    font-size:28rpx;
    margin-top:20rpx;
  }
</style>
