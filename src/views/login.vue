<template>
<div class=''>
   
    <button @click="login()"></button>
</div>
</template>

<script>
import { Button } from 'vant';
import CryptoJS from '../libs/utils'


let  data = {
          useraccount: '13798367807',
          loginPwd: 'qqq111',
          loginType: 1
}
let str='Cr'
let encryptdata=CryptoJS.encrypt(JSON.stringify(data))
console.log('加密',encryptdata);

let decryptdata=CryptoJS.decrypt(encryptdata);
console.log('解密',decryptdata);


let signatureData=CryptoJS.signature(encryptdata);
console.log('加签',signatureData);

let verifyData=CryptoJS.verify(encryptdata,signatureData);
console.log('验签',verifyData);




export default {
components: {
     [Button.name]: Button,
},
data() {
return {

};
},
computed: {},
watch: {},
methods: {
   async login(){
      try {
      const res = await this.post({
        url: this.api.login,
        data: {
          useraccount: '13798367807',
          loginPwd: 'qqq111',
          loginType: 1
        }
      })
      console.log('resresresres',res)
      if (res.retMsg == '成功') {
        localStorage.setItem('token', res.data.token)
       this.$router.push('/home')
      }
    } catch (error) {
      console.log(error)
    }
    }
},
created() {

},
mounted() {

},
beforeCreate() {},
beforeMount() {}, 
beforeUpdate() {}, 
updated() {}, 
beforeDestroy() {}, 
destroyed() {}, 
activated() {}, 
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

</style>