// pages/dataview01/dataview01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:19,
    list:[
      {id:1,name:'tom',salay:9999},
      {id:2,name:'jerry',salay:19999},
      {id:3,name:'kaka',salay:29999},
    ],
    // 创建购物车列表数组，有id,uid,count,price
    listcart:[
      {id:1,uid:1,count:1,price:99},
      {id:2,uid:1,count:2,price:100},
      {id:3,uid:1,count:2,price:110},
      {id:4,uid:1,count:3,price:150},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let listcart = this.data.listcart;
    for (var item of listcart){
      //让商品打9折
      item.price=(item.price*0.9).toFixed(2);
      console.log(item.price);
    }
    this.setData({
      listcart:listcart
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