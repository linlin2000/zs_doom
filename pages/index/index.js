//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    carousel: [],
    categories: [
      { id: 1, name: "濠江美食", page: '/pages/list/list', icon: '/assets/icons/1.png' },
      { id: 2, name: "景点介绍", page: '/pages/list/list', icon: '/assets/icons/2.png' },
      { id: 3, name: "住在濠江", page: '/pages/list/list', icon: '/assets/icons/3.png' },
      { id: 4, name: "游玩攻略", page: '/pages/list/list', icon: '/assets/icons/4.png' },
      { id: 5, name: "手信商城", page: '/pages/list/list', icon: '/assets/icons/5.png' },
      { id: 6, name: "玩在濠江", page: '/pages/list/list', icon: '/assets/icons/6.png' },
      { id: 7, name: "潮汕海滨文化", page: '/pages/list/list', icon: '/assets/icons/7.png' },
      { id: 8, name: "待上线", page: '/pages/list/list', icon: '/assets/icons/8.png' }
    ],
    hotPoint: [],
    latestpush: [],
    getRecommendData: [],
    getWeather: {},
    locations: []
  },
  bindKeyInput(e) {
    if (e.detail.value) {
      wx.navigateTo({
        url: '/pages/list/list?kyew=' + e.detail.value
      })
    }
  },
  onLoad: function () {
    var _this=this
    // 天气
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        var reg = []
        reg.push(res.latitude, res.longitude)
        var regh = reg.join(',')
        wx.request({
          url: 'http://203.88.193.234:8065/API/APP/infoWeather.ashx',
          data: {
            action: 'GetWeather',
            location: regh
          },
          header: {
            'Context-Type': 'form-data'
          },
          method: 'GET',
          success: (res) => {
            if (res.statusCode == 200) {
              _this.setData({ getWeather: res.data.Data })
            }
          }
        })
      }
    })
    // 轮播
    wx.request({
      url: 'http://203.88.193.234:8065/API/APP/infoActivity.ashx?',
      data: {
        action: 'GetBannerList'
      },
      header: {
        'Context-Type': 'form-data'
      },
      method: 'GET',
      success: (res) => {
        if (res.statusCode == 200) {
          this.setData({ carousel: res.data.Data.List })
        }
      }
    })
    // 景点精选
    wx.request({
      url: 'http://203.88.193.234:8065/API/APP/infoArticle.ashx?',
      data: {
        action: 'GetRecommendData',
        ParkId: 1,
        PageSize: 3,
        PageIndex: 1
      },
      header: {
        'Context-Type': 'form-data'
      },
      method: 'GET',
      success: (res) => {
        if (res.statusCode == 200) {
          this.setData({ getRecommendData: res.data.Data.List })
        }
      }
    })
    // 热点推送
    wx.request({
      url: 'http://203.88.193.234:8065/API/APP/infoArticle.ashx',
      data: {
        action: 'HotPoint',
        PageSize: 3
      },
      header: {
        'Context-Type': 'form-data'
      },
      method: 'GET',
      success: (res) => {
        if (res.statusCode == 200) {
          this.setData({ hotPoint: res.data.Data.List })
        }
      }
    })
    // 最新推送
    wx.request({
      url: 'http://203.88.193.234:8065/API/APP/infoArticle.ashx',
      data: {
        action: 'Latestpush',
        PageIndex: 1,
        PageSize: 5
      },
      header: {
        'Context-Type': 'form-data'
      },
      method: 'GET',
      success: (res) => {
        if (res.statusCode == 200) {
          this.setData({ latestpush: res.data.Data.List })
        }
      }
    })
  },
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
