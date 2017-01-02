import { add, addPlus, reduce, reducePlus } from './types';

export default{
    [addPlus] (store) {
        store.commit(add);

        //只有Action允许异步
        setTimeout(()=>{
            store.commit(reduce);
        },1000);
    },
    [reducePlus] ({ commit }) {
        commit(reduce);
    }
};