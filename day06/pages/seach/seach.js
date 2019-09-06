// pages/seach/seach.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  //商品搜索功能
  searchKey: function (e) {
    console.log(123);
    console.log(e);
    console.log(e.detail.value.key);
    var key = e.detail.value.key;
    var url = app.globalData.baseUrl + "search";
    wx.request({
      url: url,
      data: { key: key },
      success: (res) => {
        console.log(res.data);
        //当搜索到数据后将数据保存到data中的List去
        this.setData({
          list:res.data.data
        })
      }
    })
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