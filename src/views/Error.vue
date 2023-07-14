<template>
    <main class="pc">
        <section>
            <span>Vui lòng truy cập link bên dưới bằng thiết bị di động!</span>
            <v-text-field class="mt-3" :value="kyc_link" outlined readonly append-icon="mdi-content-copy"
                @click:append="copyText" @click="$router.push('/kyc/' + account.phone)"></v-text-field>
        </section>
    </main>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["account"]),
        kyc_link() {
            return `https://exchange.chootc.com/kyc/${this.account.phone}`
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