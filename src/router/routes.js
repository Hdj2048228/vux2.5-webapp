import App from '../App.vue'

export default [
  {
    path: '/home',
    name: 'home',
    component: resolve => require(['@/page/Home'], resolve),
    meta: {
      title: '首页',
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/yetai',
    name: 'yetai',
    component: resolve => require(['@/page/Yetai'], resolve),
    meta: {
      title: '业态',
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/yetaiEdit',
    name: 'yetaiEdit',
    component: resolve => require(['@/page/YetaiEdit'], resolve),
    meta: {
      title: '业态设置',
      requireAuth: true,  // true表示需要登录
    }
  }, {
    path: '/banner',
    name: 'banner',
    component:  resolve => require(['@/page/Banner'],resolve),
    meta: {
      title: 'Banner设置',
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/bannerEdit',
    name: 'bannerEdit',
    component: resolve => require(['@/page/BannerEdit'],resolve),
    meta: {
      title: 'Banner设置',
      requireAuth: true,  // true表示需要登录
    }
  }, {
    path: '/chooseProduct',
    name: 'chooseProduct',
    component: resolve => require(['@/page/ChooseProduct'],resolve),
    meta: {
      title: '选择商品',
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/category',
    name: 'category',
    component:  resolve => require(['@/page/Category'],resolve),
    meta: {
      title: '分类',
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/categoryEdit',
    name: 'categoryEdit',
    component:  resolve => require(['@/page/CategoryEdit'],resolve),
    meta: {
      title: '分类设置',
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/recommendProduct',
    name: 'recommendProduct',
    component: resolve => require(['@/page/RecommendProduct'],resolve),
    meta: {
      title: '推荐商品',
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/RecommendProductEdit',
    name: 'RecommendProductEdit',
    component: resolve => require(['@/page/RecommendProductEdit'],resolve),
    meta: {
      title: '推荐商品设置',
      requireAuth: true,  // true表示需要登录
    }
  },
  // ,
  // {
  //   path: '/user',
  //   name: 'user',
  //   component: App.components.User,
  //   meta: {
  //     requireAuth: true,  // true表示需要登录
  //   }
  // },
  // {
  //   path: '/search',
  //   name: 'search2',
  //   component: App.components.Search,
  //   meta: {
  //     requireAuth: true,  // true表示需要登录
  //   }
  // },
  // {
  //   path: '/cart',
  //   name: 'cart',
  //   component: App.components.Cart,
  //   meta: {
  //     requireAuth: true,  // true表示需要登录
  //   }
  // },
  // {
  //   path: '/detail',
  //   name: 'detail',
  //   component: App.components.Detail,
  //   meta: {
  //     requireAuth: true,  // true表示需要登录
  //   }
  // },
  // {
  //   path: '/books',
  //   name: 'books',
  //   component: App.components.OrderBooks,
  //   meta: {
  //     requireAuth: true,  // true表示需要登录
  //   }
  // },
  // {
  //   path: '/bookInfo',
  //   name: 'bookInfo',
  //   component: App.components.OrderBookInfo,
  //   meta: {
  //     requireAuth: true,  // true表示需要登录
  //   }
  // },
  // {
  //   path: '/book',
  //   name: 'book',
  //   component: App.components.OrderBook,
  //   meta: {
  //     requireAuth: true,  // true表示需要登录
  //   }
  // },
  // {
  //   path: '/payList',
  //   name: 'payList',
  //   component: App.components.PayList,
  //   meta: {
  //     requireAuth: true,  // true表示需要登录
  //   }
  // },
  // {
  //   path: '/AliPay',
  //   name: 'AliPay',
  //   component: App.components.PayZhifubao,
  //   meta: {
  //     requireAuth: true,  // true表示需要登录
  //   }
  // },
  // {
  //   path: '/location',
  //   name: 'location',
  //   component: App.components.Location,
  //   meta: {
  //     requireAuth: true,  // true表示需要登录
  //   }
  // },
  // {
  //   path: '/locationForm',
  //   name: 'locationForm',
  //   component: App.components.LocationForm,
  //   meta: {
  //     requireAuth: true,  // true表示需要登录
  //   }
  // },
  {
    path: '/signIn',
    name: 'signIn',
    component: App.components.SignIn
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: App.components.SignUp,
    meta: {
      title: '登录'
    }
  },
  {
    path: '*',
    redirect: '/Home'
  }
]
