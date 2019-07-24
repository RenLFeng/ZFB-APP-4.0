<template>
  <div class="login_page">
    <div class="title-iconBar">
      <img class="logo" src="../assets/login_logo@3x.png" alt />
      <van-tabs v-model="active">
        <van-tab title="登录">
          <!-- <van-cell-group> -->
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
          <!-- </van-cell-group> -->
          <van-button type="info" :class="isLogin?'btn_info act' :'btn_info'" @click="login()">登录</van-button>
          <p class="Forget_psd" @click="ForgetPsd()">忘记密码</p>
        </van-tab>

        <van-tab title="注册">
          <!-- <van-cell-group> -->
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
              @click-right-icon="scan()"
            />
          <!-- </van-cell-group> -->
          <p class="Agreement">
            <van-checkbox v-model="regData.checked">
              我已阅读并同意
              <router-link to="index">《用户协议》</router-link>
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
      loginData: {
        username: '',
        password: ''
      },
      regData: {
        checked: false,
        username: '',
        phoneCode: '',
        password: '',
        reppassword: '',
        scanCode:''
      },
      active: 0,
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
  },
  methods: {
    getPCode() {
      alert("code");
    },
    ForgetPsd() {
      this.$router.push({
        path: "ForgetPwd",
        goBack: this.goBack
      });
    },
    scan() {
       this.$router.push({
        path: "scan",
      });
    },
    goBack() {
     
    },
    async login(){
        if(!this.isLogin){
            this.Toast('请将登录信息填写完整');
            return;
        }
      try {
      const res = await this.post({
        url: this.api.login,
        data: {
          useraccount:this.loginData.username,
          loginPwd: this.loginData.password,
          loginType: 1
        },
      })
      console.log('resresresres',res)
      if (res.retMsg == '成功') {
        localStorage.setItem('token', res.data.token);
        this.Toast.success(res.retMsg);
      }
    } catch (error) {
      console.log(error)
    }
    },
    reg() {
      alert(this.isReg);
    },
  },
  created() {
      let scanCode=JSON.parse(window.sessionStorage.getItem('scanCode'));
      if(scanCode){
        this.active=scanCode.reg || 0;
        this.regData.scanCode=scanCode.result || '';
      }
  },
  mounted() {
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
      .van-tab span{
          font-size: 0.5rem;
      }
    [class*="van-hairline"]::after {
      border: none;
    }
    margin: 2rem 0.5rem 0;
    text-align: center;
    img.logo {
      width: 60%;
    }
    .van-tabs__line {
      background-color: #0075c1;
    }
    .van-tabs__content {
      margin-top: 0.8rem;
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
  .border{
      position: absolute;
      width: 100%;
      height: 2px;
      background: #666;
      left: 0;
      bottom: 0;
  }


}
</style>