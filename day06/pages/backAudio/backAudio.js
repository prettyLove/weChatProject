// pages/backAudio/backAudio.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl:"",
    isplaying:false,  //当前音乐的播放状态
    statuimg:"play.png"
  },
  //第一个按钮播放背景音乐
  play:function() {
    wx: wx.playBackgroundAudio({
      dataUrl:app.globalData.baseUrl+'bg.mp3',
      title: '背景音乐',
      coverImgUrl: '',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  pause:function(){
    wx:wx.pauseBackgroundAudio()
  },
//第二个背景图片控制播放按钮播放背景音乐
  onTap:function(){
    //0.先获得背景音乐的播放装态
    var isplay=this.data.isplaying;
    // 1.播放背景音乐  如果当前正在播放就暂停
    console.log(isplay);
    if(isplay){
      wx.pauseBackgroundAudio();
      this.setData({
        isplaying:false,
        statuimg:"play.png"

      })
    }else{
    // 2.暂停背景音乐  如果当前正在暂停就播放
     wx.playBackgroundAudio({
       dataUrl: this.data.baseUrl+"bg.mp3"
     }) ;
     this.setData({
       isplaying:true,
       statuimg: "pause.png"
     })
    
    }

  },
  onReady:function(){

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.play();
    this.pause();
    //把全局数据拿过来  服务器地址
    var url=app.globalData.baseUrl;
    this.setData({
      baseUrl:url
    })
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})