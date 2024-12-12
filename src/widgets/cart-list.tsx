import {CartItem} from "@/feautures/cart-list/ui/cart-item";

export const CartList = () => {
    return (
        <div className="flex w-[50%] gap-5 flex-col">
            <CartItem title="Nike Air Force 1 07" size="43" />
            <CartItem title="Nike Air Force 1 07" size="43" />
        </div>
    )
}