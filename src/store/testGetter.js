import { count } from  './types'

export default{
    [count](state){
        return state.count += 1;
    }
}