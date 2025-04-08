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
            window.location.href = "https://bi-cycle-store-shad-cn.vercel.app"
        }
        if(session_id && product_id){
            verify()
        }
        
    },[session_id, product_id, order])
  return (
    <div className="min-h-screen flex justify-center items-center">
        <div className="p-4 bg-green-500 rounded-xl text-white ">
            <h1 className="text-3xl text-center">Payment Successfull</h1>
            <p className="text-sm text-center mt-2">Redirecting to home page...</p>
        </div>
    </div>
  )
}

export default PaymentSuccess