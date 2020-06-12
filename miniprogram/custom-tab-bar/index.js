// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabList: [{
      pagePath: 'pages/index/index',
      title: '音乐',
      iconPath: '../images/icon/音乐_1.png',
      selectedIconPath: '../images/icon/音乐.png',
      isSpecial: false
    },
    {
      pagePath: 'pages/play/play',
      iconPath: '../images/icon/播放.png',
      isSpecial: true
    },
    {
      pagePath: 'pages/mine/mine',
      title: '我的',
      iconPath: '../images/icon/猫咪_1.png',
      selectedIconPath: '../images/icon/猫咪.png',
      isSpecial: false
    }],
    activeIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 切换tabBar
     */
    switchTab: function(e) {
      const index = e.currentTarget.dataset.index;
      if(index != 1){
        this.setData({
          activeIndex: index
        })
      }
      
      switch(index) {
        case 0 : 
          wx.switchTab({
            url: '/pages/index/index',
          })
        break;
        case 1 : 
          wx.navigateTo({
            url: '/pages/play/play',
          })
        break;
        case 2 : 
          wx.switchTab({
            url: '/pages/mine/mine',
          })
        break;
      }
      
    },
  }
})
