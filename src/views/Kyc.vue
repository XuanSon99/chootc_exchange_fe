<template>
  <main class="kyc">
    <section>
      <div v-if="tab == 1">
        <div class="head">
          <v-btn icon color="white" @click="$router.back()">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <span>Ảnh mặt trước CCCD</span>
        </div>
        <div class="paddin">
          <img :src="front_preview" class="image-pre" alt="">
          <image-uploader :preview="true" :className="['dp-none']" capture="camera" outputFormat="blob" :maxWidth="800"
            :maxHeight="800" :quality="0.8" id="front" @input="inputImageFront">
            <label for="front" slot="upload-label" class="btn-all mt-5">
              <span v-if="!front">Bắt đầu</span>
              <span v-else>Chụp lại</span>
            </label>
          </image-uploader>
          <div class="relative">
            <div class="btn-all outline" :class="{ disabled: !front }" @click="tab = 2">Tiếp tục</div>
          </div>
        </div>
      </div>
      <div v-if="tab == 2">
        <div class="head">
          <v-btn icon color="white" @click="tab = 1">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <span>Ảnh mặt sau CCCD</span>
        </div>
        <div class="paddin">
          <img :src="back_preview" class="image-pre" alt="">
          <image-uploader :preview="true" :className="['dp-none']" capture="camera" outputFormat="blob" :maxWidth="800"
            :maxHeight="800" :quality="0.8" id="back" @input="inputImageBack">
            <label for="back" slot="upload-label" class="btn-all mt-5">
              <span v-if="!back">Bắt đầu</span>
              <span v-else>Chụp lại</span>
            </label>
          </image-uploader>
          <div class="relative">
            <div class="btn-all outline" :class="{ disabled: !back }" @click="tab = 3">Tiếp tục</div>
          </div>
        </div>
      </div>
      <div v-if="tab == 3">
        <div class="head">
          <v-btn icon color="white" @click="tab = 2; video = ''">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <span>Video chân dung (5s)</span>
        </div>
        <div class="paddin">
          <img src="/img/portrait.png" v-if="!video" class="image-pre" alt="">
          <video id="video-preview" controls :class="{ 'dp-none': !video }" autoplay></video>
          <label for="video" class="btn-all mt-5">
            <span v-if="!video">Bắt đầu</span>
            <span v-else>Quay lại</span>
          </label>
          <input type="file" id="video" class="dp-none" @change="inputVideo" accept="video/*" capture="camcorder">
          <div class="relative">
            <div class="btn-all outline" :class="{ disabled: !video }" @click="confirm" v-if="!loading">Xác nhận</div>
            <div class="btn-all disabled outline" v-else>Loading...</div>
          </div>
        </div>
      </div>
      <div v-if="tab == 4" class="noti">
        <div class="paddin">
          <img src="/img/success.png" alt="" />
          <p>
            Chúc mừng bạn đã gửi yêu cầu xác minh danh tính (KYC) thành công!
          </p>
          <div class="text-center">
            <v-btn color="primary" to="/" outlined>Trang chủ</v-btn>
          </div>
        </div>
      </div>
      <div v-if="tab == 5" class="noti">
        <div class="paddin">
          <img src="/img/error.png" alt="" />
          <p>
            Yêu cầu KYC đã được gửi trước đó. Vui lòng liên hệ hỗ trợ để được
            thông qua!
          </p>
          <div class="text-center">
            <v-btn color="primary" to="/" outlined>Trang chủ</v-btn>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
  
<script>
import axios from 'axios';
import ImageUploader from 'vue-image-upload-resize'
export default {
  components: {
    ImageUploader
  },
  data() {
    return {
      tab: 1,
      front: "",
      back: "",
      video: "",
      ip: "",
      loading: false,
      front_preview: "/img/front.png",
      back_preview: "/img/back.png",
    }
  },
  computed: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      }
      return false
    }
  },
  mounted() {
    this.getIP()
    if (!this.isMobile) {
      this.$router.push("/error")
    }
  },
  methods: {
    inputImageFront(output) {
      this.front = output;
      this.front_preview = URL.createObjectURL(output)
    },
    inputImageBack(output) {
      this.back = output;
      this.back_preview = URL.createObjectURL(output)
    },
    inputVideo(e) {
      var files = e.target.files;
      this.video = files[0]
      let video = document.getElementById('video-preview');
      let reader = new FileReader();

      reader.readAsDataURL(this.video);
      reader.addEventListener('load', function () {
        video.src = reader.result;
      });
    },
    confirm() {
      this.loading = true;

      var formData = new FormData();
      formData.append("phone", this.$route.params.id);
      formData.append("ip", this.ip);
      formData.append("front_photo", this.front);
      formData.append("back_photo", this.back);
      formData.append("portrait_video", this.video);

      this.CallAPI(
        "post",
        "add-verify",
        formData,
        (res) => {
          this.tab = 4;
        },
        (err) => {
          this.tab = 5;
        }
      );
    },
    validatePhone(phone) {
      var re = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
      return re.test(phone);
    },
    getIP() {
      axios.get("https://www.cloudflare.com/cdn-cgi/trace").then((res) => {
        const data = res.data
          .trim()
          .split("\n")
          .reduce(function (obj, pair) {
            pair = pair.split("=");
            return (obj[pair[0]] = pair[1]), obj;
          }, {});
        this.ip = data.ip;
      });
    },
  },

};
</script>