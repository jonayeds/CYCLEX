/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useOrderBicycleMutation } from "../redux/features/bi-cycles/biCyclesApi";


const PaymentSuccess = () => {
    const queryParams = new URLSearchParams(location.search);
    const [order] = useOrderBicycleMutation() 
    const session_id = queryParams.get('session_id')
    const product_id = queryParams.get('product')
    console.log(product_id)
    useEffect(()=>{
        const verify = async()=>{
            const result =await order({product:product_id, paymentSession:session_id}) 
            console.log(result)
        }
        if(session_id && product_id){
            verify()
        }
        
    },[session_id, product_id, order])
  return (
    <div>
        
    </div>
  )
}

export default PaymentSuccess