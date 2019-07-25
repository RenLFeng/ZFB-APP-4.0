<template>
  <div class="home_page">
    <div class="user_info">
      <div class="container">
        <div>
          <img class="user_logo" :src="user_logo" alt @click="showSlideFn()" />
          <ul class="user_info_pic">
            <li>
              <img src="../assets/home/homepage_sbgl_icon@2x.png" alt />
              <p>设备管理</p>
            </li>
            <li>
              <img src="../assets/home/homepage_wdyj_icon@2x.png" alt />
              <p>我的业绩</p>
            </li>
            <li>
              <img src="../assets/home/homepage_wdtd_icon@2x.png" alt />
              <p>我的团队</p>
            </li>
          </ul>
        </div>
        <p class="user_name">{{userName}}</p>
      </div>
    </div>
    <div class="allItem_list_container">
      <ul class="repayment item_list">
        <li class="item">
          <img class src="../assets/home/homepage_huankuan_icon.png" alt />
          <div>
            <p class="font_tit font_weight">还款</p>
            <p class="font_item">AI智能 账单无忧</p>
          </div>
        </li>
        <li class="item">
          <img class src="../assets/home/homepage_shoukuan_icon.png" alt />
          <div>
            <p class="font_tit font_weight">收款</p>
            <p class="font_item">落地商户 笔笔积分</p>
          </div>
        </li>
      </ul>

      <div class="info_warn_container items">
        <p class="info_tit_pic">
          <img src="../assets/home/homepage_biaoti01.png" alt />
        </p>
        <van-swipe :autoplay="3000" indicator-color="#0075C1">
          <van-swipe-item class="item_list">
            <div class="item">
              <img class src="../assets/home/homepage_xiaoxitixing_img@2x.png" alt />
              <div>
                <p class="font_tit font_weight">您还未绑定信用卡</p>
                <p class="font_item">完成绑定信用卡后即可体验还款和收款</p>
                <span class="go">去绑卡 &nbsp;></span>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item class="item_list">
            <div class="item">
              <img class src="../assets/home/homepage_xiaoxitixing_img@2x.png" alt />
              <div>
                <p class="font_tit font_weight">您还未绑定信用卡</p>
                <p class="font_item">完成绑定信用卡后即可体验还款和收款</p>
                <span class="go">去绑卡 &nbsp;></span>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="Activity_container items">
        <p class="info_tit_pic">
          <img src="../assets/home/homepage_biaoti02.png" alt />
        </p>
        <ul class>
          <li>
            <img src="../assets/home/homepage_kthhr_img.png" alt />
            <span class="btn_m btn" plain hairline type="primary">立即开通</span>
          </li>
          <li>
            <img src="../assets/home/homepage_hqzfb_img.png" alt />
            <span class="btn_m btn" plain hairline type="primary">立即申请</span>
          </li>
          <li>
            <img src="../assets/home/homepage_xykcp_img.png" alt />
            <span class="btn_m btn" plain hairline type="primary">立即评测</span>
          </li>
        </ul>
      </div>
    </div>
    <van-overlay ref="overlay" :show="showoverlay" @click="hideSlideFn()"  />
    <aside :class="showoverlay?'act':''">
      <header>
        <img class="user_logo" :src="user_logo" alt />
        <p class="user_name">{{userName}}</p>
        <p class="user_type">
          <span>
            <img src="../assets/center/my_vip_hui@2x.png" alt />
          </span>
          <span class="span1">
            <img src="../assets/center/my_hehuoren_hui@2x.png" alt />
          </span>
        </p>
      </header>
      <ul class="ceter_item_list">
        <li class="font_3">
          <img src="../assets/center/my_zhanghu_icon@2x.png" alt />
          账户收益
        </li>
        <li class="font_3">
          <img src="../assets/center/my_anquan_icon@2x.png" alt />
          安全保障
        </li>
        <li class="font_3">
          <img src="../assets/center/my_ka_icon@2x.png" alt />
          信用卡
        </li>
         <li class="font_3">
          <img src="../assets/center/my_ka_icon@2x.png" alt />
          结算卡
        </li>
      </ul>
       <ul class="ceter_item_list border_top">
          <li class="font_3">
            <img src="../assets/center/my_shebei_icon@2x.png" alt />
            我的设备
          </li>
          <li class="font_3">
            <img src="../assets/center/my_dingdan_icon@2x.png" alt />
            我的订单
          </li>
          <li class="font_3">
            <img src="../assets/center/my_vip_icon@2x.png" alt />
            VIP订单
          </li>
        </ul>

         <ul class="ceter_item_list border_top">
          <li class="font_3">
            <img src="../assets/center/my_tuijianhaoyou_icon@2x.png" alt />
            推荐好友
          </li>
          <li class="font_3">
            <img src="../assets/center/my_tuijianren_icon@2x.png" alt />
            我的订推荐人单
          </li>
        </ul>
        <ul class="pic_list">
            <li>
              <img src="../assets/center/my_kefu_icon@2x.png" alt />
              <p>联系客服</p>
            </li>
            <li>
              <img src="../assets/center/my_wenti_icon@2x.png" alt />
              <p>常见问题</p>
            </li>
            <li>
              <img src="../assets/center/my_shezhi_icon@2x.png" alt />
              <p>设置</p>
            </li>
          </ul>
    </aside>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Button, Icon, Overlay} from "vant";
