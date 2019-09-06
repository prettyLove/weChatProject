// pages/exam01/exam01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  jump01:function(){
    // 关闭的跳转
    wx.redirectTo({
      url: '/pages/exam02/exam02',
    })
  },
  jump02:function(){
    // 保留的跳转
    wx.navigateTo({
      url: '/pages/exam02/exam02',
    })
  },
  jump03:function(){
    // 关闭跳转02，可以跳到tabbar中去
    wx.reLaunch({
      url: '/pages/logs/logs',
    })
  },
  getAjax(){
    //1.vue server程序
    //2.请求地址 http://127.0.0.1:3000/getGoodList
    wx.request({
      url: 'http://127.0.0.1:3000/getGoodList',
      data:{},
      method:"get",
      success:(res)=>{
       console.log(res);
      },
      fail:()=>{
         console.log("请求失败");
      },
      complete:()=>{
        console.log("请求完成");
      }
      
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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