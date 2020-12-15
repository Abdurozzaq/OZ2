import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Page Title Nav Guard
const pageTitle = (to, from, next) => {
  document.title = to.meta.title
  next()
}

const routes = [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "MainLayout" */ '../views/layouts/MainLayouts.vue'),
    children: [
      {
        path: "",
        component: () => import(/* webpackChunkName: "Index1Page" */'../views/pages/Index.vue'),
        meta: {
            title: 'Welcome To OZ2',
        },
        beforeEnter: pageTitle,
      },
      {
        path: "/index2",
        component: () => import(/* webpackChunkName: "Index2Page" */'../views/pages/Index2.vue'),
        meta: {
            title: 'Welcome To Index2',
        },
        beforeEnter: pageTitle,
      },
      {
        path: "/index3",
        component: () => import(/* webpackChunkName: "Index3Page" */'../views/pages/Index3.vue'),
        meta: {
            title: 'Welcome To Index3',
        },
        beforeEnter: pageTitle,
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
