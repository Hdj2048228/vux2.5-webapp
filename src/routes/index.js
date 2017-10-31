import App from '../App.vue'

export default[
  {
    path: '/home',
    name: 'home',
    component: App.components.Home,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/home',
    name: 'home',
    component: App.components.Home,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/user',
    name: 'user',
    component: App.components.User,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/list',
    name: 'list',
    component: App.components.List,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/search',
    name: 'search2',
    component: App.components.Search,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: App.components.Cart,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: App.components.Detail,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/books',
    name: 'books',
    component: App.components.OrderBooks,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/bookInfo',
    name: 'bookInfo',
    component: App.components.OrderBookInfo,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/book',
    name: 'book',
    component: App.components.OrderBook,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/payList',
    name: 'payList',
    component: App.components.PayList,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/AliPay',
    name: 'AliPay',
    component: App.components.PayZhifubao,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/location',
    name: 'location',
    component: App.components.Location,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/locationForm',
    name: 'locationForm',
    component: App.components.LocationForm,
    meta: {
      requireAuth: true,  // true表示需要登录
    }
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: App.components.SignIn
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: App.components.SignUp
  },
  {
    path: '*',
    redirect: '/Home'
  }
]
