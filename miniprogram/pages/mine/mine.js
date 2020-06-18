// pages/mine/mine.js


var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '默认名字'
  },

 
  getInfo: function(e) {
    console.log(e)
  },

  // getShouquan(e) {

  //   wx.getUserInfo({
  //     success: function(res) {
  //       var userInfo = res.userInfo
  //       var nickName = userInfo.nickName
  //       var avatarUrl = userInfo.avatarUrl
  //       var gender = userInfo.gender //性别 0：未知、1：男、2：女
  //       var province = userInfo.province
  //       var city = userInfo.city
  //       var country = userInfo.country
  //     },
  //     fail(err) {
  //       console.log(err)
  //     }
  //   })

  //   // wx.getSetting({
  //   //   success(res) {
  //   //     if (!res.authSetting['scope.userInfo']) {
  //   //       wx.authorize({
  //   //         scope: 'scope.userInfo',
  //   //         success () {
  //   //           console.log('授权成功')
              
  //   //         },
  //   //         fail(err) {
  //   //           console.log(err)
  //   //         }
  //   //       })
  //   //     }
  //   //   },
  //   //   fail(err) {
  //   //     console.log(err)
  //   //   }
  //   // })
  // },


  /**
   * 退出
   */
  // checkOut: function() {
  //   // wx.reLaunch({
  //   //   url: '/pages/login/login',
  //   // })
  // },

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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        activeIndex: 2    // 根据tab的索引值设置
      })  
    }
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