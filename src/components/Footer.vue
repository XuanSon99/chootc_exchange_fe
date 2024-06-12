<template>
  <footer v-if="!mobile">
    <v-container>
      <v-divider class="mb-3"></v-divider>
      <v-row align="center">
        <v-col cols="12" md="4">
          © 2024 chootc.com. All rights reserved
        </v-col>
        <v-col cols="12" md="4">
          <div class="d-flex justify-center">
            <a href="https://chootc.gitbook.io/exchange/huong-dan-giao-dich/mua-tien-dien-tu" target="_blank"
              class="px-5">Hướng dẫn</a>
            <a href="https://chootc.gitbook.io/exchange/dieu-khoan-su-dung" target="_blank" class="px-5">Điều khoản sử
              dụng</a>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="d-flex justify-end">
            <v-btn icon size="35" variant="text" href="https://t.me/chootcvn" target="_blank" aria-label="Telegram">
              <v-icon size="22">fa-brands fa-telegram</v-icon>
            </v-btn>
            <v-btn icon size="35" variant="text" href="https://www.facebook.com/Chootcvietnam" target="_blank"
              aria-label="Facebook">
              <v-icon size="22">fa-brands fa-facebook</v-icon>
            </v-btn>
            <v-btn icon size="35" variant="text" href="https://twitter.com/chootcvn" target="_blank" aria-label="Twitter">
              <v-icon size="22">fa-brands fa-twitter</v-icon>
            </v-btn>
            <v-btn icon size="35" variant="text" href="https://www.tiktok.com/@chootcvietnam" target="_blank"
              aria-label="Tiktok">
              <v-icon size="22">fa-brands fa-tiktok</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <div class="chat">
        <v-btn fab color="primary" class="elevation-0" href="https://t.me/ChoOTCVN_support" target="_blank">
          <v-icon size="30">mdi-facebook-messenger</v-icon>
        </v-btn>
      </div>
    </v-container>
  </footer>
</template>

<script>
export default {
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.width < 1025
    }
  },
};
</script>