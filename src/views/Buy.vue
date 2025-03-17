<template>
  <main class="mb-pt-0">
    <div class="mheader" v-if="mobile">
      <v-btn icon @click="$router.back()" v-if="step == 1">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn icon @click="step = 1" v-else>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span v-if="step == 1">MUA {{ token.toUpperCase() }}</span>
      <span v-else>THANH TOÁN</span>
    </div>
    <v-container v-if="!mobile">
      <v-row>
        <v-col cols="12" md="8">
          <div class="ml-6">
            <v-tabs v-model="tab" :color="tab ? 'error' : 'primary'" background-color="transparent">
              <v-tab value="0" @click="$router.push('/buy/usdt')">Tôi muốn mua</v-tab>
              <v-tab value="1" @click="$router.push('/sell/usdt')">Tôi muốn bán</v-tab>
            </v-tabs>
          </div>
          <v-stepper v-model="step" vertical class="elevation-0">
            <v-stepper-step :complete="step > 1" step="1">
              MUA {{ token.toUpperCase() }}
            </v-stepper-step>

            <v-stepper-content step="1">
              <div class="mb-6">
                <v-row>
                  <v-col cols="12" md="5">
                    <div class="d-flex align-center">
                      <label>Số lượng cần mua</label>
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon class="ml-1 mb-1" size="16" v-bind="attrs" v-on="on">
                            mdi-help-circle-outline
                          </v-icon>
                        </template>
                        <div class="tooltip my-1">
                          Đối với giao dịch mua bạn phải đăng nhập và KYC để giao dịch
                        </div>
                      </v-tooltip>
                    </div>
                    <div class="input-box">
                      <input type="number" class="exchange-input" v-model="amount" @input="inputAmount" />
                      <div class="unit">
                        <v-select dense solo :items="token_list" v-model="token" :menu-props="{ offsetY: true }">
                          <template slot="selection" slot-scope="data">
                            <img :src="'/img/p2p/' + data.item + '.svg'" alt="" />
                            {{ data.item.toUpperCase() }}
                          </template>
                          <template slot="item" slot-scope="data">
                            <img :src="'/img/p2p/' + data.item + '.svg'" alt="" />
                            {{ data.item.toUpperCase() }}
                          </template>
                        </v-select>
                      </div>
                    </div>
                    <div class="estimated">
                      Ước tính:
                      <span>1 {{ token }} ≈ {{ formatMoney(price) }} VND</span>
                    </div>
                  </v-col>
                  <v-col cols="12" md="7">
                    <div class="d-flex align-center">
                      <label>Số tiền cần thanh toán</label>
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon class="ml-1 mb-1" size="16" v-bind="attrs" v-on="on">
                            mdi-help-circle-outline
                          </v-icon>
                        </template>
                        <div class="tooltip my-1">
                          Số tiền cần thanh toán có thể bị thay đổi <br> do tỷ giá được cập nhật liên tục
                        </div>
                      </v-tooltip>
                    </div>
                    <v-text-field outlined :value="money_pay" readonly class="money">
                      <template v-slot:append>
                        <img width="20" height="20" src="/img/p2p/vnd.png" alt="">
                      </template>
                    </v-text-field>
                    <div class="estimated">
                      Phí:
                      <span>{{ transfer_fee }} USDT ≈ {{ formatMoney(transfer_fee * usdt_price) }} VND</span>
                      (Bao gồm cả phí blockchain)
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="5">
                    <label>Mạng lưới</label>
                    <v-select :items="network_list" outlined :item-text="item => item.name"
                      :menu-props="{ offsetY: true }" return-object v-model="network">
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="7">
                    <label>Địa chỉ ví</label>
                    <v-text-field v-model="address" outlined placeholder="Nhập địa chỉ ví nhận">
                    </v-text-field>
                  </v-col>
                </v-row>
                <div class="d-flex align-center" v-if="error">
                  <span class="error-msg">
                    {{ error }}
                  </span>
                  <v-btn class="fz-14 ml-2 mt-2" color="primary" :to="'/profile'" v-if="error.includes('KYC')" small
                    outlined>KYC ngay</v-btn>
                  <v-btn class="fz-14 ml-2 mt-2" color="primary" to="/login" v-if="error.includes('đăng nhập')" small
                    outlined>Đăng nhập</v-btn>
                  <a class="ml-1 mt-2 fz-14" href="https://t.me/QuocPham_OTC" target="_blank"
                    v-if="error.includes('số lượng lớn')">@QuocPham_OTC</a>
                </div>
              </div>
              <v-btn color="primary" @click="orderHandle" :disabled="loading" width="120px">
                <v-progress-circular indeterminate v-if="loading" :width="3" :size="20"></v-progress-circular>
                <span v-else>Xác nhận</span>
              </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="step > 2" step="2">
              THANH TOÁN
            </v-stepper-step>

            <v-stepper-content step="2">
              <div class="mb-8 pay-table">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-simple-table dense>
                      <tbody>
                        <tr>
                          <td style="min-width: 130px;">Số lượng mua:</td>
                          <td class="upper-case">{{ amount }} {{ token }} ({{ network.value }})</td>
                        </tr>
                        <tr>
                          <td>Địa chỉ ví nhận:</td>
                          <td>{{ address }}</td>
                        </tr>
                        <tr>
                          <td>Tỷ giá:</td>
                          <td>{{ formatMoney(order_data.rate) }} VNĐ</td>
                        </tr>
                        <tr>
                          <td>Số tiền cần trả:</td>
                          <td>
                            {{ formatMoney(order_data.money) }} VNĐ
                            <v-btn icon>
                              <v-icon size="20" @click="copyText(order_data.money)">mdi-content-copy</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                        <tr>
                          <td>STK thanh toán:</td>
                          <td>
                            {{ bank[2] }} - {{ bank[1] }}
                            <br>
                            {{ bank[0] }}
                            <v-btn icon>
                              <v-icon size="20" @click="copyText(bank[2])">mdi-content-copy</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                        <tr>
                          <td>Nội dung CK:</td>
                          <td>
                            {{ order_data.code }}
                            <v-btn icon>
                              <v-icon size="20" @click="copyText(order_data.code)">mdi-content-copy</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                    <div class="note">
                      * Vui lòng chuyển chính xác số tiền (kể cả số lẻ) và nội dung chuyển khoản. Quét mã QR bên trên để
                      thanh toán nhanh hơn.
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <img :src="qrcode" class="img-qr" alt="" v-if="order_data">
                  </v-col>
                </v-row>
              </div>
              <v-btn color="primary" @click="step = 3">
                Tôi đã thanh toán
              </v-btn>
              <v-btn class="ml-3" text @click="step = 1">
                Quay lại
              </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="step > 3" step="3">
              HOÀN THÀNH
            </v-stepper-step>

            <v-stepper-content step="3">
              <div class="mb-8">
                <div class="d-flex align-start">
                  <v-icon size="20" class="mt-1 mr-2" color="primary">mdi-progress-check</v-icon>
                  <div>
                    Giao dịch đang được xử lý. Vui lòng chờ trong giây lát! <br>
                    Liên hệ <a href="https://t.me/QuocPham_OTC" target="_blank">@QuocPham_OTC</a>
                    để được hỗ trợ.
                  </div>
                </div>
              </div>
              <v-btn color="primary" @click="step = 1">
                Mua thêm
              </v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <div class="px-6 py-5 title d-flex align-center">
              <v-icon color="primary" class="mr-1">mdi-chart-box-outline </v-icon>
              <span>Tỷ giá trực tuyến</span>
            </div>
            <v-divider></v-divider>
            <div class="pa-6">
              <v-tabs v-model="tab" :color="tab ? 'error' : 'primary'" fixed-tabs background-color="transparent">
                <v-tab value="0">Mua</v-tab>
                <v-tab value="1">Bán</v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <div class="asset" v-for="(item, index) in asset_list" :key="index" v-show="item.symbol != token"
                    @click="$router.push('/buy/' + item.symbol)">
                    <img :src="'/img/p2p/' + item.symbol + '.svg'" alt="" />
                    <div class="name">{{ item.symbol }}</div>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" width="150px">
                      {{ formatMoney(item.buy_rate) }} ₫
                    </v-btn>
                  </div>
                  <div class="asset" @click="$router.push('/buy/' + token)">
                    <img :src="'/img/p2p/' + token + '.svg'" alt="" />
                    <div class="name">{{ token }}</div>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" width="150px">
                      {{ formatMoney(price) }} ₫
                    </v-btn>
                  </div>
                </v-tab-item>
                <v-tab-item>
                  <div class="asset" v-for="(item, index) in asset_list" :key="index"
                    @click="$router.push('/sell/' + item.symbol)">
                    <img :src="'/img/p2p/' + item.symbol + '.svg'" alt="" />
                    <div class="name">{{ item.symbol }}</div>
                    <v-spacer></v-spacer>
                    <v-btn color="error" width="150px">
                      {{ formatMoney(item.sell_rate) }} ₫
                    </v-btn>
                  </div>
                </v-tab-item>
              </v-tabs-items>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else class="pt-80">
      <div v-if="step == 1">
        <v-row>
          <v-col cols="12" md="5">
            <div class="d-flex align-center">
              <label>Số lượng cần mua</label>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon class="ml-1 mb-1" size="16" v-bind="attrs" v-on="on">
                    mdi-help-circle-outline
                  </v-icon>
                </template>
                <div class="tooltip my-1">
                  Hạn mức mua mặc định là 1 - 2.5 triệu. <br> Đăng nhập và KYC để tăng hạn mức lên 50
                  triệu!
                </div>
              </v-tooltip>
            </div>
            <div class="input-box">
              <input type="number" class="exchange-input-mobile" placeholder="Nhập số lượng" v-model="amount"
                @input="inputAmount" />
              <div class="unit">
                <v-select dense solo :items="token_list" v-model="token" :menu-props="{ offsetY: true }">
                  <template slot="selection" slot-scope="data">
                    <img :src="'/img/p2p/' + data.item + '.svg'" alt="" />
                    {{ data.item.toUpperCase() }}
                  </template>
                  <template slot="item" slot-scope="data">
                    <img :src="'/img/p2p/' + data.item + '.svg'" alt="" />
                    {{ data.item.toUpperCase() }}
                  </template>
                </v-select>
              </div>
            </div>
            <div class="estimated">
              Ước tính:
              <span>1 {{ token }} ≈ {{ formatMoney(price) }} VND</span>
            </div>
          </v-col>
          <v-col cols="12" md="7">
            <div class="d-flex align-center">
              <label>Số tiền cần thanh toán</label>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon class="ml-1 mb-1" size="16" v-bind="attrs" v-on="on">
                    mdi-help-circle-outline
                  </v-icon>
                </template>
                <div class="tooltip my-1">
                  Số tiền cần thanh toán có thể bị thay đổi <br> do tỷ giá được cập nhật liên tục
                </div>
              </v-tooltip>
            </div>
            <v-text-field filled rounded :value="money_pay" readonly class="money">
              <template v-slot:append>
                <img width="20" height="20" src="/img/p2p/vnd.png" alt="">
              </template>
            </v-text-field>
            <div class="estimated">
              Phí:
              <span>{{ transfer_fee }} USDT ≈ {{ formatMoney(transfer_fee * usdt_price) }} VND</span>
              (Bao gồm cả phí blockchain)
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="5">
            <label>Mạng lưới</label>
            <v-select :items="network_list" filled rounded :item-text="item => item.name" :menu-props="{ offsetY: true }"
              return-object v-model="network">
            </v-select>
          </v-col>
          <v-col cols="12" md="7">
            <label>Địa chỉ ví</label>
            <v-text-field v-model="address" filled rounded placeholder="Nhập địa chỉ ví nhận">
            </v-text-field>
          </v-col>
        </v-row>
        <div class="mt-2" v-if="error">
          <span class="error-msg">
            {{ error }}
          </span>
          <v-btn class="fz-14 ml-2 mt-2" color="primary" :to="'/profile'" v-if="error.includes('KYC')" small outlined>KYC
            ngay</v-btn>
          <v-btn class="fz-14 ml-2 mt-2" color="primary" to="/login" v-if="error.includes('đăng nhập')" small
            outlined>Đăng nhập</v-btn>
          <a class="ml-1 mt-2 fz-14" href="https://t.me/QuocPham_OTC" target="_blank"
            v-if="error.includes('số lượng lớn')">@QuocPham_OTC</a>
        </div>
        <v-btn color="primary" @click="orderHandle" :disabled="loading" class="mt-6 elevation-0" rounded block x-large>
          <v-progress-circular indeterminate v-if="loading" :width="3" :size="20"></v-progress-circular>
          <span v-else>Xác nhận</span>
        </v-btn>
      </div>
      <div v-if="step == 2">
        <v-row>
          <v-col cols="12">
            <div class="pay-table">
              <v-simple-table dense>
                <tbody>
                  <tr>
                    <td style="min-width: 130px;">Số lượng mua:</td>
                    <td class="upper-case">{{ amount }} {{ token }} ({{ network.value }})</td>
                  </tr>
                  <tr>
                    <td>Địa chỉ ví nhận:</td>
                    <td>{{ address }}</td>
                  </tr>
                  <tr>
                    <td>Tỷ giá:</td>
                    <td>{{ formatMoney(order_data.rate) }} VNĐ</td>
                  </tr>
                  <tr>
                    <td>Số tiền cần trả:</td>
                    <td>
                      {{ formatMoney(order_data.money) }} VNĐ
                      <v-btn icon>
                        <v-icon size="20" @click="copyText(order_data.money)">mdi-content-copy</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td>STK thanh toán:</td>
                    <td>
                      {{ bank[2] }} - {{ bank[1] }}
                      <br>
                      {{ bank[0] }}
                      <v-btn icon>
                        <v-icon size="20" @click="copyText(bank[2])">mdi-content-copy</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td>Nội dung CK:</td>
                    <td>
                      {{ order_data.code }}
                      <v-btn icon>
                        <v-icon size="20" @click="copyText(order_data.code)">mdi-content-copy</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </div>

          </v-col>
          <v-col cols="12">
            <img :src="qrcode" class="img-qr" alt="" v-if="order_data">
          </v-col>
          <v-col cols="12">
            <div class="note">
              * Vui lòng chuyển chính xác số tiền (kể cả số lẻ) và nội dung chuyển khoản. Quét mã QR bên trên để
              thanh toán nhanh hơn.
            </div>
          </v-col>
        </v-row>

        <v-btn color="primary" @click="paidConfirm" class="mt-6 elevation-0" rounded block x-large>
          Tôi đã thanh toán
        </v-btn>

      </div>
    </v-container>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      tab: 0,
      step: 1,
      amount: 100,
      token_list: ["usdt", "btc", "eth", "busd", "bnb"],
      token: "usdt",
      money: "",
      price: 0,
      network_list: [
        {
          name: "Tron (TRC20)",
          value: "trc20",
          fee: 3
        },
        {
          name: "BNB Smartchain (BEP20)",
          value: "bep20",
          fee: 2
        },
        {
          name: "Ethereum (ERC20)",
          value: "erc20",
          fee: 10
        },
      ],
      network: {
        name: "BNB Smartchain (BEP20)",
        value: "bep20",
        fee: 2
      },
      usdt_price: 0,
      address: '',
      order_data: '',
      bank: '',
      asset_list: '',
      interval: '',
      error: '',
      loading: false
    }
  },
  created() {
    if (this.mobile && !this.$route.params.id) {
      this.$router.push('/home');
    }
  },
  computed: {
    ...mapGetters(["account"]),
    qrcode() {
      return `https://img.vietqr.io/image/${this.bank[0]}-${this.bank[2]}-compact2.jpg?amount=${this.order_data.money}&addInfo=${this.order_data.code}&accountName=${this.bank[1]}`
    },
    money_pay() {
      if (this.$vuetify.breakpoint.width < 1025) {
        return this.formatMoney(this.money);
      }
      return `${this.amount} * ${this.formatMoney(this.price)} + ${this.formatMoney(this.transfer_fee * this.usdt_price)} = ${this.formatMoney(this.money)}`.replace("+ 0 ", "")
    },
    transfer_fee() {
      let utc_hours = new Date().getUTCHours()
      let surcharge = 0
      if (utc_hours < 1 || utc_hours > 10) {
        surcharge = 1
      }
      if (this.token == "usdt" || this.token == "busd") {
        return this.network.fee + surcharge
      }
      return 10 + surcharge
    },
    mobile() {
      return this.$vuetify.breakpoint.width < 1025
    }
  },
  mounted() {
    this.getPrice()
    this.getSetup()
    this.getAsset()
  },
  methods: {
    paidConfirm() {
      this.$toast.success("Giao dịch đang được xử lý. Vui lòng chờ trong giây lát!")
      this.step = 1
    },
    orderHandle() {
    
      // this.error = 'Chức năng mua đang tạm ngưng. Bạn có thể bán USDT!'
      // return

      // if (this.money > 2500000) {
      //   if (!this.account) {
      //     this.error = 'Hạn mức tối đa là 2.5 triệu. Đăng nhập để tăng hạn mức'
      //     return
      //   }
      //   if (this.account.verify != 'success') {
      //     this.error = 'Hạn mức tối đa là 2.5 triệu. KYC ngay để tăng hạn mức'
      //     return
      //   }
      // }

      // if (this.money < 1000000) {
      //   this.error = 'Hạn mức giao dịch tối thiểu là 1 triệu'
      //   return
      // }

      // if (this.money > 50000000) {
      //   this.error = 'Hạn mức giao dịch tối đa là 50 triệu. Mua số lượng lớn tại'
      //   return
      // }

      if (!this.account) {
          this.error = 'Vui lòng đăng nhập để giao dịch'
          return
      }

      if (this.account.verify != 'success') {
          this.error = 'Vui lòng KYC để giao dịch'
          return
      }

      if (!this.amount) {
        this.error = "Vui lòng nhập số lượng cần mua"
        return
      }

      if (!this.address) {
        this.error = "Vui lòng nhập địa chỉ ví của bạn"
        return
      }

      if (this.network.value == 'trc20' && !this.validateTrc(this.address)) {
        this.error = "Địa chỉ ví không chính xác"
        return
      }
      if (this.network.value != 'trc20' && !this.validateErc(this.address)) {
        this.error = "Địa chỉ ví không chính xác"
        return
      }
      this.loading = true

      let data = {
        phone: this.account.phone,
        amount: this.amount,
        network: this.network.value,
        address: this.address,
        token: this.token,
        fee: this.transfer_fee,
      }
      this.CallAPI("post", "buy-order", data, (res) => {
        this.order_data = res.data.data
        this.price = this.order_data.rate
        this.step = 2
        this.loading = false
      })
    },
    getPrice() {
      this.price = 0;
      if (this.$route.params.id)
        this.token = this.$route.params.id
      this.loading = true

      const params = `p2p?type=buy&asset=${this.token}&fiat=vnd`;
      this.CallAPI("get", params, {}, (res) => {
        this.price = Number(res.data.data[7].adv.price);
        if (this.token == "usdt") {
          this.usdt_price = Number(res.data.data[7].adv.price);
        }
        this.loading = false
        this.inputAmount();
      });
    },
    inputAmount() {
      this.money = Number(this.amount) * this.price + this.transfer_fee * this.usdt_price;
    },
    formatMoney(value) {
      if (!value) return 0;
      return String(parseFloat(value).toFixed(0))
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getAsset() {
      this.CallAPI("get", "asset", {}, (res) => {
        this.asset_list = res.data
        this.interval = setInterval(() => {
          this.asset_list = []
          res.data.forEach(item => {
            let buy_rate = item.buy_rate
            let sell_rate = item.sell_rate
            if (['btc', 'eth', 'bnb'].includes(item.symbol)) {
              buy_rate = this.dynamicNum(item.buy_rate)
              sell_rate = this.dynamicNum(item.sell_rate)
            }
            if (item.symbol == 'usdt' && this.token != "usdt") {
              this.usdt_price = item.buy_rate
            }
            this.asset_list.push({
              symbol: item.symbol,
              buy_rate: buy_rate,
              sell_rate: sell_rate
            })
          });
        }, 5000);
      })
    },
    dynamicNum(number) {
      let num = String(number)
      let n = num.length < 8 ? this.randomNum(1, 3) : this.randomNum(2, 4)
      let result = num.slice(0, -n - 1);
      return result + this.randomNum(Math.pow(10, n), 9 * Math.pow(10, n))
    },
    getSetup() {
      this.CallAPI("get", "setup/bank", {}, (res) => {
        this.bank = res.data.value.split("-")
      })
    },
    validateErc(address) {
      let re = /^0x[a-fA-F0-9]{40}$/g
      return re.test(address)
    },
    validateTrc(address) {
      let re = /^T[A-Za-z1-9]{33}$/g
      return re.test(address)
    },
    copyText(value) {
      this.$toast.success('Copy thành công')
      navigator.clipboard.writeText(value);
    },
  },
  watch: {
    network() {
      this.inputAmount()
    },
    token() {
      if (this.token != this.$route.params.id)
        this.$router.push('/buy/' + this.token)
    },
    $route() {
      this.token = this.$route.params.id ? this.$route.params.id : 'usdt'

      this.step = 1
      this.getPrice()

      if (this.token == 'usdt' || this.token == 'busd') {
        this.amount = 100
      }
      if (this.token == 'btc') {
        this.amount = 0.01
      }
      if (this.token == 'bnb') {
        this.amount = 1
      }
      if (this.token == 'eth') {
        this.amount = 0.1
      }
      this.money = 0
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>