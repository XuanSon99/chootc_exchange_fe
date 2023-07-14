<template>
  <main>
    <v-container>
      <v-card>
        <v-tabs v-model="tab" :color="tab ? 'error' : 'primary'" class="px-4 pt-4" background-color="transparent">
          <v-tab value="0">Giao dịch mua</v-tab>
          <v-tab value="1">Giao dịch bán</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card-title>
              Lịch sử giao dịch
              <v-spacer></v-spacer>
              <v-text-field v-model="buy_search" append-icon="mdi-magnify" label="Tìm kiếm" single-line
                hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="buy_headers" :items="buy_order">
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
            </v-data-table>
          </v-tab-item>
          <v-tab-item>
            <v-card-title>
              Lịch sử giao dịch
              <v-spacer></v-spacer>
              <v-text-field v-model="sell_search" append-icon="mdi-magnify" label="Tìm kiếm" single-line
                hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="sell_headers" :items="sell_order">
              <template v-slot:[`item.created_at`]="{ item }">
                {{ formatDate(item.created_at) }}
              </template>
              <template v-slot:[`item.status`]="{ item }">
                <p v-if="stateDetail(item.status)" :style="{ color: `${stateDetail(item.status).color}` }">
                  {{ stateDetail(item.status).status }}
                </p>
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
            </v-data-table>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      buy_search: '',
      sell_search: '',
      tab: 0,
      buy_headers: [
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
      ],
      buy_order: [],
      sell_headers: [
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
      ],
      sell_order: [],
      state_list: ''
    }
  },
  mounted() {
    this.getBuyOrder()
    this.getSellOrder()
    this.CallAPI("get", "states", {}, (res) => {
      this.state_list = res.data;
    });
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
  }
};
</script>