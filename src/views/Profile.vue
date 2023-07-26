<template>
  <main class="profile">
    <v-container>
      <div class="d-flex mb-6 mx-6">
        <v-avatar color="primary" size="80">
          <v-icon dark size="50">
            mdi-account-circle
          </v-icon>
        </v-avatar>
        <div class="account">
          <h1>{{ account.phone }}</h1>
          <div class="verify" v-if="account.verify == 'success'">
            <v-icon color="primary" class="mr-1" size="16">
              mdi-check
            </v-icon>
            Đã xác minh
          </div>
          <div class="unverify" v-else>
            <v-icon color="#ff5252" class="mr-1" size="16">
              mdi-alert-circle-outline
            </v-icon>
            Chưa xác minh
          </div>
        </div>
      </div>
      <v-row>
        <v-col cols="12" md="8">
          <div class="mx-6">
            <v-row>
              <v-col cols="12" md="5">
                <label>Họ và tên</label>
                <v-text-field v-model="name" outlined placeholder="Họ và tên">
                </v-text-field>
              </v-col>
              <v-col cols="12" md="7">
                <label>Ngày sinh</label>
                <v-text-field v-model="birthday" outlined :placeholder="gender_placeholder">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="5">
                <label>Giới tính</label>
                <v-select v-model="gender" :items="['Nam', 'Nữ', 'Khác']" outlined placeholder="Giới tính">
                </v-select>
              </v-col>
              <v-col cols="12" md="7">
                <label>Địa chỉ</label>
                <v-text-field v-model="address" outlined placeholder="Địa chỉ">
                </v-text-field>
              </v-col>
            </v-row>
            <v-btn class="my-6" color="primary" x-large block @click="updateProfile">Cập nhật</v-btn>
            <v-card class="pa-6" outlined v-if="!account.verify">
              <div class="d-flex align-start">
                <v-icon color="orange">mdi-alert-outline</v-icon>
                <div class="warning-msg ml-3">
                  Vui lòng cập nhật thông tin cá nhân. Sau đó truy cập link bên dưới bằng thiết bị di động để xác minh
                  danh tính.
                </div>
              </div>
              <v-text-field class="mt-3" :value="kyc_link" outlined readonly append-icon="mdi-content-copy"
                @click:append="copyText" @click="copyText"></v-text-field>
            </v-card>
            <v-card class="pa-6" outlined v-if="account.verify == 'pending'">
              <div class="d-flex align-start">
                <v-icon color="orange">mdi-alert-outline</v-icon>
                <div class="warning-msg ml-3">
                  Yêu cầu KYC của bạn đang trong quá trình xét duyệt. Bạn có thể liên hệ <a
                    href="https://t.me/ChoOTCVN_support" target="_blank">@ChoOTCVN_support</a> để được hỗ trợ.
                </div>
              </div>
            </v-card>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="faq">
            <h3 class="mb-3">Câu hỏi thường gặp</h3>
            <v-expansion-panels>
              <v-expansion-panel v-for="(item, i) in faq" :key="i">
                <v-expansion-panel-header>
                  {{ item.answer }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ item.question }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: '',
      birthday: '',
      gender: 'Nam',
      address: '',
      faq: [
        {
          answer: 'Xác minh danh tính (KYC) để làm gì?',
          question: 'Đối với giao dịch mua, bạn cần KYC để chúng tôi xác minh ngân hàng bạn sử dụng là ngân hàng chính chủ. Còn đối với giao dịch bán thì bạn không cần phải KYC.'
        },
        {
          answer: 'Thời gian xác minh KYC?',
          question: 'Quá trình xác minh sẽ diễn ra trong khoảng 5-10 phút.'
        },
        {
          answer: 'Tôi có thể liên hệ ai để được hỗ trợ?',
          question: 'Bạn có thể liên hệ qua telegram @ChoOTCVN_support để được hỗ trợ.'
        },
      ]
    }
  },
  computed: {
    ...mapGetters(["account"]),
    gender_placeholder() {
      let now = new Date()
      return now.toLocaleDateString()
    },
    kyc_link() {
      return `https://exchange.chootc.com/kyc/${this.account.phone}`
    }
  },
  mounted() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      this.CallAPI("get", "profile", {}, (res) => {
        this.name = res.data.name
        this.birthday = res.data.birthday
        this.gender = res.data.gender
        this.address = res.data.address
      }, (err) => localStorage.clear())
    },
    copyText() {
      this.$toast.success('Copy thành công')
      navigator.clipboard.writeText(this.kyc_link);
    },
    updateProfile() {
      let data = {
        name: this.name,
        birthday: this.birthday,
        gender: this.gender,
        address: this.address
      }
      this.CallAPI('post', 'update-profile', data, (res) => {
        this.$toast.success('Cập nhật thành công')
      })
    }
  }
};
</script>