<template>
  <div>
    <van-nav-bar title="重置密码" left-arrow @click-left="onClickLeft" />
    <div class="rest">
      <van-field
        v-model="restData.userphone"
        clearable
        placeholder="请输入您的手机号"
        type="number"
        :left-icon="phoneIcon"
      />
      <div style="position:relative">
        <van-field
          v-model="restData.pcode"
          clearable
          type="text"
          placeholder="请输入验证码"
          :left-icon="yzIcon"
        />
        <span class="phone_code_btn" @click="getPCode()">获取</span>
      </div>
      <van-field
        v-model="restData.password"
        clearable
        type="password"
        placeholder="请输入密码（6-16位字母与数字组合）"
        :left-icon="passwordIcon"
      />
      <van-field
        v-model="restData.reppassword"
        clearable
        type="password"
        placeholder="请输入密码（6-16位字母与数字组合）"
        :left-icon="passwordIcon"
      />
      <van-button type="info" :class="isRet?'btn_info act' :'btn_info'" @click="resetPwd()">重置密码</van-button>
    </div>
  </div>
</template>

<script>
import phoneIcon from "../../assets/dianhua_icon@3x.png";
import passwordIcon from "../../assets/mima_icon@3x.png";
import scanIcon from "../../assets/saoma_icon@3x.png";
import yzIcon from "../../assets/message_icon@3x.png";
import usernameIcon from "../../assets/tuijian_icon@3x.png";
import { Button, Popup, Tab, Tabs, Field, Checkbox, NavBar } from "vant";
export default {
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Field.name]: Field,
    [Checkbox.name]: Checkbox,
    [NavBar.name]: NavBar
  },
  data() {
    return {
      restData: {
        userphone: "",
        pcode: "",
        password: "",
        reppassword: ""
      },
      phoneIcon: phoneIcon,
      passwordIcon: passwordIcon,
      scanIcon: scanIcon,
      yzIcon: yzIcon,
      usernameIcon: usernameIcon
    };
  },
  computed: {
    isRet() {
      if (
        this.restData.userphone &&
        this.restData.pcode &&
        this.restData.password &&
        this.restData.reppassword
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {},
  methods: {
    resetPwd() {
      console.log(0);
    },
    onClickLeft() {
      this.$router.push("/");
    },
    getPCode() {
      alert("code");
    }
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style lang='less' scoped>
.rest {
  margin: 0 0.5rem;
  .van-cell {
    padding: 0.26667rem 0;
    margin-bottom: 10px;
  }
}
</style>