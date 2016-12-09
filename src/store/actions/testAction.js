import { add, addPlus, reduce, redecePlus } from '../types';

export default{
    [addPlus] (context) {
        context.commit(add,{num:4});

        //只有Action允许异步
        setTimeout(()=>{
            context.commit(reduce);
        },1000);
    },
    [redecePlus] ({ commit }) {
        commit(reduce);
    }
};