import App from '../App.vue'

export default[
  {
    path: '/home',
    name: 'home',
    component: App.components.Home
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
    component: App.components.List
  },
  {
    path: '/search',
    name: 'search2',
    component: App.components.Search
  },
  {
    path: '/cart',
    name: 'cart',
    component: App.components.Cart
  },
  {
    path: '/detail',
    name: 'detail',
    component: App.components.Detail
  },
  {
    path: '/books',
    name: 'books',
    component: App.components.OrderBooks
  },
  {
    path: '/book',
    name: 'book',
    component: App.components.OrderBook
  },
  {
    path: '/bookDel',
    name: 'bookDel',
    component: App.components.OrderBookDelete
  },
  {
    path: '/payList',
    name: 'payList',
    component: App.components.PayList
  },
  {
    path: '/location',
    name: 'location',
    component: App.components.Location
  },
  {
    path: '/locationForm',
    name: 'locationForm',
    component: App.components.LocationForm
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
