// pages/haogong/haogong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getSummary: [],
    lunbo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://203.88.193.234:8065/API/APP/infoArticle.ashx',
      data: {
        action: 'GetSummary'
      },
      header: {
        'Context-Type': 'form-data'
      },
      method: 'GET',
      success: (res) => {
        console.log(res.data.Data.List);

        if (res.statusCode == 200) {
          this.setData({
            getSummary: res.data.Data.List,
            lunbo: res.data.Data.List[0].Img
          })
        }
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