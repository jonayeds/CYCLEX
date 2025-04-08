import { Navigate,  useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useGetSingleBicycleQuery, useMakePaymentMutation } from "../redux/features/bi-cycles/biCyclesApi";
import Loading from "../components/shared/Loading";
import { TBiCycle } from "../types/biCycles.types";
import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Label } from "../components/ui/label";
import { toast } from "sonner";

const Checkout = () => {
  const params = useParams();
  const { data, isLoading } = useGetSingleBicycleQuery(params.bicycleId);
  const user = useAppSelector(selectCurrentUser)
  const bicycle: TBiCycle = data?.data;
  const [quantity, setQuantity] = useState(1);
  const [payment] = useMakePaymentMutation()
  if (isLoading) {
    return <Loading />;
  }
  if (bicycle.quantity === 0) {
    return <Navigate to={`/bicycle-details/${bicycle._id}`} />;
  }

  const handleCheckout =async()=>{
    // const stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY as string)
    const id =toast.loading("Placing order")
    const orderData = {
        quantity,
        product:bicycle._id
    }
    const res = await payment(orderData)
    console.log(res?.data?.data.url)
    if(res?.data){
        toast.success(res.data.message, {id})
        window.location.href = res.data.data.url
        // stripe?.redirectToCheckout(res.data.data._id)
    }else{
        toast.error('something went wrong', {id})
    }
        console.log(res)

  }
  return (
    <div className="max-w-[70vw] mx-auto pt-24 min-h-screen flex items-center justify-center">
        <div className="border p-5 rounded-xl">
            <div>
                <p className="text-xl">Poduct : {bicycle.name}</p>
            </div>

      <div className="flex items-center gap-4 mt-4">
        <p className="text-xl">Quantity : </p>
        <div className="flex items-center ">
          <Button
            className="border border-gray-300 shadow-none"
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
            >
            <Minus />
          </Button>
          <span className="min-w-10 flex justify-center">{quantity}</span>
          <Button
            className="border border-gray-300 shadow-none"
            onClick={() =>
                setQuantity((prev) =>
                    prev < bicycle?.quantity ? prev + 1 : prev
        )
    }
    >
            <Plus />
          </Button>
        </div>
      </div>
      <div className="mt-4 flex gap-2 items-center">
        <p className="text-xl">Total Price :</p>{" "}
        <p className="min-w-20 text-lg flex justify-center text-green-600 ">
          {" "}
          {bicycle.price * quantity}
        </p>
      </div>
      <div className="mt-4">
        <p>Ordered by : <span className="text-xs ">{user?.email}</span></p>
      </div>
      <div className="my-4">
        <p className="text-center my-2">Payment method</p>
      <RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2 bg-gray-50 py-3 px-3 text-lg rounded-xl border border-gray-200">
    <RadioGroupItem value="option-one" id="cod" />
    <Label htmlFor="cod">Cash on delivery</Label>
  </div>
  <div className="flex items-center space-x-2 bg-gray-50 py-3 px-3 text-lg rounded-xl border border-gray-200">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Card</Label>
  </div>
</RadioGroup>
      </div >
      <Button className="mt-4 w-full border-gray-200 shadow-none" onClick={handleCheckout}>Order Now</Button>
              </div>
    </div>
  );
};

export default Checkout;
