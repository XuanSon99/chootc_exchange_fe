<template>
    <main class="pc">
        <section>
            <span class="main-color">Vui lòng truy cập link bên dưới bằng thiết bị di động!</span>
            <v-text-field class="mt-3" :value="kyc_link" outlined readonly append-icon="mdi-content-copy"
                @click:append="copyText" @click="$router.push('/kyc/' + account.phone)"></v-text-field>
            <div class="text-center">
                <vue-qr :text="kyc_link" size="235"></vue-qr>
                <div>Quét mã QR để truy cập nhanh</div>
            </div>
        </section>
    </main>
</template>
<script>
import { mapGetters } from "vuex";
import VueQr from 'vue-qr'

export default {
    components: { VueQr },
    computed: {
        ...mapGetters(["account"]),
        kyc_link() {
            return `https://muabanusdt.xyz/kyc/${this.account.phone}`
        }
    },
    methods: {
        copyText() {
            this.$toast.success('Copy thành công')
            navigator.clipboard.writeText(this.kyc_link);
        },
    }
}
</script>