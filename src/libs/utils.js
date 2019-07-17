/**
 * 工具类
 */
import Vue from 'vue';
import CryptoJS from 'crypto-js'
let pk="-----BEGIN PUBLIC KEY-----\n" +
"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD3XSdz1MnzazBEN5KOfTx0IyVJ\n" +
"Z5wb57isrCuHDhnYXwtmdhQalgII0fozeeFpMpAvlnmHC1kpW7XVGvZnLx3bWbCE\n" +
"bf+pMSW4kmQuI+5cxRUJbCl7sdaODBrINgERHPICVC18AJLThEVMHyjuR6Jn4zQm\n" +
"yYNbReSktY/BrFTvMQIDAQAB\n" +
"-----END PUBLIC KEY-----";
export default {
  encrypt(word, keyStr,ivStr){ 
    keyStr = keyStr ? keyStr : 'talkingdata-2018';
    ivStr = ivStr ? ivStr : 'talkingdata-scip';
    var key  = CryptoJS.enc.Utf8.parse(keyStr);
    var iv  = CryptoJS.enc.Utf8.parse(ivStr);
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.TripleDES.encrypt(srcs, key, {iv:iv,mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});

    // var encrypted = CryptoJS.AES.encrypt(srcs, key, {iv:iv,mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.ZeroPadding});
    return encrypted.toString();
  },

  decrypt(word, keyStr,ivStr){  
    keyStr = keyStr ? keyStr : 'talkingdata-2018';
    ivStr = ivStr ? ivStr : 'talkingdata-scip';
    var key  = CryptoJS.enc.Utf8.parse(keyStr);//Latin1 w8m31+Yy/Nw6thPsMpO5fg==
    var iv  = CryptoJS.enc.Utf8.parse(ivStr);
    var decrypt = CryptoJS.TripleDES.decrypt(word, key, {iv:iv,mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});

    // var decrypt = CryptoJS.AES.decrypt(word, key, {iv:iv,mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.ZeroPadding});
    return JSON.parse(CryptoJS.enc.Utf8.stringify(decrypt).toString());
  },
  // 加签(用自己的私钥对signData进行签名)
  signature (signData) {
    // 私钥加签
    let signPrivateKey = '-----BEGIN PRIVATE KEY-----123456-----END PRIVATE KEY-----';
    let sig = new KJUR.crypto.Signature({"alg": "SHA1withRSA", "prov": "cryptojs/jsrsa","prvkeypem": signPrivateKey});
    // let rsa = new KJUR()
    // rsa = KEYUTIL.getKey(pk)
    var hashAlg = 'sha1'; // 设置sha1
    var sign = sig.signString(signData, hashAlg); // 加签
    sign = hex2b64(sign);
    console.log(sign)
    return sign;
  },
  
  // 验签 用公钥对签名进行验签
  verify (signData, data) {
    // signData: 加签的数据
    // data: 加签之后得到的签文
    try {
      let signPublicKey = '-----BEGIN PUBLIC KEY-----这里是公钥-----END PUBLIC KEY-----';
      let sig = new KJUR.crypto.Signature({"alg": "SHA1withRSA", "prov": "cryptojs/jsrsa","prvkeypem": signPublicKey});
      sig.updateString(signData);
      let result = sig.verify(data);
      console.log(result)
      return result;
    } catch(e) {
      console.error(e);
    }
  },

  browser() {
    let u = navigator.userAgent;
    return {
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
      iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
      qq: u.match(/\sQQ/i) == " qq" //是否QQ
    };
  },
}