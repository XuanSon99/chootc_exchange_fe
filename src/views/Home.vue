<template>
    <main class="pt-0 home">
        <div class="mheader">
            <span>TRANG CHỦ</span>
        </div>
        <v-container v-if="mobile" class="pt-80">
            <div class="d-flex" v-if="account">
                <div>
                    <span>Xin chào,</span>
                    <h3>{{ account.phone }}</h3>
                </div>
                <v-spacer></v-spacer>
                <v-btn icon to="/profile">
                    <v-icon>
                        mdi-account-circle-outline
                    </v-icon>
                </v-btn>
                <v-btn icon @click="dialog = true">
                    <v-icon>
                        mdi-cog-outline
                    </v-icon>
                </v-btn>
            </div>
            <div class="d-flex justify-center" v-else>
                <v-btn filled class="elevation-0 mx-2" color="primary" width="150" to="/login">Đăng nhập</v-btn>
                <v-btn outlined class="elevation-0 mx-2" color="primary" width="150" to="/register">Đăng Ký</v-btn>
            </div>
            <div class="d-flex justify-center mb-5 mt-7 action">
                <div>
                    <v-btn class="mx-5 elevation-0" fab to="buy/usdt">
                        <v-icon>
                            mdi-cart-arrow-down
                        </v-icon>
                    </v-btn>
                    <p>Mua</p>
                </div>
                <div>
                    <v-btn class="mx-5 elevation-0" fab to="sell/usdt">
                        <v-icon>
                            mdi-hand-coin-outline
                        </v-icon>
                    </v-btn>
                    <p>Bán</p>
                </div>
                <div>
                    <v-btn class="mx-5 elevation-0" fab href="https://chootc.com" target="_blank">
                        <v-icon>
                            mdi-currency-usd
                        </v-icon>
                    </v-btn>
                    <p>Tỷ giá</p>
                </div>

            </div>

            <div v-if="asset_list[0]">
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
                            <div>
                                <p class="main-color">Giá mua</p>
                                {{ formatMoney(item.buy_rate) }} ₫
                            </div>
                        </div>
                    </v-tab-item>
                    <v-tab-item>
                        <div class="asset" v-for="(item, index) in asset_list" :key="index"
                            @click="$router.push('/sell/' + item.symbol)">
                            <img :src="'/img/p2p/' + item.symbol + '.svg'" alt="" />
                            <div class="name">{{ item.symbol }}</div>
                            <v-spacer></v-spacer>
                            <div>
                                <p class="error-color">Giá bán</p>
                                {{ formatMoney(item.sell_rate) }} ₫
                            </div>
                        </div>
                    </v-tab-item>
                </v-tabs-items>
            </div>
            <div>
                <p class="faq-title">Câu hỏi thường gặp</p>
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
        </v-container>
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
                    <v-text-field v-model="current_password" filled rounded placeholder="Nhập mật khẩu cũ"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show1 = !show1"
                        :type="show1 ? 'text' : 'password'"></v-text-field>
                    <label class="mt-6">Mật khẩu mới</label>
                    <v-text-field v-model="password" filled rounded placeholder="Nhập mật khẩu mới"
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show2 = !show2"
                        :type="show2 ? 'text' : 'password'"></v-text-field>
                    <label class="mt-6">Xác nhận mật khẩu</label>
                    <v-text-field v-model="re_password" filled rounded placeholder="Xác nhận mật khẩu"
                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show3 = !show3"
                        :type="show3 ? 'text' : 'password'"></v-text-field>
                </div>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="default elevation-0" @click="dialog = false"> Hủy </v-btn>
                    <v-btn color="primary" class="elevation-0" @click="changePassword"> Xác nhận </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            dialog: false,
            tab: 0,
            interval: '',
            asset_list: [],
            current_password: "",
            password: "",
            re_password: "",
            show1: "",
            show2: "",
            show3: "",
            faq: [
                {
                    answer: 'Xác minh danh tính (KYC) để làm gì?',
                    question: 'Đối với giao dịch mua trên 2,5 triệu bạn cần KYC để chúng tôi xác minh ngân hàng bạn sử dụng là ngân hàng chính chủ. Còn đối với giao dịch bán thì bạn không cần phải KYC.'
                },
                {
                    answer: 'Thời gian xác minh KYC?',
                    question: 'Quá trình xác minh sẽ diễn ra trong khoảng 5-10 phút. Liên hệ Supporter để được duyệt nhanh hơn.'
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
        mobile() {
            return this.$vuetify.breakpoint.width < 1025
        }
    },
    mounted() {
        this.getAsset()
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
        formatMoney(value) {
            if (!value) return 0;
            return String(parseFloat(value).toFixed(0))
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
}
</script>