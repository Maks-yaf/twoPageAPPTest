import React, {useEffect} from 'react';
import {postSlice} from "../store/main-reducer";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchPosts} from "../store/AsyncActionCreator";

const Main = () => {

    const {posts, isLoading, error} = useAppSelector(state => state.postReducer)
    const {} = postSlice.actions
    const dispatch = useAppDispatch()

    useEffect( ()=> {
        dispatch(fetchPosts())
    },[])

    return (
        <div>
            {isLoading && <h1>...Loading</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(posts, null, 2)}
        </div>
    )
}








    // const {} = useAppSelector(state => state.main);

//     const dispatch: AppDispatch = useDispatch();
//     const customers = useSelector((state: any) => state.main.customers);
//     console.log(customers)
//
//     const addClient = (name:any) => {
//         const customer = {
//             name,
//             id: Date.now()
//         }
//         dispatch(addCustomerAction(customer))
//     }
//
//     const removeClient = (customer: any) => {
//         dispatch(removerCustomerAction(customer.id))
//     }
//
//     const addManyClientFromBase = () => {
//         dispatch(fetchCustomers())
//     }
//
//     return (
//         <div>
//             <div><h1>MAIN</h1></div>
//             <button onClick={() => addClient(prompt())}>ADD CLIENT</button>
//             <button onClick={() => addManyClientFromBase()}>ADD CLIENT FROM BASE</button>
//             <div>
//                 {customers.length > 0 ?
//                     <div>
//                         {customers.map((customer: any) => (
//                             <div onClick={() => removeClient(customer)} key={customer.id}>{customer.name}</div>
//                         ))}
//                     </div>
//                     :
//                     <div>
//                         НЕТ СПИСКА
//                     </div>
//
//                 }</div>
//         </div>
//     );
// };

export default Main;