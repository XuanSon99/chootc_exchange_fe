import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);
const opts = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#01c77d"
      }
    },
  },
  options: {
    customProperties: true
  },
  icons: {
    iconfont: "mdi"
  }
};

export default new Vuetify(opts); 