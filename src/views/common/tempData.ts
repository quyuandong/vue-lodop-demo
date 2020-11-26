export const OutStockData = [
  {
    companyName: '九州科瑞',
    stockoutCode: 'CK-12345678910231',
    unitName: '四川科瑞成都分公司',
    handlerName: '刘夏',
    stockoutType: '销售出库',
    warehouseName: '北京科瑞成都仓',
    businessDate: '2020-08-27 12:00:00',
    createUserName: '胡纪清',
    created: '2020-08-27 12:00:00',
    remark: '备注一下',
    totalPrice: '129.00',
    receivePerson: '易敏',
    receivePhone: '18982068701',
    address: '四川省成都市武侯区 天府软件园A2栋',
    details: [
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro256g',
        specModel: '165L',
        quantity: 3,
        snCode:
          '[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]',
        isUseSn: '1',
        price: '23.00'
      },
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro124g',
        specModel: '165L',
        quantity: 3,
        snCode:
          '[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]',
        isUseSn: '1',
        price: '12.00'
      }
    ]
  }
]
export const OutStockOptions = [
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '自定义文本',
    value: '自定义文本',
    defaultValue: '自定义文本',
    name: ''
  },
  {
    type: 'braid-txt',
    isEdit: 0,
    title: '公司名称',
    value: '{公司名称}',
    defaultValue: '九州科瑞',
    name: 'companyName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '出库单号',
    value: '{出库单号}',
    defaultValue: 'CK-1234567890',
    name: 'stockoutCode'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '客户/供应商',
    value: '{客户/供应商}',
    defaultValue: '中国苹果',
    name: 'unitName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '经办人',
    value: '{经办人}',
    defaultValue: 'zj001',
    name: 'handlerName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '出库类型',
    value: '{出库类型}',
    defaultValue: '销售出库',
    name: 'stockoutType'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '出库仓库',
    value: '{出库仓库}',
    defaultValue: '北京科瑞仓库',
    name: 'warehouseName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '出库时间',
    value: '{出库时间}',
    defaultValue: '2020-08-27 12:00:00',
    name: 'businessDate'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '制单人',
    value: '{制单人}',
    defaultValue: 'jz002',
    name: 'createUserName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '制单时间',
    value: '{制单时间}',
    defaultValue: '2020-08-27 12:00:00',
    name: 'created'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '收货人(销售)',
    value: '{收货人}',
    defaultValue: 'liuxia',
    name: 'receivePerson'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '收货电话(销售)',
    value: '{收货人电话}',
    defaultValue: 'liuxia',
    name: 'receivePhone'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '收货地址(销售)',
    value: '{收货地址}',
    defaultValue: 'liuxia',
    name: 'address'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '合计金额',
    value: '{合计金额}',
    defaultValue: '123.00',
    name: 'totalPrice'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '摘要',
    value: '{摘要}',
    defaultValue: '北京采购入库成都摘要',
    name: 'remark'
  },
  {
    type: 'braid-html',
    isEdit: 1,
    title: '分页',
    value: '{第##页/共##页}',
    defaultValue: "<font><span tdata='pageNO'>第##页</span>/<span tdata='pageCount'>共##页</span></font>",
    name: ''
  },
  {
    type: 'braid-table',
    isEdit: 0,
    title: '出库商品明细',
    name: 'details',
    value: '{details}',
    style: {},
    defaultValue: [
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro256g',
        specModel: '165L',
        quantity: 3,
        snCode:
          '[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]',
        isUseSn: '1',
        price: '23.00'
      },
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro124g',
        specModel: '165L',
        quantity: 3,
        snCode:
          '[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]',
        isUseSn: '1',
        price: '12.00'
      }
    ],
    tabelHtml: '',
    columnsAttr: [
      {
        title: '产品名称',
        value: '{产品名称}',
        name: 'productName'
      },
      {
        title: 'sku名称',
        value: '{sku名称}',
        name: 'skuName'
      },
      {
        title: '规格型号',
        value: '{规格型号}',
        name: 'specModel'
      },
      {
        title: '数量',
        value: '{数量}',
        name: 'quantity'
      },
      {
        title: '单价',
        value: '{单价}',
        name: 'price'
      },
      {
        title: '产品序列号',
        value: '产品序列号明细：<br>{产品序列号}',
        name: 'snCode',
        trSet: {
          title: '产品序列号明细:',
          col: 5,
          margin: '50px'
        },
        type: 'row',
        isShowName: 'isUseSn',
        isShowValue: '1'
      }
    ],
    columns: []
  }
]

