// component/goodsList/goodsList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '标题'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    desc: {
      type: String,
      value: '描述'
    },
    descb: {
      type: String,
      value: '描述'
    },
    price: {
      type: String,
      value: '价格'
    },
    orig: {
      type: String,
      value: '原价'
    },
    num: {
      type: Number,
      value: 2
    },
    url: {
      type: String,
      value:'url'
    },
    imgurl:{
      type: String,
      value:"产品小图"
    },
    priceurl:{
      type:String,
      value:"价格图"
    },
    btnurl:{
      type:String,
      value:"购买图标"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})