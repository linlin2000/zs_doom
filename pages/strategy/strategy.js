// pages/strategy/strategy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: '1',
    tab1: true
  },
  handleChange({ detail }) {
    var index = detail.key
    console.log(index)
    this.setData({
      current: detail.key
    });
    if (index == 1) {
      this.setData({
        tab1: true,
        tab2: false
      })
    } else if (index == 2) {
      this.setData({
        tab1: false,
        tab2: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id == 1) {
      this.setData({
        current: options.id,
        tab1: true,
        tab2: false
      });
    }else if (options.id == 2) {
      this.setData({
        current: options.id,
        tab1: false,
        tab2: true
      })
    }
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