import React, {useEffect} from 'react';
import {useAppDispatch} from "../hooks/redux";
import {fetchPosts} from "../store/AsyncActionCreator";
import PostContainer from "../components/PostContainer";
import style from "./Main.module.css"

const Main = () => {

    const dispatch = useAppDispatch()

    useEffect( ()=> {
        dispatch(fetchPosts())
    },[])

    ////Удалить потом

    return (
        <div className={style.main}>
            <PostContainer />
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