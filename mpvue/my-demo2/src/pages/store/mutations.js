import {RECEIVE_LIST,MOVIES_ARR} from "./mutation-type";
export default {
  [RECEIVE_LIST](state,list_data){
    state.listTmp=list_data;
    console.log('mutations');
    // console.log(list_data)
  },
  [MOVIES_ARR](state,data){
    state.moviesArr=data;
    // console.log('mutations');
    console.log(state)
  },

}
