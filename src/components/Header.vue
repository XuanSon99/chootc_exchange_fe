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
            Giao dịch mua
          </v-btn>

          <v-btn @click="$router.push('/sell/usdt')" text color="black">
            Giao dịch bán
          </v-btn>

          <v-btn @click="$router.push('/history/buy')" text color="black">
            Lịch sử giao dịch
          </v-btn>

          <v-btn @click="$router.push('/referral')" text color="black">
            Chương trình giới thiệu
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
              <v-list-item @click="$router.push('/profile')" v-if="account.verify">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Thông tin tài khoản</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="$router.push('/profile')" v-else>
                <v-list-item-icon>
                  <v-icon>mdi-shield-account-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Xác minh danh tính</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item @click="dialog = true">
                <v-list-item-icon>
                  <v-icon>mdi-lock-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Đổi mật khẩu</v-list-item-title>
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
    <div class="top-note">
      <textra :data='message' :timer="10" filter="top-bottom" v-if="message[0]" class="message" />
    </div>
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
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span>Thay đổi mật khẩu</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <div class="pa-6">
          <label>Mật khẩu cũ</label>
          <v-text-field v-model="current_password" outlined placeholder="Nhập mật khẩu cũ"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show1 = !show1"
            :type="show1 ? 'text' : 'password'"></v-text-field>
          <label class="mt-6">Mật khẩu mới</label>
          <v-text-field v-model="password" outlined placeholder="Nhập mật khẩu mới"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show2 = !show2"
            :type="show2 ? 'text' : 'password'"></v-text-field>
          <label class="mt-6">Xác nhận mật khẩu</label>
          <v-text-field v-model="re_password" outlined placeholder="Xác nhận mật khẩu"
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show3 = !show3"
            :type="show3 ? 'text' : 'password'"></v-text-field>
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="default" @click="dialog = false"> Hủy </v-btn>
          <v-btn color="primary" @click="changePassword"> Xác nhận </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    dialog: false,
    drawer: false,
    notifications: "",
    noti_count: 0,
    current_password: "",
    password: "",
    re_password: "",
    show1: "",
    show2: "",
    show3: "",
    interval: '',
    number: [
      "086",
      "096",
      "097",
      "098",
      "039",
      "038",
      "037",
      "036",
      "035",
      "034",
      "032",
      "033",
      "091",
      "094",
      "088",
      "083",
      "084",
      "079",
      "077",
      "052",
      "056",
    ],
    message: [],
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
          { text: 'Lịch sử giao dịch', icon: 'mdi-clipboard-text-clock', url: '/history' },
          { text: 'Thông tin tài khoản', icon: 'mdi-account', url: '/profile' },
          { text: 'Chương trình giới thiệu', icon: 'mdi-bookmark-multiple', url: '/referral' },
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
    this.interval = setInterval(() => {
      this.getAmountNoti()
    }, 20000);

    this.addMessage();
    setInterval(() => {
      this.addMessage();
    }, 9000);
  },
  methods: {
    changePassword() {
      if (!this.current_password || !this.password) {
        this.$toast.error("Vui lòng nhập đủ mật khẩu");
        return;
      }
      if (this.password != this.re_password) {
        this.$toast.error("Xác nhận mật khẩu không chính xác");
        return;
      }
      if (this.password.length < 6) {
        this.$toast.error("Mật khẩu tối thiểu 6 ký tự");
        return;
      }
      this.CallAPI(
        "post",
        "change-password",
        {
          current_password: this.current_password,
          password: this.password,
        },
        (response) => {
          this.$toast.success("Đổi mật khẩu thành công");
          this.dialog = false;
          this.current_password = ""
          this.password = ""
          this.re_password = ""
        }, (err) => {
          this.$toast.error("Mật khẩu cũ không chính xác");
        }
      );
    },
    getProfile() {
      this.CallAPI("get", "profile", {}, (res) => {
        this.$store.dispatch('setAccount', res.data)
      }, (err) => localStorage.clear())
    },
    logout() {
      localStorage.clear()
      this.$store.dispatch('setAccount', '')
      this.$router.push("/")
    },
    getNotification() {
      this.CallAPI("get", "notifications", {}, (res) => {
        this.notifications = res.data
      })
    },
    getAmountNoti() {
      if (!this.account) return
      this.CallAPI("get", "count-noti", {}, (res) => {
        if (this.noti_count < res.data || !this.notifications[0]) {
          this.getNotification()
        }
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
    formatMoney(value) {
      if (!value) return 0;
      return String(parseFloat(value).toFixed(0))
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    addMessage() {
      let type = this.random(0, 5);
      let phone =
        this.number[Math.floor(Math.random() * this.number.length)] +
        "***" +
        this.random(100, 999);

      let money = this.formatMoney(this.random(0.5, 20) * 100)

      let text = `Người dùng ${phone} vừa mua thành công ${money} USDT`
      if (type == 1) {
        text = `Người dùng ${phone} vừa mua thành công ${money} BUSD`
      }
      if (type == 2) {
        text = `Người dùng ${phone} vừa bán thành công ${money} USDT`
      }
      if (type == 3) {
        text = `Người dùng ${phone} vừa bán thành công ${money} BUSD`
      }
      if (type == 4 || type == 5) {
        text = `Người dùng ${phone} đã xác minh danh tính thành công`
      }
      this.message.push(text);
    },
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
  watch: {
    account() {
      if (this.account.phone) {
        this.getAmountNoti()
      } else {
        this.notifications = []
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>