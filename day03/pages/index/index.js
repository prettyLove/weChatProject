//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 500,
    list:[
      'http://127.0.0.1:3000/img/banner1.png',
      'http://127.0.0.1:3000/img/banner2.png',
      'http://127.0.0.1:3000/img/banner3.png',
      'http://127.0.0.1:3000/img/banner4.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    vertical:true,
    nvaList:[
      {id:1,title:"美食",img_url:"http://127.0.0.1:3000/img/grid-01.png"},
      {id:2,title:"结婚啦",img_url:"http://127.0.0.1:3000/img/grid-03.png"},
      {id:3, title: "卡拉OK", img_url:"http://127.0.0.1:3000/img/grid-04.png"},
      {id:4, title: "汽车养护", img_url:"http://127.0.0.1:3000/img/grid-07.png"},
      {id:5, title: "找工作", img_url:"http://127.0.0.1:3000/img/grid-06.png"},
      {id:6, title: "租房", img_url:"http://127.0.0.1:3000/img/grid-02.png"},
      {id:7, title: "辅导班", img_url:"http://127.0.0.1:3000/img/grid-05.png"},
      {id:8, title: "装修", img_url:"http://127.0.0.1:3000/img/grid-08.png"},
      {id:9, title: "更多...", img_url:""},
    ],
    tablist:[
      {id:1,img_url:"http://127.0.0.1:3000/img/link-01.png"},
      {id:2,img_url:"http://127.0.0.1:3000/img/link-02.png"}
    ]
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

