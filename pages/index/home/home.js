// pages/index/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:''
  },

  onLoad: function (options) {
    this.setData({
      title: options.title
    })
  }
  
})