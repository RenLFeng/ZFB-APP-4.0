<template>
<div class=''>
   
    <button @click="login()">login</button>
</div>
</template>

<script>
import { Button } from 'vant';
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
       alert(0)
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