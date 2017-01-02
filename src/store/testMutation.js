import { add, reduce } from  './types'

export default{
    [add](state){
        state.count ++;
    },
    [reduce](state){
        state.count --;
    }
}