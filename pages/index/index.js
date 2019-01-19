//index.js
//获取应用实例
const app = getApp()
var getData = require('../../assest/data/index')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      '../../assest/icon/banner1.jpg',
      '../../assest/icon/banner2.jpg',
      '../../assest/icon/banner3.jpg',
      '../../assest/icon/banner4.jpg',
      '../../assest/icon/banner5.jpg',
      '../../assest/icon/banner6.jpg',
      '../../assest/icon/banner7.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    currentTab: 0,
    imgUrl: {
      type: String,
      value: ''
    },
    iconStyle: {
      color: ['red', 'orange', 'yellow', 'green']
    },
    listData: []
  },
  onLoad: function(options) {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    }),
    this.setData({
      listData: getData.list.data
    })
  },
  bindGetUserInfo(e) {
    this.setData({
      imgUrl: e.detail.userInfo.avatarUrl
    })
    console.log(e.detail.userInfo)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  getUserInfo: function() {
    console.log(222)
  }

})