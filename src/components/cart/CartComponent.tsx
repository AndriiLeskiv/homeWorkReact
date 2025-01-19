import {ICart} from "../../models/carts/ICart.ts";
import {FC} from "react";

type Props = {
    cart:ICart;
}

export const CartComponent:FC<Props> = ({cart}) => {
    return (
        <div>
            <h3>Cart ID: {cart.id}</h3>
            <p><strong>User ID:</strong> {cart.userId}</p>
            <p><strong>Total Products:</strong> {cart.totalProducts}</p>
            <p><strong>Total Quantity:</strong> {cart.totalQuantity}</p>
            <p><strong>Total Price:</strong> ${cart.total.toFixed(2)}</p>
            <p><strong>Discounted Total:</strong> ${cart.discountedTotal.toFixed(2)}</p>
            <h4>Products:</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px" }}>
                {cart.products.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            border: "1px solid #ddd",
                            padding: "10px",
                            borderRadius: "5px",
                            textAlign: "center"
                        }}
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "5px" }}
                        />
                        <h5>{product.title}</h5>
                        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                        <p><strong>Quantity:</strong> {product.quantity}</p>
                        <p><strong>Total:</strong> ${product.total.toFixed(2)}</p>
                        <p><strong>Discount:</strong> {product.discountPercentage}%</p>
                        <p><strong>Discounted Total:</strong> ${product.discountedTotal.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};