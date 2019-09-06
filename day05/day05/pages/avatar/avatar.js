// pages/avatar/avatar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     images:[],
     img_url:""
  },
  myAvatar:function(){
    let that = this;
    //1.选中一张图片
    wx.chooseImage({
      count:1,
      sourceType:["canera","album"],
      success: function(res) {
       
        var src=res.tempFilePaths[0];
        //2.上传到服务器
        wx.uploadFile({
          url: 'http://127.0.0.1:3000/uploadFile',
          filePath: src,
          name: 'mypic',
          header:{
            "Content-Type":"multipart/form-data"
          },
          success:(res)=>{
            let result = JSON.parse(res.data)

            console.log(result.img_url)
            //设置数据
            that.setData({
              img_url: result.img_url
            })
          }
        })
      },
    })
    
  },
  showAvatar:function(){},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.myAvatar();
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