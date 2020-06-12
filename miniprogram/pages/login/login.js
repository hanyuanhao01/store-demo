// miniprogram/pages/login/login.js
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    passWord: ''
  },

  /**
   * 获取输入框的值
   */
  getInputVal: function(e) {
    const name = e.currentTarget.dataset.name;
    const val = e.detail.value;
    this.setData({
      [name]: val
    })
  },

   
  //登陆
  handleClick: function() {
    const data = this.data;
    if(!data.userName) {
      Notify({ type: 'danger', message: '请输入用户名', duration: '2000' });
      return;
    }

    if(!data.passWord) {
      Notify({ type: 'danger', message: '请输入密码', duration: '2000' });
      return;
    }

    wx.switchTab({
      url: '/pages/index/index',
    })
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