<template>
    <main class="pt-0">
        <v-container v-if="mobile" class="pt-80">
            <div class="notification" v-if="notifications[0]">
                <div :class="{ item: true, unread: item.is_readed ? false : true }" v-for="(item, index) in notifications"
                    :key="index" @click="readNoti(item, index)">
                    <v-icon size="35" :color="item.color">mdi-bell-circle</v-icon>
                    <div class="content ml-3">
                        <span>{{ item.content }}</span>
                        <div class="time mt-1">{{ formatDate(item.created_at) }}</div>
                    </div>
                </div>
            </div>
        </v-container>
    </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["account", "notifications", "noti_count"]),
        mobile() {
            return this.$vuetify.breakpoint.width < 1025
        }
    },
    methods: {
        getNotification() {
            this.CallAPI("get", "notifications", {}, (res) => {
                this.$store.dispatch('setNotifications', res.data)
            })
        },
        getAmountNoti() {
            if (!this.account) return
            this.CallAPI("get", "count-noti", {}, (res) => {
                if (this.noti_count < res.data || !this.notifications[0]) {
                    this.getNotification()
                }
                this.$store.dispatch('setNotiCount', res.data)
            })
        },
        readNoti(item, index) {
            if (item.url) {
                this.$router.push(item.url)
            }
            if (item.is_readed) return
            this.CallAPI("put", "read-noti", { id: item.id }, (res) => {
                this.getAmountNoti()
                this.notifications[index].is_readed = 1
            })
        },
        readAll() {
            this.CallAPI("get", "read-all", {}, (res) => {
                this.getAmountNoti()
            })
        },
        formatDate(date) {
            let d = new Date(date);
            return d.toLocaleString();
        },
    },
}
</script>