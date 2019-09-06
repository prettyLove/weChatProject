// pages/foodList/foodList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   list:[], //美食列表
   pno:0,   //当前页码
   pagesize:7 //页大小
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1:创建加载动画组件
    wx.showLoading({
      title: '很多美食正在加载中，请稍后...',
    })
    //2:过1秒后卸载，模拟网络繁忙的状态
    setTimeout(function () {
      wx.hideLoading();
    }, 1000)
    this.loadMore();
  },
  loadMore:function(){
    // 1：获取页码
    var p=this.data.pno+1;
    // 2：获取页大小
    var ps = this.data.pagesize;
    //5.1:显示加载动画
    setTimeout(function () {
      wx.hideLoading();
    }, 1000);
    // 3：发送ajax请求 
    wx:wx.request({
          // 4：http://127.0.0.1:3000/shoplist
          // 5:获取返回数据，追加数据
          // 6：修改当前页
          // 7：修改当前组价模板
          // 8：显示美食信息
      url: 'http://127.0.0.1:3000/shoplist?pno='+p,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=> {
        var result=res.data.data;
        console.log(res);
        //数据追加效果
        var rows=this.data.list.concat(res.data.data);
        this.setData({
          list:rows,//当前页的内容
          pno:p,             //修改当前页
        });
        //5.2数据加载成功并且显示借宿
        //5.3隐藏加载动画 
        wx.hideLoading();
      },
      fail: function(res) {},
      complete: function(res) {},
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
    console.log(123);
     this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})