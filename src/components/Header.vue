<template>
  <v-app-bar color="transparent" fixed>
    <v-container class="d-flex align-center">
      <v-img max-width="198" src="/img/logo-header.png">
      </v-img>

      <v-spacer></v-spacer>

      <v-btn @click="$router.push('/buy/usdt')" text >
        Mua
      </v-btn>

      <v-btn @click="$router.push('/sell/usdt')" text>
        Bán
      </v-btn>

      <v-btn @click="$router.push('/history')" text>
        Lịch sử
      </v-btn>

      <v-menu offset-y v-if="account" transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" outlined class="ml-4" color="primary">
            Tài khoản
            <v-icon right dark>
              mdi-menu-down
            </v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in items" :key="i" @click="$router.push(item.url)">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
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
      <v-btn class="ml-4" color="primary" outlined @click="$router.push('/login')" v-else>Đăng nhập</v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    items: [
      { text: 'Thông tin tài khoản', icon: 'mdi-account', url: '/profile' },
      { text: 'Xác minh danh tính', icon: 'mdi-check-circle-outline ', url: '/kyc' },
    ]
  }),
  computed: {
    ...mapGetters(["account"]),
  },
  mounted() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      this.CallAPI("get", "profile", {}, (res) => {
        this.$store.dispatch('setAccount', res.data.phone)
      }, (err) => localStorage.clear())
    },
    logout() {
      localStorage.clear()
      this.$store.dispatch('setAccount', '')
    }
  }
};
</script>