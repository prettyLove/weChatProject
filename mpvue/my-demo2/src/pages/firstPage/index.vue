<template>
  <div class="firstPageContainer">
    <img v-if="isShow" class="firstPage-img" :src="userInfo.avatarUrl" alt="">
    <button v-else class="btn" open-type="getUserInfo" @getuserinfo="getUserInfo">点击获取用户登录</button>
    <p class="userName">{{userInfo.nickName}}</p>
    <div class="goStudy" @tap="toIndex">
      <p >开启小程序之旅</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userInfo:{},
      isShow:false
    }

  },
  onLoad(){
    console.log('======onload=========');
  },
  beforeMount(){
    console.log('======beforeMount=========');
    //获取用户登录信息
    this.handleGetUserInfo();

  },
  mounted(){
    console.log("---mounted---")

  },
  methods:{
    //获取用户登录信息
    handleGetUserInfo(){
      wx.getUserInfo({
        success:(data)=>{
          console.log('success-data',data);
          //更新data中的数据
          this.userInfo=data.userInfo;
          this.isShow=true;
        },
        fail:()=>{
          console.log('信息获取失败');
        }
      })
    },
    getUserInfo(data){
       //判断用户授权信息
      if(data.mp.detail.rawData){
       //用户授权
        this.handleGetUserInfo();
      }else {
        console.log(data)
      }
    },

    toIndex(){
      // wx.navigateTo({
      //   url:'/pages/list/main'
      // })
      wx.switchTab({
        url:'/pages/index/main'
      })
    },
    //阻止冒泡事件可以在子元素中帮上事件@tap.stop="headleChild"即可
    // headleChild(){
    //   console.log('冒泡');
    // }
  }

}
</script>

<style>
  page{
    background: #8ed145;
  }
 .firstPageContainer{
   display: flex;
   flex-direction: column;
   align-items: center;
   color: #333;
 }
  .firstPage-img{
    width: 200rpx;
    height: 200rpx;
    border-radius: 100rpx;
    margin:100rpx 0;
  }
  .userName{
    font-size: 50rpx;
    font-weight: bold;
    margin:100rpx 0;
  }
  .goStudy{
    width: 220rpx;
    height:88rpx;
    border:1rpx solid #eee;
    font-size: 24rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
  }
  .btn{
    width: 300rpx;
    height: 300rpx;
    border-radius: 150rpx;
    margin:100rpx 0;
    line-height: 300rpx;
    font-size: 26rpx;
    text-align: center;

  }
</style>
