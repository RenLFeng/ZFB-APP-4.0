<template>
  <div class="home">
      <h1>{{title}}</h1>
      <p>{{isShow}}</p>
    <p @click="btn">button</p>
    <ul>
      <li @click="delect(index)"  v-for="(item,index) in list" :key="index">{{item.name}}==={{item.age}}</li>
    </ul>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState,mapMutations,mapActions} from 'vuex';
export default {
  name: "home",
  components: {
  },
   data(){
        return{
          data:[1,2,3,4]
        }
  },
  methods:{
    ...mapMutations([
      'setList',
'setisShow',
'setTitle',
'shiftList'
    ]),
    ...mapActions([
      'actionSetList',
      'actionShiftList',
      'actionsShow',
      'actionsSetTitle']),
    btn(){
      let data={
        name:'wang',
        age:67
      }
      let data2={
        title: 'fn',
        index:'6'
      }
    /**mapMutations */
    // this.setList(data);
    //  this.setisShow();
    //   this.setTitle(1)


      /** / mapActions*/

      this.actionSetList(data);
      this.actionsShow();
       this.actionsSetTitle(data2);
    },
    delect(index){
        this.actionShiftList(index)
    }
  },
  computed:{
    ...mapState(['title','isShow','list'])
  }
};
</script>
