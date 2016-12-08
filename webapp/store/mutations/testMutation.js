import { add, reduce } from  '../types'

export default{
    [add](state,data){
        state.count += data.num;
    },
    [reduce](state){
        state.count --;
    }
}