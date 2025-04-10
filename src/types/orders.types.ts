import { TBiCycle } from "./biCycles.types";
import { TUser } from "./users.types";

export type TOrder = {
    _id:string;
    product:TBiCycle;
    quantity:number;
    totalPrice:number;
    paymentSession:string;
    customer:TUser;
}