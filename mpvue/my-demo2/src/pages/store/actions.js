import {RECEIVE_LIST,MOVIES_ARR} from './mutation-type'
import list_data from '../datas/list-data'
export default {
  getList({commit}){
    //触发对应的mutation
    console.log('actions');
    commit(RECEIVE_LIST,list_data)
  },
  getMoviesArr({commit},data){
    commit(MOVIES_ARR,data)
  }

}
