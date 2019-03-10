// pages/navigation/navigation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.15792,
    longitude: 113.27324,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: '111',
      iconPath: '../../assets/tabs/location.png'
    }, {
      id: 2,
      latitude: 23.099994,
      longitude: 113.324520,
      name: '555',
      iconPath: '../../assets/tabs/location.png'
    }, {
      id: 3,
      latitude: 23.15792,
      longitude: 113.27324,
      name: '666',
      iconPath: '../../assets/tabs/location.png'
    }],
  },

  gotohere:function(e){
    console.log(e);
  },

  parkinglots: () => {
    wx.navigateTo({
      url: '/pages/parkinglot/parkinglot'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this=this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(res);
        _this.setData({latitude:res.latitude},{longitude:res.longitude})
      }
    })
    wx.request({
      url: 'http://203.88.193.234:8065/API/APP/infoAddress.ashx',
      data: {
        action: 'SearchAddress',
        location: '117.071669,23.447443',
        searchKeys: '停车场',
        PageIndex: 1,
        PageSize: 20,
        Radius: 5000
      },
      header: {
        'Context-Type': 'form-data'
      },
      method: 'GET',
      success: (res) => {
        console.log(res);
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