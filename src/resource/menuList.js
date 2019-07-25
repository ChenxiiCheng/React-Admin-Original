const menuList = [
  {
    title: '首页',
    key: '/home'
  },
  {
    title: 'UI',
    key: '/ui',
    children: [
      {
        title: '按钮',
        key: '/ui/button'
      },
      {
        title: '弹框',
        key: '/ui/modals'
      },
      {
        title: 'Loading',
        key: '/ui/loadings'
      },
      {
        title: '通知消息',
        key: '/ui/notification'
      },
      {
        title: '图片画廊',
        key: '/ui/gallery'
      },
      {
        title: '轮播图',
        key: '/ui/carousel'
      }
    ]
  },
  {
    title: '表单',
    key: '/form',
    children: [
      {
        title: '登录',
        key: '/form/login'
      },
      {
        title: '注册',
        key: '/form/register'
      }
    ]
  },
  {
    title: '表格',
    key: '/table'
  },
  {
    title: '富文本',
    key: '/rich'
  },
  {
    title: '城市管理',
    key: '/city'
  },
  {
    title: '订单管理',
    key: '/order'
  },
  {
    title: '员工管理',
    key: '/user'
  },
  {
    title: '统计分析',
    key: '/echarts',
    children: [
      {
        title: '柱形图',
        key: '/chart/bar'
      },
      {
        title: '饼图',
        key: '/chart/pie'
      },
      {
        title: '折线图',
        key: '/chart/line'
      }
    ]
  }
];

export default menuList;
