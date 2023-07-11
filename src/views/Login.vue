<template>
    <main>
        <v-container>
            <v-row>
                <v-col cols="12" md="8">
                    <div class="system mx-6">
                        <h1>Đăng nhập</h1>
                        <v-form v-model="valid" ref="form" lazy-validation>
                            <label>Số điện thoại</label>
                            <v-text-field v-model="phone" type="number" prepend-inner-icon="mdi-account-outline"
                                :rules="[rules.required, rules.phone, rules.not_exists]" @input="rules.not_exists = true"
                                outlined required placeholder="Nhập số điện thoại"></v-text-field>
                            <label>Mật khẩu</label>
                            <v-text-field v-model="password" :type="show_pass ? 'text' : 'password'"
                                :rules="[rules.required, rules.password, rules.invalid]" @input="rules.invalid = true"
                                prepend-inner-icon="mdi-lock" :append-icon="show_pass ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="show_pass = !show_pass" outlined placeholder="Nhập mật khẩu"></v-text-field>
                            <v-btn color="primary" block x-large @click="loginHandle" :disabled="!valid">Đăng nhập</v-btn>
                            <div class="mt-3 create-account">
                                Chưa có tài khoản?
                                <span @click="$router.push('register')">Đăng ký ngay</span>
                            </div>
                        </v-form>
                    </div>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card>
                        <div class="px-6 py-5 title d-flex align-center">
                            <v-icon color="primary" class="mr-1">mdi-chart-box-outline </v-icon>
                            <span>Tỷ giá trực tuyến</span>
                        </div>
                        <v-divider></v-divider>
                        <div class="pa-6">
                            <v-tabs v-model="tab" :color="tab ? 'error' : 'primary'" fixed-tabs
                                background-color="transparent">
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
    </main>
</template>
  
<script>
export default {
    data() {
        return {
            tab: 0,
            asset_list: '',
            interval: '',
            show_pass: false,
            valid: false,
            phone: '',
            password: '',
            rules: {
                required: v => !!v || 'Không được bỏ trống',
                phone: v => /(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(v) || 'Số điện thoại không hợp lệ',
                password: v => (v && v.length >= 6) || 'Mật khẩu tối thiểu 6 ký tự',
                not_exists: true,
                invalid: true
            }
        }
    },
    mounted() {
        this.getAsset()
    },
    methods: {
        loginHandle() {
            this.$refs.form.validate()
            if (!this.phone || !this.password) return
            let data = {
                phone: this.phone,
                password: this.password
            }
            this.CallAPI("post", "auth/login", data, (res) => {
                localStorage.setItem("access_token", res.data.access_token);
                this.$router.push("/");
                this.getProfile()
            }, (err) => {
                if (err.response.status == 400) {
                    this.rules.not_exists = err.response.data.message[0]
                    return
                }
                this.rules.invalid = err.response.data.message[0]
            })
        },
        getProfile() {
            this.CallAPI("get", "profile", {}, (res) => {
                this.$store.dispatch('setAccount', res.data.phone)
            }, (err) => localStorage.clear())
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
        formatMoney(value) {
            if (!value) return 0;
            return String(parseFloat(value).toFixed(0))
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        dynamicNum(number) {
            let num = String(number)
            let n = num.length < 8 ? this.randomNum(1, 3) : this.randomNum(2, 4)
            let result = num.slice(0, -n - 1);
            return result + this.randomNum(Math.pow(10, n), 9 * Math.pow(10, n))
        },
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
};
</script>