// pages/exam05/exam-5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   list:[{id:1,name:"jury",sex:0,age:18,salary:5000},
     { id: 2, name: "toni", sex: 1, age: 18, salary: 4000 },
     { id: 3, name: "lusy", sex: 0, age: 18, salary: 6000 },
     { id: 4, name: "tom", sex: 1, age: 18, salary: 4500 },
   
   ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   let list=this.data.list;
   for(var item of list){
     item.salary = (item.salary*1.1).toFixed(2);
   }
  //  console.log(list);
    this.setData({//此处为对象，只能用key:value形式显示
      list:list
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