import Vue from "vue";
import VueRouter from "vue-router";
import Meta from "vue-meta";

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    name: "Giao dịch",
    path: "*",
    component: () => import("../views/Sell.vue"),
    meta: {
      header: true,
      hide: true
    },
  },
  {
    name: "Giao dịch",
    path: "/buy/:id",
    component: () => import("../views/Buy.vue"),
    meta: {
      header: true,
      hide: true
    },
  },
  {
    name: "Giao dịch",
    path: "/sell/:id",
    component: () => import("../views/Sell.vue"),
    meta: {
      header: true,
      hide: true
    },
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("../views/Login.vue"),
    meta: {
      header: true,
      hide: true
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) next({ name: "Home" });
      next();
    },
  },
  {
    name: "Lịch sử giao dịch",
    path: "/history/:id",
    component: () => import("../views/History.vue"),
    meta: {
      header: true,
    },
  },
  {
    name: "Trang chủ",
    path: "/home",
    component: () => import("../views/Home.vue"),
    meta: {
      header: true,
      hide: true
    },
  },
  {
    name: "Thông báo",
    path: "/notification",
    component: () => import("../views/Notification.vue"),
    meta: {
      header: true,
    },
  },
  {
    name: "Chương trình giới thiệu",
    path: "/referral",
    component: () => import("../views/RefOrder.vue"),
    meta: {
      header: true,
      back: true
    },
  },
  {
    name: "Thông tin cá nhân",
    path: "/profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      header: true,
      back: true
    },
  },
  {
    name: "Kyc",
    path: "/kyc/:id",
    component: () => import("../views/Kyc.vue"),
    meta: {
      header: true,
      hide: true
    },
  },
  {
    name: "Error",
    path: "/error",
    component: () => import("../views/Error.vue"),
    meta: {
      header: true,
    },
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("../views/Register.vue"),
    meta: {
      header: true,
      hide: true
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) next({ name: "Home" });
      next();
    },
  },
  {
    name: "Account",
    path: "/account",
    component: () => import("../views/Account.vue"),
    meta: {
      header: true,
      hide: true
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  if (to.name == 'Lịch sử giao dịch' && !localStorage.getItem("access_token")) next({ name: 'Login' })
  if (to.name == 'Error' && !localStorage.getItem("access_token")) next({ name: 'Login' })
  if (to.name == 'Thông tin cá nhân' && !localStorage.getItem("access_token")) next({ name: 'Login' })
  if (to.name == 'Thông báo' && !localStorage.getItem("access_token")) next({ name: 'Login' })
  if (to.name == 'Chương trình giới thiệu' && !localStorage.getItem("access_token")) next({ name: 'Login' })
  if (to.name == 'Account' && !localStorage.getItem("access_token")) next({ name: 'Login' })
  next()
})

export default router;
