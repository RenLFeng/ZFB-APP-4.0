import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title:'Store',
    isShow:false,
    list:[
      {
        'name':'zhang',
        'age':20
      },
      {
        'name':'li',
        'age':10
      }
    ]
  },
  mutations: {
    setList:(state,item)=>{
      console.log('befor',state.list);
     state.list.push(item)
      console.log('after',state.list);
    },
    shiftList:(state,index)=>{
      state.list.splice(index,1);
    },
    setisShow:(state)=>{
      state.isShow=!state.isShow
    },
    setTitle:(state,adminInfo)=>{
      state.title=adminInfo.title+'===='+adminInfo.index
    }
  },
  actions: {
    actionSetList:({commit},obj)=>{
          commit('setList',obj)
    },
    actionShiftList:({commit,state},index)=>{
    //   if(state.list[index].age=='67'){
    //     return;
    //  }
      // for(let i=0;i<state.list.length;i++){
      //   if(state.list[i].age=='67'){
      //      return;
      //   }
      // }
      // state.list.map((v,index)=>{
      //   if(v.age=='67'){
      //     alert(v.age)
      //     return;
      //   }
      // })
      for (const item of state.list) {
        if(item.age=='67'){
           alert(JSON.stringify(item));
           return;
        }
      }
      commit('shiftList',index)
},
    actionsShow:({commit})=>{
      commit('setisShow')
    },
    actionsSetTitle:({commit},data)=>{
      // commit('setTitle',{
      //   title: data.title,
      //   index:data.index
      // } )
      commit('setTitle',data)
    }
  
  }
});
