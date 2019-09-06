Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
  },
  //bindtap和catchtap的区别
  handle01() {
    console.log("支持事件冒泡打印handle01");
  },
  handle02() {
    console.log("不支持事件冒泡handle02");
  },
  handle03() {
    console.log("父元素");
  },
  //组件间跳转练习
  jump01: function () {
    // 关闭的跳转
    wx.redirectTo({
      url: '/pages/logs/logs',
    })
  },
  jump02: function () {
    // 保留的跳转
    wx.navigateTo({
      url: '/pages/form_ex/form_ex',
    })
  },
  jump03: function () {
    // 关闭跳转02，可以跳到tabbar中去
    wx.reLaunch({
      url: '/pages/shoplist/shoplist',
    })
  },
  getAjax() {
    //1.vue server程序
    //2.请求地址 http://127.0.0.1:3000/getGoodList
    wx.request({
      url: 'http://127.0.0.1:3000/getGoodList',
      data: {},
      method: "get",
      success: (res) => {
        console.log(res);
      },
      fail: () => {
        console.log("请求失败");
      },
      complete: () => {
        console.log("请求完成");
      }

    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    // var ids = options.id;
    this.setData({
      // id: ids
    })
  },
  loadMore() {
    wx.request({
      url: 'http://127.0.0.1:3000/imglist',
      data: {},
      method: "get",
      success: res => {
        console.log(res);
        var result = res.data.data;
        console.log(result);
        //保存数据,将数据保存到data中
        this.setData({
          list: res.data.data
        });
      },
      fail: () => {
        console.log("请求失败...");
      }
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