<template>
  <div>
    <v-app-bar color="#ffffff" height="68px" fixed>
      <v-container class="d-flex align-center">
        <router-link to="/">
          <v-img class="logo" src="/img/logo-header.png">
          </v-img>
        </router-link>

        <v-spacer></v-spacer>

        <v-btn icon @click.stop="drawer = !drawer" v-if="mobile">
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <div class="d-flex align-center" v-else>
          <v-btn @click="$router.push('/buy/usdt')" text color="black">
            Mua
          </v-btn>

          <v-btn @click="$router.push('/sell/usdt')" text color="black">
            Bán
          </v-btn>

          <v-btn @click="$router.push('/history')" text color="black">
            Lịch sử
          </v-btn>

          <v-btn href="http://chootc.com" target="_blank" text color="black">
            Tỷ giá
          </v-btn>

          <v-btn href="https://chootc.com/tin-tuc" target="_blank" text color="black">
            Tin tức
          </v-btn>
        </div>

        <v-menu offset-y v-if="account" transition="slide-y-transition" left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-badge :content="noti_count" color="error" overlap v-if="noti_count">
                <v-icon size="30">mdi-bell-outline</v-icon>
              </v-badge>
              <v-icon size="30" v-else>mdi-bell-outline</v-icon>
            </v-btn>
          </template>
          <div class="noti-title">
            <h3>Thông báo</h3>
            <span @click="readAll()">
              Đánh dấu đã đọc
              <v-icon size="16" color="primary">mdi-check-decagram</v-icon>
            </span>
          </div>
          <div class="notification">
            <div :class="{ item: true, unread: item.is_readed ? false : true }" v-for="(item, index) in notifications"
              :key="index" @click="readNoti(item, index)">
              <v-icon size="30" :color="item.color">mdi-bell-circle</v-icon>
              <div class="content ml-3">
                <span>{{ item.content }}</span>
                <div class="time mt-1">{{ formatDate(item.created_at) }}</div>
              </div>
            </div>
          </div>
        </v-menu>

        <v-menu offset-y v-if="account" transition="slide-y-transition" left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" outlined class="ml-4" color="primary">
              <v-icon>
                mdi-account
              </v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group color="primary">
              <v-list-item @click="$router.push('/profile')">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Thông tin tài khoản</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="$router.push('/kyc/' + account.phone)" v-if="!account.verify">
                <v-list-item-icon>
                  <v-icon>mdi-shield-account-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Xác minh danh tính</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item @click="logout">
                <v-list-item-icon>
                  <v-icon>mdi-arrow-right</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Đăng xuất</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-btn class="ml-4" color="primary" @click="$router.push('/login')" v-if="!account && !mobile">Đăng
          nhập</v-btn>
        <v-btn class="ml-4" color="primary" outlined @click="$router.push('/register')" v-if="!account && !mobile">Đăng
          ký</v-btn>
      </v-container>

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary fixed>
      <div class="pa-4">
        <v-img class="logo" src="/img/logo-header.png"></v-img>
      </div>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" @click="$router.push(item.url)" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    drawer: false,
    notifications: [],
    noti_count: 0
  }),
  computed: {
    ...mapGetters(["account"]),
    items() {
      let nav = [
        { text: 'Giao dịch mua', icon: 'mdi-alpha-b-circle', url: '/buy/usdt' },
        { text: 'Giao dịch bán', icon: 'mdi-sack ', url: '/sell/usdt' },
      ]
      if (this.account) {
        nav.push(
          { text: 'Lịch sử', icon: 'mdi-history ', url: '/history' },
          { text: 'Thông tin tài khoản', icon: 'mdi-account', url: '/profile' },
        )
      } else {
        nav.push(
          { text: 'Đăng nhập', icon: 'mdi-account-circle ', url: '/login' },
          { text: 'Đăng ký', icon: 'mdi-account', url: '/register' },
        )
      }
      return nav
    },
    mobile() {
      return this.$vuetify.breakpoint.width < 1025
    }
  },
  mounted() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      this.CallAPI("get", "profile", {}, (res) => {
        this.$store.dispatch('setAccount', res.data)
      }, (err) => localStorage.clear())
    },
    logout() {
      localStorage.clear()
      this.$store.dispatch('setAccount', '')
    },
    getNotification() {
      this.CallAPI("get", "notifications", {}, (res) => {
        this.notifications = res.data
      })
    },
    getAmountNoti() {
      this.CallAPI("get", "count-noti", {}, (res) => {
        this.noti_count = res.data;
      })
    },
    readNoti(item, index) {
      if (item.url) {
        this.$router.push(item.url)
      }
      if (item.is_readed) return
      this.CallAPI("put", "read-noti", { id: item.id }, (res) => {
        this.getAmountNoti()
        this.notifications[index].is_readed = 1
      })
    },
    readAll() {
      this.CallAPI("get", "read-all", {}, (res) => {
        this.getAmountNoti()
      })
    },
    formatDate(date) {
      let d = new Date(date);
      return d.toLocaleString();
    },
  },
  watch: {
    account() {
      if (this.account.phone) {
        this.getNotification()
        this.getAmountNoti()
      }
    }
  }
};
</script>