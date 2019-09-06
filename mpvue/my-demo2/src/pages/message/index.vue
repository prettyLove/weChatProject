<template>
  <div>
    <div @tap="toMoviesDetail(index)" class="moviesContainer" v-for="(item,index) in moviesArr" :key="index">
      <img class="movies_img" :src="item.images.large" alt="美食">
      <div class="movies_info">
        <p class="movies_name">{{item.original_title}}</p>
        <p class="movies_year">年份：{{item.year}}</p>
        <p class="movies_dir">导演：{{item.directors[0].name}}</p>
      </div>
      <p class="movies_rating">{{item.rating.average}}</p>
    </div>
  </div>
</template>

<script>
  const MOVIE_URL='http://t.yushu.im/v2/movie/top250';
  export default {
    data(){
      return{
       moviesArr:[]
      }
    },
    beforeMount(){
      this.$fly.get(MOVIE_URL)
        .then( (response)=> {
          // console.log(response);
          let moviesArr=response.data.subjects;
          this.$store.dispatch('getMoviesArr',moviesArr) //将moviesArr分发到actions中
          this.moviesArr=moviesArr;
          console.log('moviesArr',this.moviesArr);
        })
        .catch( (error)=> {
          console.log(error);
        });
    },
    methods:{
      toMoviesDetail(index){
        wx.navigateTo({
          url:'/pages/messageDetail/main?index='+index
        })
      }
    }


  }
</script>

<style>
  .moviesContainer{
    display: flex;
    border-bottom: 1rpx solid #eee;
  }
  .movies_img{
    width: 128rpx;
    height:128rpx;
    margin-right: 20rpx;
  }
  .movies_info{
    width: 70%;
  }
  .movies_name{
    font-size: 32rpx;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .movies_year{
    font-size: 32rpx;
    color: #999;
    margin:5rpx 0;
  }
  .movies_dir{
    font-size: 30rpx;
    color: #666;
  }
  .movies_rating{
    font-size: 36rpx;
    color: red;
    font-weight: bold;
  }
</style>
