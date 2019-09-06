// pages/exam03/exam03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      num1:110,
      num2:120.50,
      str1:'微信小程序',
      n1:null,
      obj1:{id:1,name:'tom'},
      list:[{id:1,name:'tom'},{id:2,name:'jerry'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //读取数据
    var n=this.data.num1;
    console.log(this.data.num1);
    //修改数据
    this.setData({
      num1:9999.99
    })
    console.log(this.data.num1);

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