import user_logo from "../assets/tx.png";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Overlay.name]: Overlay,
  },
  data() {
    return {
      user_logo: user_logo,
      userName: "Hello,王某某",
      showoverlay: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    showSlideFn() {
      this.$refs.overlay.style.display = "block";
      this.showoverlay = true;
    },
    hideSlideFn() {
      this.$refs.overlay.style.display = "none";
      this.showoverlay = false;
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
aside {
  position: fixed;
  width: 60%;
  height: auto;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  left: -70%;
  top: 20px;
  background: #fff;
  transition: left 0.3s;
  padding: 0 5%;
  header {
    padding-top: 40px;
    .user_logo {
      width: 1.5rem;
      border-radius: 50%;
    }
    .user_name {
      font-weight: bolder;
      font-size: 0.58rem;
      color: #000;
    }
    .user_type {
        margin-top:10px;
      span {
        display: inline-block;
        width: 40%;
        img {
          width: 1.53rem;
        }
        &.span1 {
          img {
            width: 2rem;
          }
        }
      }
    }
  }
  .ceter_item_list {
    li {
      text-align: left;
      margin: 0.5rem 0;
      img {
          display: inline-block;
        width: 0.4rem;
        margin-right: 0.4rem;
      }
    }
  }
     .pic_list{
         float:none;
        li{
         width: 28%;
            img{
           width: 0.85rem;
        }
        }
    }
}
aside.act {
  left: 0;
}
.home_page {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  .user_info {
    width: 100%;
    height: 6rem;
    color: #fff;
    text-align: left;
    padding-top: 0.5rem;
    background: url("../assets/home/homepage_banner.png") no-repeat;
    background-size: 100%;
    .container {
      padding: 0 10px;
      .user_logo {
        width: 1.5rem;
        border-radius: 50%;
        .user_name {
          font-weight: bolder;
          font-size: 0.58rem;
        }
      }
      .user_info_pic {
        float: right;
        text-align: center;
        font-size: 0.3rem;
        padding-top: 5px;
        li {
          display: inline-block;
          margin: 0 5px;
          img {
            width: 0.5rem;
          }
        }
      }
    }
  }
  .allItem_list_container {
    padding: 0 10px;
    text-align: left;
    position: relative;
    top: -2.86667rem;
    .info_tit_pic {
      text-indent: 0.06667rem;
      img {
        width: 50%;
      }
    }
    .items {
      margin-top: 20px;
    }
    .repayment {
    }
    .info_warn_container {
      .van-swipe {
        box-shadow: 0px 0px 8px 0px rgba(0, 117, 193, 0.26);
        border-radius: 10px;
        .item_list {
          padding: 0.32rem 0;
          .item {
            width: 82%;
            padding-left: 20%;
            img {
              left: 9%;
              width: 1.8rem;
              top: 55%;
            }
            > div {
              position: relative;
              .go {
                position: absolute;
                top: 50%;
                right: 15px;
                transform: translate(0 -50%);
                color: #0075c1;
                font-size: 0.3rem;
              }
            }
          }
        }
      }
    }
    .Activity_container {
      .info_tit_pic {
        text-indent: 0.16667rem;
        img {
          width: 60%;
        }
      }
      li {
        position: relative;
        width: 100%;
        height: 4rem;
        img {
          width: 100%;
        }
        .btn {
          position: absolute;
          width: 2.63rem;
          height: 0.75rem;
          left: 0.66667rem;
          bottom: 0.66667rem;
          color: #fff;
          border: 0.02667rem solid #fff;
          border-radius: 0.8rem;
          font-size: 0.4rem;
          line-height: 0.75rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
