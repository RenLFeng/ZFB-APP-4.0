<template>
    <div id="app">
      <router-view />
    </div>
  </template>
  <script>
    export default {
      created() {
     
      }
    }
  </script>
  <style lang="less">
    @import "../public/iconfont/iconfont.css";
    @import"//at.alicdn.com/t/font_1205549_7e5rzumbjrr.css";
    // body {
    //   font-size: 16px;
    //   background-color: #f8f8f8;
    //   -webkit-font-smoothing: antialiased;
    //    .common{
    //     background:#fff;
    //     color: #758391;
    //     font-size: 16px;
    //     padding: 0 10px;
    //   }
    //   .but_box{
    //       padding: 0 16px;
    //       margin: 0 auto;
    //   }
    //   .van-button--info{
    //       background: #5a7aef;
    //   }
    //   .van-button--large{
    //       border-radius: 0.4rem;
    //   }
    // }
  
    .flex {
      display: -webkit-flex;
      /* Safari */
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      /* align-content: flex-start | flex-end | center | space-between | space-around | stretch;align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。 */
    }
  
    .clearfix:after {
      content: "";
      display: block;
      clear: both;
    }
  
    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  
  </style>