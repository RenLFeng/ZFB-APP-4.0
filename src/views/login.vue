<template>
  <div class="login_page">
    <div class="title-iconBar">
      <img class="logo" src="../assets/login_logo@3x.png" alt />
      <van-tabs v-model="active">
        <van-tab title="登录">
          <van-cell-group>
            <van-field
              v-model="loginData.username"
              clearable
              type="number"
              placeholder="请输入您的手机号"
              :left-icon="phoneIcon"
            />
            <van-field
              v-model="loginData.password"
              clearable
              type="password"
              placeholder="请输入密码（6-16位字母与数字组合）"
              :left-icon="passwordIcon"
            />
          </van-cell-group>
          <van-button type="info" :class="isLogin?'btn_info act' :'btn_info'" @click="login()">登录</van-button>
          <p class="Forget_psd" @click="Forget_psd">忘记密码</p>
        </van-tab>

        <van-tab title="注册">
          <van-cell-group>
            <van-field
              v-model="regData.username"
              clearable
              placeholder="请输入您的手机号"
              type="number"
              :left-icon="phoneIcon"
            />
            <div style="position:relative">
              <van-field
                v-model="regData.phoneCode"
                clearable
                type="text"
                placeholder="请输入验证码"
                :left-icon="yzIcon"
              />
              <span class="phone_code_btn" @click="getPCode()">获取</span>
            </div>

            <van-field
              v-model="regData.password"
              clearable
              type="password"
              placeholder="请输入密码（6-16位字母与数字组合）"
              :left-icon="passwordIcon"
            />
            <van-field
              v-model="regData.reppassword"
              clearable
              type="password"
              placeholder="请确认密码"
              :left-icon="passwordIcon"
            />
            <van-field
              v-model="regData.scanCode"
              clearable
              type="text"
              placeholder="请输入推荐码"
              :left-icon="usernameIcon"
              :right-icon="scanIcon"
              @click-right-icon="openBarcodeCustom()"
            />
          </van-cell-group>
          <p class="Agreement">
            <van-checkbox v-model="regData.checked">
              我已阅读并同意
              <router-link to="home">《用户协议》</router-link>
            </van-checkbox>
          </p>
          <van-button type="info" :class="isReg?'btn_info act' :'btn_info'" click="login">注册</van-button>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import phoneIcon from "../assets/dianhua_icon@3x.png";
import passwordIcon from "../assets/mima_icon@3x.png";
import scanIcon from "../assets/saoma_icon@3x.png";
import yzIcon from "../assets/message_icon@3x.png";
import usernameIcon from "../assets/tuijian_icon@3x.png";

import { Button, Popup, Tab, Tabs, Field, Checkbox, NavBar } from "vant";
import { access } from "fs";
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
      loginState: false,
      rsgState: false,
      loginData: {
        username: "",
        password: ""
      },
      regData: {
        checked: false,
        username: "",
        phoneCode: "",
        password: "",
        reppassword: "",
        scanCode: window.sessionStorage.getItem('scanCode') || ''
      },
      active: 0,
      show: false,
      phoneIcon: phoneIcon,
      passwordIcon: passwordIcon,
      scanIcon: scanIcon,
      yzIcon: yzIcon,
      usernameIcon: usernameIcon
    };
  },
  computed: {
    isLogin() {
      if (this.loginData.username && this.loginData.password) {
        return true;
      } else {
        return false;
      }
    },
    isReg() {
      if (
        this.regData.checked &&
        this.regData.username &&
        this.regData.phoneCode &&
        this.regData.password &&
        this.regData.reppassword &&
        this.regData.scanCode
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
        $route( to , from ){     
              console.log( to , from )
         }
  },
  methods: {
    getPCode() {
      alert("code");
    },
    Forget_psd() {
      this.$router.push({
        path: "ForgetPwd",
        goBack: this.goBack
      });
    },
    scan() {
      alert("sm");
    },
    goBack() {
     
    },
    login() {
      alert(this.isLogin);
    },
    reg() {
      alert(this.isReg);
    },
    openBarcodeCustom() {
				createWithoutTitle("scan.html", {
					titleNView: {
						type: 'float',
						backgroundColor: '#009DE2',
						titleText: '扫一扫',
						titleColor: '#FFFFFF',
						autoBackButton: true
					}
				});
			}
  },
  created() {},
  mounted() {
            if (window.plus) {
  plus.navigator.setStatusBarBackground("#009DE2");
} else {
  document.addEventListener(
    "plusready",
    function() {
      plus.navigator.setStatusBarBackground("#009DE2");
    },
    false
  );
}
// alert(window.sessionStorage.getItem('scanCode'))
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style lang='less'>
.login_page {
  .van-cell {
    padding: 0.26667rem 0;
    margin-bottom: 10px;
  }
  .title-iconBar {
    [class*="van-hairline"]::after {
      border: none;
    }
    margin: 2rem 0.5rem 0;
    text-align: center;
    img.logo {
      width: 65%;
    }
    .van-tabs__line {
      background-color: #0075c1;
    }
    .van-tabs__content {
      margin-top: 1rem;
    }
  }
  .Forget_psd {
    text-align: center;
    font-size: 0.3rem;
  }
  .Agreement {
    font-size: 0.3rem;
    text-align: left;
    .van-checkbox__icon--round .van-icon {
      border-radius: 4px;
    }
    a {
      color: #0075c1;
    }
  }
}
</style>