import { BUY_ICECREAM } from "./IceCreamTypes";

export const buyIceCream = ( num = 1 ) => {
    return{
        type: BUY_ICECREAM,
        payload: num
    }
}