<template>
    <main class="pt-0">
        <v-list-item class="py-2 px-6" two-line>
            <v-list-item-avatar>
                <v-avatar>
                    <v-icon size="50" color="#424242">
                        mdi-account-circle
                    </v-icon>
                </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{ account.phone }}</v-list-item-title>
                <v-list-item-subtitle v-if="account.name">{{ account.name }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list class="pl-2">
            <v-list-item-group>
                <v-list-item :to="`/kyc/${this.account.phone}`" v-if="!account.verify">
                    <v-list-item-icon>
                        <v-icon color="primary">mdi-account-check-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Xác minh danh tính</v-list-item-title>
                    </v-list-item-content>
                    <v-icon>mdi-chevron-right</v-icon>
                </v-list-item>
                <v-list-item v-for="item in items" :key="item.title" :to="item.route" v-show="item.route">
                    <v-list-item-icon>
                        <v-icon color="primary">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                    <v-icon>mdi-chevron-right</v-icon>
                </v-list-item>
                <v-list-item v-for="item in items" :key="item.title" :href="item.href" target="_blank" v-show="item.href">
                    <v-list-item-icon>
                        <v-icon color="primary">{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                    <v-icon>mdi-chevron-right</v-icon>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <div class="px-6">
            <v-btn block outlined @click="logout">Đăng xuất</v-btn>
        </div>
    </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {}
    },
    computed: {
        ...mapGetters(["account"]),
        items() {
            return [
                { title: 'Thông tin cá nhân', icon: 'mdi-account-circle-outline', route: "/profile" },
                { title: 'Chương trình giới thiệu', icon: 'mdi-account-multiple-outline', route: "/referral" },
                { title: 'Hướng dẫn giao dịch', icon: 'mdi-bookmark-multiple-outline', href: "https://chootc.gitbook.io/exchange/huong-dan/mua-tien-dien-tu" },
                { title: 'Hỗ trợ trực tuyến', icon: 'mdi-headphones', href: "https://t.me/ChoOTCVN_support" },
            ]
        }
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$store.dispatch('setAccount', '')
            this.$router.push("/login")
        },
    }
}
</script>