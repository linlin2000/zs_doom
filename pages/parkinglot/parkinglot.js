Page({
  data: {
    PageIndex: 0,
    Radius: 50000,
    searchAddress: [],
    location: null,
    current: '0',
    openPicker: false,
    openPickers: false,
    needAnimation: false,
    needAnimations: false,
    radiuss: [
      {link:false, id: 50000, name: '默认' },
      {link:false, id: 500, name: '500米' },
      {link:false, id: 1000, name: '1000米' },
      {link:false, id: 2000, name: '2000米' },
      {link:false, id: 5000, name: '5000米' },
      {link:false, id: 50000, name: '全市范围' }
    ]
  },
  // 筛选
  handleChange({ detail }) {
    var index = detail.key
    this.setData({
      current: detail.key
    });
    if (index == 1) {
      this.setData({
        openPicker: !this.data.openPicker,
        openPickers: false,
        needAnimation: true,
        needAnimations: false
      })
    } else if (index == 2) {
      this.setData({
        openPickers: !this.data.openPickers,
        openPicker: false,
        needAnimations: true,
        needAnimation: false
      })
    }
    if(this.data.openPicker== false&&this.data.openPickers== false){
      this.setData({
        current: '0'
      })
    }
  },
  screen(e) {
    var array = this.data.radiuss
    array.forEach(item => {
      item.link=false
      if (e.currentTarget.dataset.menuitem.name==item.name) {
        item.link=true
      }
    });
    this.setData({
      radiuss:array,
      PageIndex: 0,
      Radius: e.currentTarget.dataset.menuitem.id,
      current: '0',
      openPicker: false,
      openPickers: false,
      needAnimation: false,
      needAnimations: false
    })
    this.loadMore()
  },
  // 停车场
  loadMore() {
    const PageIndex = this.data.PageIndex++
    wx.request({
      url: 'http://203.88.193.234:8065/API/APP/infoAddress.ashx',
      data: {
        action: 'SearchAddress',
        location: this.data.location,
        searchKeys: '停车场',
        PageIndex: PageIndex,
        PageSize: 10,
        Radius: this.data.Radius
      },
      header: {
        'Context-Type': 'form-data'
      },
      method: 'GET',
      success: (res) => {
        if (res.statusCode == 200) {
          const searchAddress = this.data.searchAddress.concat(res.data.Data.List)
          this.setData({ searchAddress })
        }
      }
    })
  },
  // 跳转微信内置地图
  parkclick: function (e) {
    const location = e.currentTarget.dataset.menuitem.location.split(",")
    const name = e.currentTarget.dataset.menuitem.name
    const address = e.currentTarget.dataset.menuitem.address
    wx.openLocation({
      longitude: parseFloat(location[0]),
      latitude: parseFloat(location[1]),
      scale: 28,
      name: name,
      address: address
    })
  },
  onLoad: function (options) {
    var _this = this
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        var reg = []
        reg.push(res.longitude, res.latitude)
        var location = reg.join(',')
        _this.setData({ location: location })
        _this.loadMore()
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
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})