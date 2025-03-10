<template>
  <main class="mb-pt-0">
    <div class="mheader" v-if="mobile">
      <v-btn icon @click="$router.back()" v-if="step == 1">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn icon @click="step -= 1" v-else>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <span v-if="step == 1">BÁN {{ token.toUpperCase() }}</span>
      <span v-if="step == 2">THANH TOÁN</span>
      <span v-if="step == 3">NHẬP TXHASH/ ID</span>
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
              BÁN {{ token.toUpperCase() }}
            </v-stepper-step>

            <v-stepper-content step="1">
              <div class="mb-6">
                <v-row>
                  <v-col cols="12" md="5">
                    <div class="d-flex align-center">
                      <label>Số lượng (Không giới hạn)</label>
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon class="ml-1 mb-1" size="16" v-bind="attrs" v-on="on">
                            mdi-help-circle-outline
                          </v-icon>
                        </template>
                        <div class="tooltip my-1">
                          Không giới hạn số lượng trên mỗi giao dịch
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
                      <label>Số tiền nhận được</label>
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
                    <v-text-field outlined :value="money_pay" disabled class="money">
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
                    <label>Ngân hàng nhận</label>
                    <v-autocomplete :items="bank_list" outlined return-object
                      :item-text="item => item.code + ' - ' + item.short_name + ' - ' + item.name" v-model="bank.info"
                      placeholder="Chọn ngân hàng của bạn">
                    </v-autocomplete>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="5">
                    <label>Số tài khoản nhận</label>
                    <v-text-field v-model="bank.account" type="number" outlined placeholder="Nhập số tài khoản nhận">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="7">
                    <label>Tên chủ tài khoản</label>
                    <v-text-field v-model="bank.owner" outlined @focus="getBankInfo" placeholder="Tên chủ tài khoản">
                    </v-text-field>
                  </v-col>
                </v-row>
                <div class="d-flex align-center" v-if="error">
                  <span class="error-msg">
                    {{ error }}
                  </span>
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
                          <td style="min-width: 130px;">Mã giao dịch:</td>
                          <td>{{ order_data.code }}</td>
                        </tr>
                        <tr>
                          <td>Số lượng bán:</td>
                          <td>{{ amount }} {{ token.toUpperCase() }}</td>
                        </tr>
                        <tr>
                          <td>Tỷ giá:</td>
                          <td>{{ formatMoney(order_data.rate) }} VNĐ</td>
                        </tr>
                        <tr>
                          <td>Số tiền nhận:</td>
                          <td>{{ formatMoney(order_data.money) }} VNĐ</td>
                        </tr>
                        <tr>
                          <td>Tài khoản nhận:</td>
                          <td>
                            {{ bank.account }} - {{ bank.owner }}
                            <br>
                            {{ bank.info.name }} ({{ bank.info.code }})
                          </td>
                        </tr>
                        <tr>
                          <td>Ví thanh toán:</td>
                          <td>
                            {{ wallet_address }}
                            <v-btn icon>
                              <v-icon size="20" @click="copyText(wallet_address)">mdi-content-copy</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                    <div class="note">
                      * Vui lòng chuyển {{ formatMoney(amount) }} {{ token.toUpperCase() }} giao thức {{ network.name }}
                      vào địa chỉ ví hoặc mã QR bên trên.
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <vue-qr class="img-qr" :text="wallet_address" size="235"></vue-qr>
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
              <div v-if="is_waiting">
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
                  Bán thêm
                </v-btn>
              </div>
              <div v-else>
                <div class="mb-8">
                  <label>Txhash/ ID giao dịch:</label>
                  <v-text-field v-model="customer_address" outlined placeholder="Nhập Txhash hoặc ID giao dịch">
                  </v-text-field>
                </div>
                <v-btn color="primary" @click="completeHandle">
                  Hoàn thành
                </v-btn>
              </div>
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
                  <div class="asset" v-for="(item, index) in asset_list" :key="index"
                    @click="$router.push('/buy/' + item.symbol)">
                    <img :src="'/img/p2p/' + item.symbol + '.svg'" alt="" />
                    <div class="name">{{ item.symbol }}</div>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" width="150px">
                      {{ formatMoney(item.buy_rate) }} ₫
                    </v-btn>
                  </div>
                </v-tab-item>
                <v-tab-item>
                  <div class="asset" v-for="(item, index) in asset_list" :key="index" v-show="item.symbol != token"
                    @click="$router.push('/sell/' + item.symbol)">
                    <img :src="'/img/p2p/' + item.symbol + '.svg'" alt="" />
                    <div class="name">{{ item.symbol }}</div>
                    <v-spacer></v-spacer>
                    <v-btn color="error" width="150px">
                      {{ formatMoney(item.sell_rate) }} ₫
                    </v-btn>
                  </div>
                  <div class="asset" @click="$router.push('/sell/' + token)">
                    <img :src="'/img/p2p/' + token + '.svg'" alt="" />
                    <div class="name">{{ token }}</div>
                    <v-spacer></v-spacer>
                    <v-btn color="error" width="150px">
                      {{ formatMoney(price) }} ₫
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
              <label>Số lượng cần bán</label>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon class="ml-1 mb-1" size="16" v-bind="attrs" v-on="on">
                    mdi-help-circle-outline
                  </v-icon>
                </template>
                <div class="tooltip my-1">
                  Hạn mức bán tối thiểu là 500 nghìn
                </div>
              </v-tooltip>
            </div>
            <div class="input-box">
              <input type="number" class="exchange-input-mobile" v-model="amount" @input="inputAmount" />
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
              <label>Số tiền nhận được</label>
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
            <v-text-field filled rounded :value="money_pay" disabled class="money">
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
            <label>Ngân hàng nhận</label>
            <v-autocomplete :items="bank_list" filled rounded return-object
              :item-text="item => item.code + ' - ' + item.short_name + ' - ' + item.name" v-model="bank.info"
              placeholder="Chọn ngân hàng của bạn">
            </v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="5">
            <label>Số tài khoản nhận</label>
            <v-text-field v-model="bank.account" type="number" filled rounded placeholder="Nhập số tài khoản nhận">
            </v-text-field>
          </v-col>
          <v-col cols="12" md="7">
            <label>Tên chủ tài khoản</label>
            <v-text-field v-model="bank.owner" filled rounded @focus="getBankInfo" placeholder="Tên chủ tài khoản">
            </v-text-field>
          </v-col>
        </v-row>
        <div class="mt-2" v-if="error">
          <span class="error-msg">
            {{ error }}
          </span>
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
          <v-col cols="12" md="8">
            <v-simple-table dense>
              <tbody>
                <tr>
                  <td style="min-width: 130px;">Mã giao dịch:</td>
                  <td>{{ order_data.code }}</td>
                </tr>
                <tr>
                  <td>Số lượng bán:</td>
                  <td>{{ amount }} {{ token.toUpperCase() }}</td>
                </tr>
                <tr>
                  <td>Tỷ giá:</td>
                  <td>{{ formatMoney(order_data.rate) }} VNĐ</td>
                </tr>
                <tr>
                  <td>Số tiền nhận:</td>
                  <td>{{ formatMoney(order_data.money) }} VNĐ</td>
                </tr>
                <tr>
                  <td>Tài khoản nhận:</td>
                  <td>
                    {{ bank.account }} - {{ bank.owner }}
                    <br>
                    {{ bank.info.name }} ({{ bank.info.code }})
                  </td>
                </tr>
                <tr>
                  <td>Ví thanh toán:</td>
                  <td>
                    {{ wallet_address }}
                    <v-btn icon>
                      <v-icon size="20" @click="copyText(wallet_address)">mdi-content-copy</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>

          </v-col>
          <v-col cols="12" md="4">
            <div class="text-center">
              <vue-qr class="img-qr" :text="wallet_address" size="235"></vue-qr>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="note">
              * Vui lòng chuyển {{ formatMoney(amount) }} {{ token.toUpperCase() }} giao thức {{ network.name }}
              vào địa chỉ ví hoặc mã QR bên trên.
            </div>
          </v-col>
        </v-row>
        <v-btn color="primary" @click="step = 3" class="mt-6 elevation-0" rounded block x-large>
          Tôi đã thanh toán
        </v-btn>
      </div>
      <div v-if="step == 3">
        <div>
          <label>Txhash/ ID giao dịch:</label>
          <v-text-field v-model="customer_address" filled rounded placeholder="Nhập Txhash hoặc ID giao dịch">
          </v-text-field>
        </div>
        <v-btn color="primary" @click="completeHandle" rounded block x-large class="mt-6 elevation-0">
          Hoàn thành
        </v-btn>
      </div>
    </v-container>
  </main>