export const InStockOptions = [
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '自定义文本',
    value: '自定义文本',
    defaultValue: '自定义文本',
    name: ''
  },
  {
    type: 'braid-txt',
    isEdit: 0,
    title: '公司名称',
    value: '{公司名称}',
    defaultValue: '九州科瑞',
    name: 'companyName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '入库单号',
    value: '{入库单号}',
    defaultValue: 'RK-1234567890',
    name: 'purcheckCode'
  },

  {
    type: 'braid-txt',
    isEdit: 1,
    title: '供应商/客户',
    value: '{供应商/客户}',
    defaultValue: '中国苹果',
    name: 'unitName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '采购业务员',
    value: '{采购业务员}',
    defaultValue: 'zj001',
    name: 'purchaseSaleManName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '入库类型',
    value: '{入库类型}',
    defaultValue: '采购入库',
    name: 'purcheckType'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '入库仓库',
    value: '{入库仓库}',
    defaultValue: '北京科瑞仓库',
    name: 'warehouseName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '入库时间',
    value: '{入库时间}',
    defaultValue: '2020-08-27 12:00:00',
    name: 'businessDate'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '制单人',
    value: '{制单人}',
    defaultValue: 'jz002',
    name: 'createUserName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '制单时间',
    value: '{制单时间}',
    defaultValue: '2020-08-27 12:00:00',
    name: 'created'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '摘要',
    value: '{摘要}',
    defaultValue: '北京采购入库成都摘要',
    name: 'remark'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '合计金额',
    value: '{合计金额}',
    defaultValue: '12331.00',
    name: 'totalPrice'
  },
  {
    type: 'braid-html',
    isEdit: 1,
    title: '分页',
    value: '{第##页/共##页}',
    defaultValue: "<font ><span tdata='pageNO'>第##页</span>/<span tdata='pageCount'>共##页</span></font>",
    name: ''
  },
  {
    type: 'braid-table',
    isEdit: 0,
    title: '入库商品明细',
    name: 'details',
    value: '{details}',
    style: {},
    defaultValue: [
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro256g',
        specModel: '165L',
        quantity: 3,
        snCode:
          '[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]',
        isUseSn: '1',
        price: '12.00'
      },
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro124g',
        specModel: '165L',
        quantity: 3,
        snCode:
          '[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]',
        isUseSn: '1',
        price: '12.00'
      }
    ],
    columnsAttr: [
      {
        title: '产品名称',
        value: '{产品名称}',
        name: 'productName'
      },
      {
        title: 'sku名称',
        value: '{sku名称}',
        name: 'skuName'
      },
      {
        title: '规格型号',
        value: '{规格型号}',
        name: 'specModel'
      },
      {
        title: '数量',
        value: '{数量}',
        name: 'quantity'
      },
      {
        title: '单价',
        value: '{单价}',
        name: 'price'
      },
      {
        title: '产品序列号',
        value: '产品序列号明细：<br>{产品序列号}',
        name: 'snCode',
        trSet: {
          title: '产品序列号明细:',
          col: 5,
          margin: '50px'
        },
        type: 'row',
        isShowName: 'isUseSn',
        isShowValue: '1'
      }
    ],
    columns: []
  }
]
