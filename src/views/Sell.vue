<template>
  <main>
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-stepper v-model="step" vertical class="elevation-0">
            <v-stepper-step :complete="step > 1" step="1">
              BÁN {{ token.toUpperCase() }}
            </v-stepper-step>

            <v-stepper-content step="1">
              <div class="mb-6">
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
                          Số lượng tối thiểu trên 1 giao dịch <br> là 20 USDT
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
                    <label>Số tiền nhận được</label>
                    <v-text-field outlined :value="money_pay" disabled class="money">
                      <template v-slot:append>
                        <img width="20" height="20" src="/img/p2p/vnd.png" alt="">
                      </template>
                    </v-text-field>
                    <div class="estimated">
                      Phí:
                      <span>{{ transfer_fee }} USDT ≈ {{ formatMoney(transfer_fee * usdt_price) }} VND</span>
                      <b v-if="transfer_fee"> (Bao gồm cả phí Blockchain)</b>
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
                      :item-text="item => item.code + ' - ' + item.name" v-model="bank.info">
                    </v-autocomplete>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" md="5">
                    <label>Số tài khoản nhận</label>
                    <v-text-field v-model="bank.account" type="number" outlined
                      placeholder="Nhập số tài khoản nhận">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="7">
                    <label>Tên chủ tài khoản</label>
                    <v-text-field v-model="bank.owner" outlined @focus="getBankInfo"
                      placeholder="Tên chủ tài khoản">
                    </v-text-field>
                  </v-col>
                </v-row>
                <div class="error-msg" v-if="error">{{ error }}</div>
              </div>
              <v-btn color="primary" @click="orderHandle">
                Xác nhận
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
                          <td width="150px">Mã giao dịch:</td>
                          <td>{{ order_data.code }}</td>
                        </tr>
                        <tr>
                          <td>Số lượng bán:</td>
                          <td>{{ formatMoney(amount) }} {{ token.toUpperCase() }}</td>
                        </tr>
                        <tr>
                          <td>Tỷ giá:</td>
                          <td>{{ formatMoney(price) }} VNĐ</td>
                        </tr>
                        <tr>
                          <td>Số tiền nhận:</td>
                          <td>{{ formatMoney(money) }} VNĐ</td>
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
                          <td>{{ wallet_address }}</td>
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
              <div class="mb-8">
                <div class="d-flex align-center">
                  <v-icon size="20" class="mr-1" color="primary">mdi-progress-check</v-icon>
                  Đơn hàng của bạn đang được xử lý. Vui lòng chờ trong giây lát!
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
      amount: 20,
      token_list: ["usdt", "btc", "eth", "busd", "bnb"],
      token: "usdt",
      money: "",
      price: 0,
      usdt_price: 0,
      order_data: '',
      asset_list: [],
      bank_list: banks,
      bank: {
        info: '',
        account: '',
        owner: ''
      },
      network_list: [
        {
          name: "BNB Smartchain (BEP20)",
          value: "bep20",
          fee: 1
        },
        {
          name: "Tron (TRC20)",
          value: "trc20",
          fee: 1
        },
        {
          name: "Ethereum (ERC20)",
          value: "erc20",
          fee: 4.18
        },
      ],
      network: {
        name: "BEP20",
        value: "bep20",
        fee: 1
      },
      wallet_address: "",
      interval: '',
      error: ''
    }
  },
  computed: {
    ...mapGetters(["account"]),
    money_pay() {
      return `${this.amount} * ${this.formatMoney(this.price)} - ${this.formatMoney(this.transfer_fee * this.usdt_price)} = ${this.formatMoney(this.money)}`.replace("- 0 ", "")
    },
    transfer_fee() {
      if (this.token == "usdt" || this.token == "busd") {
        if (this.amount < 5000) {
          return this.network.fee + 1
        }
        if (this.amount < 10000) {
          return this.network.fee
        }
        return 0
      }
      return (this.network.fee - 1).toFixed(2)
    },
  },
  mounted() {
    this.getPrice()
    this.getUsdtPrice()
    this.getSetup()
    this.getAsset()
  },
  methods: {
    orderHandle() {
      if (!this.amount || !this.bank.account || !this.bank.owner) {
        this.error = "Vui lòng nhập đủ thông tin"
        return
      }
      if (this.amount < 0.01 && this.token == 'btc') {
        this.error = `Giao dịch tối thiểu 0.01 ${this.token.toUpperCase()}`
        return
      }
      if (this.amount < 20 && this.token == 'usdt' || this.token == 'busd') {
        this.error = `Giao dịch tối thiểu 20 ${this.token.toUpperCase()}`
        return
      }
      if (this.amount < 0.1 && this.token == 'eth') {
        this.error = `Giao dịch tối thiểu 0.1 ${this.token.toUpperCase()}`
        return
      }
      if (this.amount < 1 && this.token == 'bnb') {
        this.error = `Giao dịch tối thiểu 1 ${this.token.toUpperCase()}`
        return
      }
      let data = {
        phone: this.account.phone,
        amount: this.amount,
        token: this.token,
        money: this.money,
        network: this.network.value,
        bank_name: this.bank.info.name,
        account_number: this.bank.account,
        owner_name: this.bank.owner,
        rate: this.price
      }
      this.CallAPI("post", "sell-order", data, (res) => {
        this.order_data = res.data.data
        this.step = 2
      })
    },
    getPrice() {
      this.price = 0;
      this.token = this.$route.params.id
      const params = `p2p?type=sell&asset=${this.$route.params.id}&fiat=vnd`;
      this.CallAPI("get", params, {}, (res) => {
        this.price = Number(res.data.data[4].adv.price);
        if (this.token == "btc") {
          this.price = Number(res.data.data[4].adv.price) - 5000000;
        }
        if (this.token == "eth") {
          this.price = Number(res.data.data[4].adv.price) - 300000;
        }
        if (this.token == "bnb") {
          this.price = Number(res.data.data[4].adv.price) - 50000;
        }
        if (this.token == "usdt") {
          this.usdt_price = Number(res.data.data[4].adv.price);
        }
        this.inputAmount();
      });
    },
    getUsdtPrice() {
      const params = `p2p?type=sell&asset=usdt&fiat=vnd`;
      this.CallAPI("get", params, {}, (res) => {
        this.usdt_price = Number(res.data.data[4].adv.price);
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
      this.bank.info = this.bank_list[0]
      this.CallAPI("get", "setup/address", {}, (res) => {
        this.wallet_address = res.data.value
      })
    },
  },
  watch: {
    network() {
      this.inputAmount()
    },
    token() {
      if (this.token != this.$route.params.id)
        this.$router.push('/sell/'+ this.token)
    },
    $route() {
      this.token = this.$route.params.id
      this.getPrice()
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>