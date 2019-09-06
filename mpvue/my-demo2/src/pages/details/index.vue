<template>
  <div class="detailContainer">
    <img class="detail_img" :src="detailObj.detail_img" alt="">
    <img class="music_img" @tap="handleMusicPlay" :src="'isMusicPlay'?'/static/images/play.png':'/static/images/pause.png'">
    <div class="avatar_date">
      <img :src="detailObj.avatar" alt="">
      <span>{{detailObj.author}}</span>
      <span>发布于</span>
      <span>{{detailObj.date}}</span>
    </div>
    <p class="company">{{detailObj.title}}</p>
    <div class="collection_share_container">
      <div class="collection_share">
        <img @tap="handleCollection" :src="isCollected?'/static/images/message-active.png':'/static/images/message.png'"/>
        <img @tap="handleShare" src="/static/images/profile.png"/>
      </div>
      <div class="line"></div>
    </div>
    <button open-type="share">转发此文章</button>
    <p class="contents">{{detailObj.detail_content}}</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import isPlayObj from '../datas/isPlay'
  export default {
    data() {
      return {
        index:'',
        detailObj:{},
        isCollected:false, //表示是否收藏
        isMusicPlay:false, //表示音乐是否播放
      }
    },
    onLoad() {
      console.log('======onload=   一般优先使用vue的生命周期========');
    },
    beforeMount() {
      console.log('-----beforeMount------',this);//确认是否拿到listTmp数据
      //使用this.$mp.query.index取代onLoad中的options
      this.index=this.$mp.query.index;

      //预处理工作：本地是否收藏的缓存
      let oldStorage=wx.getStorageSync('isCollected');
      if(!oldStorage){//如果缓存为空
        wx.setStorage({
          key:'isCollected',
          data:{}
        })
      }else{
        //用户缓存过
        // oldStorage[this.index]--->true||false||undefined
        this.isCollected=(oldStorage[this.index]?true:false)
      }

      //判断当前页面加载的时候音乐是否在播放
      isPlayObj.pageIndex===this.index && isPlayObj.isPlay?this.isMusicPlay=true:this.isMusicPlay=false;

      //监听音乐的播放
      wx.onBackgroundAudioPlay(()=>{
        console.log('音乐播放');
        this.isMusicPlay=true;
        isPlayObj.pageIndex=this.index;
        isPlayObj.isPlayObj=true;
      })
      wx.onBackgroundAudioPause(()=>{
        console.log('音乐暂停');
        this.isMusicPlay=false;
        isPlayObj.isPlayObj=false;
      })

    },
    mounted() {
      // console.log("---mounted---",this)//确认是否拿到listTmp数据
      //更新state中的数据
      this.detailObj=this.listTmp[this.index];
      // console.log('detailObj',this.detailObj);
    },
    methods: {
      handleCollection(){
        let isCollected=!this.isCollected;
        this.isCollected=isCollected;
        let title=isCollected?'收藏成功':'取消收藏'
        wx.showToast({
          title,
          icon:'success'
        })

        //读取之前本地缓存的状态查看是否收藏
        let oldStorage=wx.getStorageSync('isCollected');
        oldStorage[this.index]=isCollected;

        //将本次设置的结果再缓存到本地
        wx.setStorage({
          key:'isCollected',
          data:oldStorage
        })
      },
      handleMusicPlay(){
        //处理音乐播放
        let isMusicPlay=!this.isMusicPlay;
        let {dataUrl,title}=this.detailObj.music
        if(isMusicPlay){
          wx.playBackgroundAudio({
            dataUrl: dataUrl,
            title: title,
            coverImgUrl: ''
          })
        }else{
          wx.pauseBackgroundAudio()
        }
      },
      handleShare(){
        wx.showActionSheet({
          itemList:[
            '分享到朋友圈','分享到微博','分享给微信好友'
          ]
        })
      }
    },
    computed:{
      ...mapState(['listTmp'])
    }
  }
</script>

<style>
.detailContainer{
  display: flex;
  flex-direction: column;
}
  .detail_img{
    width: 100%;
    height:460rpx;
  }
  .avatar_date{
    padding: 10rpx;
  }
  .avatar_date img{
    width: 64rpx;
    height:64rpx;
    vertical-align: middle;
    border-radius: 50%;
    margin-right: 10rpx;
  }
  .avatar_date span{
    font-weight: 28rpx;
    margin-left: 6rpx;
  }
  .company{
    font-size: 32rpx;
    font-weight: bold;
    padding: 10rpx;
    margin-left: 6rpx;
  }
  .collection_share{
    float: right;
    margin-right: 30rpx;
  }
  .collection_share img{
    width: 90rpx;
    height: 90rpx;
    margin-left:20rpx ;
  }
  .collection_share_container{
    position: relative;
  }
  .line{
    position: absolute;
    top:45rpx;
    left:5%;
    width:90%;
    height:1rpx;
    background-color: #eee;
    z-index: -1;
  }
  .contents{
    margin-top: 30rpx;
    font-size: 32rpx;
    text-indent: 32rpx;
    letter-spacing: 3rpx;
    line-height: 50rpx;
  }
  .music_img{
    width: 60rpx;
    height:60rpx;
    position: absolute;
    top:200rpx;
    left: 50%;
    margin-left: -30rpx;

  }
</style>
