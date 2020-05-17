// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 绑定城市，改变城市名称
    region:['安徽省','铜陵市','铜官区'],
    now:''
  },
  // 改变城市名称函数
  changeRegion:function(e){
    this.setData({
      region:e.detail.value
    })
    // 调用函数
    this.getWeather();
  },
  getWeather:function(){
    var that = this;
    // 通过API获取天气信息
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:that.data.region[1],
        key:'5ddda948b9594f2a985a235579ba1909'
      },
      // 请求成功时显示的内容
      success:function(res){
        console.log(res.data)
        that.setData({now:res.data.HeWeather6[0].now})
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
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