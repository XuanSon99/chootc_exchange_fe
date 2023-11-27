<template>
  <main>
    <v-container>
      <v-card>
        <v-tabs v-model="tab" :color="tab ? 'error' : 'primary'" class="px-4 pt-4" background-color="transparent">
          <v-tab value="0" @click="$router.push('/history/buy')">Giao dịch mua</v-tab>
          <v-tab value="1" @click="$router.push('/history/sell')">Giao dịch bán</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card-title>
              <span v-if="!mobile">Lịch sử giao dịch</span>
              <v-spacer v-if="!mobile"></v-spacer>
              <v-text-field v-model="buy_search" append-icon="mdi-magnify" label="Tìm kiếm" single-line
                hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="buy_order" :search="buy_search">
              <template v-slot:[`item.created_at`]="{ item }">
                {{ formatDate(item.created_at) }}
              </template>
              <template v-slot:[`item.status`]="{ item }">
                <span v-if="stateDetail(item.status)" :style="{ color: `${stateDetail(item.status).color}` }">
                  {{ stateDetail(item.status).status }}
                </span>
              </template>
              <template v-slot:[`item.money`]="{ item }">
                {{ formatMoney(item.money) }} ₫
              </template>
              <template v-slot:[`item.rate`]="{ item }">
                {{ formatMoney(item.rate) }} ₫
              </template>
              <template v-slot:[`item.amount`]="{ item }">
                {{ item.amount }} {{ item.token.toUpperCase() }}
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <v-btn color="default" @click="detailOrder(item)" small>Chi tiết</v-btn>
              </template>
            </v-data-table>
          </v-tab-item>
          <v-tab-item>
            <v-card-title>
              <span v-if="!mobile">Lịch sử giao dịch</span>
              <v-spacer v-if="!mobile"></v-spacer>
              <v-text-field v-model="sell_search" append-icon="mdi-magnify" label="Tìm kiếm" single-line
                hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="sell_order" :search="sell_search">
              <template v-slot:[`item.created_at`]="{ item }">
                {{ formatDate(item.created_at) }}
              </template>
              <template v-slot:[`item.status`]="{ item }">
                <span v-if="stateDetail(item.status)" :style="{ color: `${stateDetail(item.status).color}` }">
                  {{ stateDetail(item.status).status }}
                </span>
              </template>
              <template v-slot:[`item.rate`]="{ item }">
                {{ formatMoney(item.rate) }} ₫
              </template>
              <template v-slot:[`item.money`]="{ item }">
                {{ formatMoney(item.money) }} ₫
              </template>
              <template v-slot:[`item.amount`]="{ item }">
                {{ item.amount }} {{ item.token.toUpperCase() }}
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <v-btn color="default" @click="detailOrder(item)" small>Chi tiết</v-btn>
              </template>
            </v-data-table>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span>Chi tiết giao dịch</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <div class="pa-6">
          <v-simple-table>
            <tbody>
              <tr>
                <td>Mã giao dịch:</td>
                <td>{{ detail_order.code }}</td>
              </tr>
              <tr>
                <td style="width: 150px;">Số lượng:</td>
                <td class="upper-case">{{ detail_order.amount }} {{ detail_order.token }} ({{
                  detail_order.network
                }})</td>
              </tr>
              <tr>
                <td>Tỷ giá:</td>
                <td>{{ formatMoney(detail_order.rate) }} ₫</td>
              </tr>
              <tr>
                <td>Thành tiền:</td>
                <td>{{ formatMoney(detail_order.money) }} ₫</td>
              </tr>
              <tr>
                <td>Phí blockchain:</td>
                <td>{{ formatMoney(detail_order.fee) }} ₫</td>
              </tr>
              <tr v-if="detail_order.address">
                <td>Ví nhận:</td>
                <td>{{ detail_order.address }}</td>
              </tr>
              <tr v-if="detail_order.account_number">
                <td>Ngân hàng nhận:</td>
                <td>
                  {{ detail_order.account_number }} - {{ detail_order.bank_name }} <br>
                  {{ detail_order.owner_name }}
                </td>
              </tr>
              <tr>
                <td>Thời gian:</td>
                <td>{{ formatDate(detail_order.created_at) }}</td>
              </tr>
              <tr v-if="detail_order.description">
                <td>Mô tả:</td>
                <td>{{ detail_order.description }}</td>
              </tr>
              <tr>
                <td>Trạng thái:</td>
                <td>
                  <span v-if="stateDetail(detail_order.status)"
                    :style="{ color: `${stateDetail(detail_order.status).color}` }">
                    {{ stateDetail(detail_order.status).status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </v-card>
    </v-dialog>
  </main>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      buy_search: '',
      sell_search: '',
      tab: 0,
      headers: [
        {
          text: 'Mã giao dịch',
          value: 'code',
          sortable: false,
        },
        {
          text: 'Số lượng',
          value: 'amount',
          sortable: false,
        },
        {
          text: 'Tỷ giá',
          value: 'rate',
          sortable: false,
        },
        {
          text: 'Thành tiền',
          value: 'money',
          sortable: false,
        },
        {
          text: 'Thời gian',
          value: 'created_at',
          sortable: false,
        },
        {
          text: 'Trạng thái',
          value: 'status',
          sortable: false,
        },
        {
          text: 'Hoạt động',
          value: 'actions',
          sortable: false,
        },
      ],
      buy_order: [],
      sell_order: [],
      state_list: '',
      detail_order: '',
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.width < 1025
    }
  },
  mounted() {
    this.getBuyOrder()
    this.getSellOrder()
    this.CallAPI("get", "states", {}, (res) => {
      this.state_list = res.data;
    });
    if (this.$route.params.id == 'sell') {
      this.tab = 1
    }
    if (this.$route.params.id == 'buy') {
      this.tab = 0
    }
  },
  methods: {
    stateDetail(id) {
      if (!this.state_list) return "";
      let state = this.state_list.filter((item) => item.id == id);
      return state[0];
    },
    getBuyOrder() {
      this.CallAPI('get', 'buy-order', {}, (res) => {
        this.buy_order = res.data
      })
    },
    getSellOrder() {
      this.CallAPI('get', 'sell-order', {}, (res) => {
        this.sell_order = res.data
      })
    },
    detailOrder(item) {
      this.dialog = true
      this.detail_order = item
    },
    formatDate(date) {
      let d = new Date(date);
      return d.toLocaleString();
    },
    formatMoney(value) {
      if (!value) return 0;
      return String(parseFloat(value).toFixed(0))
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  watch: {
    '$route.params.id'() {
      if (this.$route.params.id == 'sell') {
        this.tab = 1
      }
      if (this.$route.params.id == 'buy') {
        this.tab = 0
      }
    }
  }
};
</script>