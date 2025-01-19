import {ICart} from "../../models/ICart.ts";
import {FC} from "react";

type Props = {
    cart:ICart;
}

export const CartComponent:FC<Props> = ({cart}) => {
    return (
        <div>
            <h3>Total - {cart.total}</h3>
            <p>Total Products - {cart.totalProducts}</p>
            <p>Total Quantity - {cart.totalQuantity}</p>
            <p>Discounted Total - {cart.discountedTotal}</p>
            <p>id - {cart.id}</p>
        </div>
    );
};



