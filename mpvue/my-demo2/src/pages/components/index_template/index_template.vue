<template>
    <div class="tmpContainer" @tap="toDetail">
      <div class="avatar_date">
        <img :src="item.detail_love_image1" alt="">
        <span>{{item.title}}</span>
      </div>
      <p class="company">mpvue学习</p>
      <img class="detail_img" :src="item.detail_img" alt="">
      <p class="content">{{item.detail_content}}</p>
      <div class="view_start_container">
        <img :src="item.headImgSrc" alt="">
        <span>{{item.love_count}}</span>
        <img :src="item.avatar">
        <span>{{item.attention_count}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index_template",
       props:[
         'item','index'
       ],
      beforeMount(){
          // console.log('item',item,index)
      },
      methods:{
        toDetail(){
          //跳转到详情页+传参过去index
          wx.navigateTo({
            url:'/pages/details/main?index='+this.index
          })
        }
      }


    }
</script>

<style scoped>
 .tmpContainer{
   display: flex;
   flex-direction: column;
   border-bottom: 1px solid #333;
 }
  .avatar_date{
    padding:10rpx;
  }
  .avatar_date img{
    width: 60rpx;
    height:60rpx;
    vertical-align: middle;
    margin-right: 10rpx;
  }
 .avatar_date span{
   font-size: 28rpx;
   color: #333;
   vertical-align: middle;
 }
  .company{
    font-size: 30rpx;
    font-weight: bold;
    padding:10rpx;
  }
  .detail_img{
    width: 100%;
    height:460rpx;
  }
  .content{
    text-indent: 20rpx;
    font-size: 32rpx;
    text-align: center;
    line-height: 50rpx;
  /*文字间距(针对字母和中文)*/
    letter-spacing: 3rpx;
  }
  .view_start_container img{
    width: 32rpx;
    height: 32rpx;
    vertical-align: middle;
    margin-left: 10rpx;
  }
  .view_start_container span{
    font-size: 28rpx;
    color: #333;
    margin-left: 10rpx;
  }
</style>
