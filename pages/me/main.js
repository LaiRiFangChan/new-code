// 导入 wxrequest 

Page({
  data: {
    myimg: '/static/icon/icon.png',
    nickname: '登录/注册',
    address: '我的收货地址'
  },
  fn(res) {
    // 给头像和昵称赋值
    this.setData({
      myimg: res.detail.userInfo.avatarUrl,
      nickname: res.detail.userInfo.nickName
    })
    let encryptedData = res.detail.encryptedData
    let iv = res.detail.iv
    let rawData = res.detail.rawData
    let signature = res.detail.signature
    // 登录
    wx.login({
      success: res => {
        // 得到 code
        let code = res.code
        // 得到 token
        wx.request({
          url: 'https://autumnfish.cn/wx/api/public/v1/users/wxlogin',
          method: 'POST',
          data: {
            encryptedData,
            iv,
            rawData,
            signature,
            code
          },
          success(res1) {
            let {
              meta,
              message
            } = res1.data
            if (meta.status === 200) {
              // 将 token 保存到本地
              wx.setStorageSync('token', message.token)
            }
          }
        })

      }
    })
  },
  onLoad() {
    this.setData({
      address: wx.getStorageSync('address') || '我的收货地址'
    })
  },
  getAddress() {
    // 得到地址
    wx.chooseAddress({
      success: (res) => {
        var add = res.provinceName + res.cityName + res.countyName + res.detailInfo;
        this.setData({
          address: add
        })
        // 将地址存入 storage
        wx.setStorageSync('address', add)
      }
    })
  },
  // 联系客服
  call() {
    wx.makePhoneCall({
      phoneNumber: '400-618-4000',
    })
  },
  foo(event) {
    // 接收 id
    var id = +event.currentTarget.dataset.id;
    switch (id) {
      case 1:
        console.log('待付款');
        break;
      case 2:
        console.log('待收货');
        break;
      case 3:
        console.log('退货');
        break;
      case 4:
        // 跳转到订单列表
        wx.navigateTo({
          url: '/pages/order/main'
        })
        break;
    }
  }
})