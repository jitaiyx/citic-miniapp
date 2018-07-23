Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailArray: [
      {
        imgurla: "../../pages/images/db1.png",
        imgurlb: "../../pages/images/db2.png",
        imgurlc: "../../pages/images/db3.png",
        imgurld: "../../pages/images/db4.png",
        imgurle: "../../pages/images/db5.png",
        imgurlf: "../../pages/images/db6.png",
        imgurlg: "../../pages/images/d7.png",
        imgurlh: "../../pages/images/d8.png",
        btnurla: "../../pages/images/dbbt1.png",
        btnurlb: "../../pages/images/dbbt2.png",
        servicepage: "",
        storepage: "../../pages/storeb/storeb"
      }
    ]
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
    this.goodsDetail = this.selectComponent("#goodsDetail");
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '爱睿智',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
        wx.showShareMenu({
          withShareTicket: true
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})