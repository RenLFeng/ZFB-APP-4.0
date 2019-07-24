<template>
     <div class="scan">
		  <van-nav-bar title="扫一扫" left-arrow @click-left="onClickLeft"/>
            <div id="bcid">
				<div style="height:40%"></div>
				<p class="tip">...载入中...</p>
            </div>
  </div>
</template>
<script type='text/ecmascript-6'>
import { NavBar } from "vant";
let scan = null
  export default {
	components: {
    	[NavBar.name]: NavBar
  },
    data () {
      return {
        codeUrl: '',
        isScan:false
      }
    },
    methods: {
		onClickLeft() {
		this.closeScan();
       this.$router.push({
        path: "/",
      });
    },
      // 创建扫描控件
      startRecognize () {
        let that = this
        if (!window.plus) return;
        if(that.isScan)return;
        that.isScan=true;
        scan = new plus.barcode.Barcode('bcid');
        that.startScan();
        scan.onmarked = onmarked

        function onmarked (type, result, file) {
          switch (type) {
            case plus.barcode.QR:
              type = 'QR'
              break
            case plus.barcode.EAN13:
              type = 'EAN13'
              break
            case plus.barcode.EAN8:
              type = 'EAN8'
              break
            default:
              type = '其它' + type
              break
          }
          result = result.replace(/\n/g, '')
          that.codeUrl = result
		  let scanCode={'reg':1,'result':result}
		  window.sessionStorage.setItem('scanCode',JSON.stringify(scanCode));
			that.$router.push({path: "/",});
		  that.closeScan();
        }
      },
      // 开始扫描
      startScan () {
        if (!window.plus) return
        scan.start()
      },
      // 关闭扫描
      cancelScan () {
        if (!window.plus) return
        scan.cancel()
      },
      // 关闭条码识别控件
      closeScan () {
        if (!window.plus) return
        scan.close();
        this.isScan=false;
      },
	},
	  mounted() {
		  this.startRecognize();
	  }
  }
</script>
<style lang="less">
  .scan {
    height: 100vh;
	width: 100vw;
    #bcid {
	  width: 100%;
	  height: 100%;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 3rem;
      text-align: center;
      color: #fff;
      background: #000;
    }
	.van-nav-bar .van-icon{
		color: #000;
	}
  }
</style>
