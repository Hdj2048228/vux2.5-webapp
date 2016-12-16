import { add, addPlus, reduce, reducePlus } from '../types';

export default{
    [addPlus] (context) {
        context.commit(add,{num:10});

        //只有Action允许异步
        setTimeout(()=>{
            context.commit(reduce);
        },1000);
    },
    [reducePlus] ({ commit }) {
        commit(reduce);
    }
};