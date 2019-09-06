// pages/lifecycle/lifecycle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("1:当前组件创建成功");
    console.log("2:发送ajax请求");
    console.log("3:获取其他组件传递数据");
    // 模拟传参，获取其他组件传递过来的数据(id)options
    // 在工具-》编译设置-》新增编译条件-》名称  console.log(options);
    // wx.redirectTo({  //组件跳转
    //   url: '/pages/index/index',
    // })
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
    console.log('2:显示组件【切换到前台】');

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('3:隐藏组件【切换到后台】');

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
     console.log("组件的卸载");

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onReachBottom: function () {
    console.log('用户下拉操作.....');

  },
  //事件用户滑动事件：垂直滑动
  onPageScroll: function (opt) {
    console.log(opt.scrollTop);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('用户操作.....');
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})