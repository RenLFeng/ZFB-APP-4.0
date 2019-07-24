<template>
  <div class="home_page">
    <div class="title">
      <div class="container">
        <img class="user_logo" src="http://localhost:8089/img/img.146655c9.jpg" alt />
        <p class="user_name">{{userName}}</p>
      </div>
    </div>
    <div class="allItem_list_container">
      <ul class="repayment item_list">
        <li class="item">
          <img class src="../assets/home/homepage_huankuan_icon.png" alt />
          <div>
            <p class="font_tit">还款</p>
            <p class="font_item">AI智能 账单无忧</p>
          </div>
        </li>
        <li class="item">
          <img class src="../assets/home/homepage_shoukuan_icon.png" alt />
          <div>
            <p class="font_tit">收款</p>
            <p class="font_item">落地商户 笔笔积分</p>
          </div>
        </li>
      </ul>

      <div class="info_warn_container items">
        <p class="info_tit_pic">
          <img src="../assets/home/homepage_biaoti01.png" alt />
        </p>
        <van-swipe :autoplay="300000000" indicator-color="#0075C1" loop="false">
          <van-swipe-item class="item_list">
            <div class="item">
              <img class src="../assets/home/homepage_huankuan_icon.png" alt />
              <div>
                <p class="font_tit">还款</p>
                <p class="font_item">AI智能 账单无忧</p>
                          
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item class="item_list">
            <div class="item">
              <img class src="../assets/home/homepage_shoukuan_icon.png" alt />
              <div>
                <p class="font_tit">还款</p>
                <p class="font_item">AI智能 账单无忧</p>
                           
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
  </div>
</template>

<script>
import { Swipe, SwipeItem, Button,Icon  } from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Button.name]: Button,
    [Icon.name]: Icon
  },
  data() {
    return {
      userName: "Hello,王某某"
    };
  },
  computed: {},
  watch: {},
  methods: {},
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
.home_page {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  .title {
    width: 100%;
    height: 6rem;
    color: #fff;
    text-align: left;
    padding-top: 30px;
    background: url("../assets/home/homepage_banner.png") no-repeat;
    background-size: 100%;
    .container {
      padding: 0 10px;
      .user_logo {
        width: 1.5rem;
        border-radius: 50%;
        .user_name {
          font-weight: bolder;
        }
      }
    }
  }
  .allItem_list_container {
    padding: 0 10px;
    text-align: left;
    position: relative;
    top: -100px;
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
