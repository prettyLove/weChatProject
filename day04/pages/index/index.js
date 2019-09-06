Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    vertical: true,
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
          list:res.data.data
        });
      },
      fail: () => {
        console.log("请求失败...");
      }
    })
  },
  jump:function(e){
    var id=e.target.dataset.id;
    console.log(id);
    wx.redirectTo({
      url: '/pages/exam02/exam02?id='+id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   * 组件城建成功后执行，ajax请求，获取其他参数
   */
  onLoad: function (options) {
    this.loadMore();
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