</template>

<script>
import banks from '../assets/banks.json'
import VueQr from 'vue-qr'
import { mapGetters } from "vuex";

export default {
  components: { VueQr },
  data() {
    return {
      tab: 1,
      step: 1,
      amount: 1000,
      token_list: ["usdt", "btc", "eth", "busd", "bnb"],
      token: "usdt",
      money: "",
      price: 0,
      usdt_price: 0,
      order_data: '',
      asset_list: [],
      bank_list: banks,
      customer_address: '',
      bank: {
        info: '',
        account: '',
        owner: ''
      },
      network_list: [
        {
          name: "Tron (TRC20)",
          value: "trc20",
          fee: 2
        },
        {
          name: "BNB Smartchain (BEP20)",
          value: "bep20",
          fee: 2
        },

        {
          name: "Ethereum (ERC20)",
          value: "erc20",
          fee: 2
        },
      ],
      network: {
        name: "Tron (TRC20)",
        value: "trc20",
        fee: 2
      },
      wallet_address: "",
      interval: '',
      error: '',
      loading: false,
      is_waiting: false
    }
  },
  computed: {
    ...mapGetters(["account"]),
    money_pay() {
      if (this.$vuetify.breakpoint.width < 1025) {
        return this.formatMoney(this.money);
      }
      return `${this.amount} * ${this.formatMoney(this.price)} - ${this.formatMoney(this.transfer_fee * this.usdt_price)} = ${this.formatMoney(this.money)}`.replace("- 0 ", "")
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
    this.getAsset()
  },
  methods: {
    orderHandle() {
      // if (this.money < 500000) {
      //   this.error = 'Hạn mức giao dịch tối thiểu là 500 nghìn'
      //   return
      // }

      // if (this.money > 50000000) {
      //   this.error = 'Hạn mức giao dịch tối đa là 50 triệu. Bán số lượng lớn tại'
      //   return
      // }

      if (!this.amount) {
        this.error = "Vui lòng nhập số lượng cần bán"
        return
      }

      if (!this.bank.account || !this.bank.owner) {
        this.error = "Vui lòng nhập đủ thông tin"
        return
      }
      this.loading = true

      let data = {
        phone: this.account.phone,
        amount: this.amount,
        token: this.token,
        fee: this.transfer_fee,
        network: this.network.value,
        bank_name: this.bank.info.short_name,
        account_number: this.bank.account,
        owner_name: this.bank.owner,
      }
      this.CallAPI("post", "sell-order", data, (res) => {
        this.order_data = res.data.data
        this.price = this.order_data.rate

        this.CallAPI("get", "setup/" + this.network.value, {}, (res) => {
          this.wallet_address = res.data.value
          this.loading = false
          this.step = 2
        })
      })
    },
    completeHandle() {
      if (!this.customer_address) {
        this.$toast.error('Vui lòng nhập Txhash/ ID giao dịch')
        return
      }

      if (this.network.value == 'trc20' && this.customer_address.length != 64) {
        this.$toast.error('Txhash/ ID giao dịch không chính xác')
        return
      }

      if (this.network.value != 'trc20' && this.customer_address.length != 66) {
        this.$toast.error('Txhash/ ID giao dịch không chính xác')
        return
      }

      this.CallAPI("put", "update-address",
        {
          code: this.order_data.code,
          customer_address: this.customer_address
        },
        (res) => {
          this.is_waiting = true
          if (this.mobile) {
            this.$toast.success("Giao dịch đang được xử lý. Vui lòng chờ trong giây lát!")
            this.step = 1
          }
        })
    },
    getPrice() {
      this.price = 0;
      if (this.$route.params.id)
        this.token = this.$route.params.id
      this.loading = true
      const params = `p2p?type=sell&asset=${this.token}&fiat=vnd`;
      this.CallAPI("get", params, {}, (res) => {
        this.price = Number(res.data.data[19].adv.price);
        if (this.token == "usdt") {
          this.usdt_price = Number(res.data.data[19].adv.price);
        }
        if(this.amount < 5000){
          this.price -= 100
          this.usdt_price -= 100
        }
        this.loading = false
        this.inputAmount();
      });
    },
    inputAmount() {
      this.money = Number(this.amount) * this.price - this.transfer_fee * this.usdt_price;
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
              this.usdt_price = item.sell_rate
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
        this.$router.push('/sell/' + this.token)
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
    },
    amount(){
      this.getPrice()
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>