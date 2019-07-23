/**
 * 工具类
 */
// 公钥
let pk="-----BEGIN PUBLIC KEY-----\n" +
"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD3XSdz1MnzazBEN5KOfTx0IyVJ\n" +
"Z5wb57isrCuHDhnYXwtmdhQalgII0fozeeFpMpAvlnmHC1kpW7XVGvZnLx3bWbCE\n" +
"bf+pMSW4kmQuI+5cxRUJbCl7sdaODBrINgERHPICVC18AJLThEVMHyjuR6Jn4zQm\n" +
"yYNbReSktY/BrFTvMQIDAQAB\n" +
"-----END PUBLIC KEY-----";
// 私钥
let priK = "-----BEGIN PRIVATE KEY-----\n" +
"MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAPddJ3PUyfNrMEQ3\n" +
"ko59PHQjJUlnnBvnuKysK4cOGdhfC2Z2FBqWAgjR+jN54WkykC+WeYcLWSlbtdUa\n" +
"9mcvHdtZsIRt/6kxJbiSZC4j7lzFFQlsKXux1o4MGsg2AREc8gJULXwAktOERUwf\n" +
"KO5HomfjNCbJg1tF5KS1j8GsVO8xAgMBAAECgYEA6eG1JMrj63jEmStmMb1txG1a\n" +
"mu4Q5z2QGgtr2HVXsIIlGEq6tWxyHf7TL4qkuz9onuYKn8n2Eqm44fZtVaBx+5ES\n" +
"zRpIvlTvaxmVu0HZ1hYAzUw1XyRnXNMKpL5tT4GCjm8+QGPzlGxgXI1sNg8r9Jaw\n" +
"9zRUYeA6LQR9RIMkHWUCQQD8QojjVoGjtiunoh/N8iplhUszZIavAEvmDIE+kVy+\n" +
"pA7hvlukLw6JMc7cfTcnHyxDo9iHVIzrWlTuKRq9KWVLAkEA+wgJS2sgtldnCVn6\n" +
"tJKFVwsHrWhMIU29msPPbNuWUD23BcKE/vehIyFu1ahNA/TiM40PEnzprQ5JfPxU\n" +
"16S78wJANTfMLTnYy7Lo7sqTLx2BuD0wqjzw9QZ4/KVytsJv8IAn65P/PVn4FRV+\n" +
"8KEx+3zmF7b/PT2nJRe/hycAzxtmlQJBAMrFwQxEqpXfoAEzx4lY2ZBn/nmaR/SW\n" +
"4VNEXCbocVC7qT1j1R5HVMgV13uKiTtq8dUGWmhqsi7x3XayNK5ECPUCQQDZaAN6\n" +
"tvIHApz9OLsXSw0jZirQ6KEYdharXbIVDy1W1sVE3lzLbqLdFp1bxAHQIvsYS5PM\n" +
"A9veSJh372RLJKkj\n" +
"-----END PRIVATE KEY-----";

// 原文
var src = "好厉害";
import Vue from 'vue';
import CryptoJS from 'crypto-js';
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
    let signPrivateKey = priK;
    let sig = new KJUR.crypto.Signature({"alg": "SHA1withRSA", "prov": "cryptojs/jsrsa","prvkeypem": signPrivateKey});
    var hashAlg = 'sha1'; // 设置sha1
    var sign = sig.signString(signData, hashAlg); // 加签
    sign = hex2b64(sign);
    return sign;

    {
    // let signature=new KJUR.crypto.Signature({alg:"SHA1withRSA",prvkeypem:priK});    //!这里指定 私钥 pem!
    // signature.updateString(src);
    // let a = signature.sign();
    // let sign = hextob64(a);
    }
  },
  
  // 验签 用公钥对签名进行验签
  verify (signData, data) {
    // signData: 加签的数据
    // data: 加签之后得到的签文

    try {
      let sig = new KJUR.crypto.Signature({"alg": "SHA1withRSA", "prov": "cryptojs/jsrsa","prvkeypem": pk});
      sig.updateString(signData);
      let result = sig.verify(b64tohex(data));
      return result;
    } catch(e) {
      console.error(e);
    }

    {
    // let signatureVf = new KJUR.crypto.Signature({alg:"SHA1withRSA",prvkeypem:pk});
    // signatureVf.updateString(signData);
    // // !接受的参数是16进制字符串!
    // let b = signatureVf.verify(b64tohex(data));
    // return b
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