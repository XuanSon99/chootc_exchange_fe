import Vue from "vue";
import VueRouter from "vue-router";
import Meta from "vue-meta";

Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../views/Buy.vue"),
    meta: {
      header: true,
    },
  },
  {
    name: "Buy",
    path: "/buy/:id",
    component: () => import("../views/Buy.vue"),
    meta: {
      header: true,
    },
  },
  {
    name: "Sell",
    path: "/sell/:id",
    component: () => import("../views/Sell.vue"),
    meta: {
      header: true,
    },
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("../views/Login.vue"),
    meta: {
      header: true,
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) next({ name: "Home" });
      next();
    },
  },
  {
    name: "History",
    path: "/history",
    component: () => import("../views/History.vue"),
    meta: {
      header: true,
    },
  },
  {
    name: "Profile",
    path: "/profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      header: true,
    },
  },
  {
    name: "Kyc",
    path: "/kyc/:id",
    component: () => import("../views/Kyc.vue"),
    meta: {
      header: false,
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
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("access_token")) next({ name: "Home" });
      next();
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
  if (to.name == 'History' && !localStorage.getItem("access_token")) next({ name: 'Login' })
  if (to.name == 'Error' && !localStorage.getItem("access_token")) next({ name: 'Login' })
  if (to.name == 'Profile' && !localStorage.getItem("access_token")) next({ name: 'Login' })
  next()
})

export default router;
