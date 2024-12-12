import {PageTitle} from "@/shared/ui/page-title";
import {CartList} from "@/widgets/cart-list";
import {Delivery} from "@/widgets/delivery";

export default function CartPage() {
    return (
        <div>
            <PageTitle title="Оформление заказа"/>
            <div className="flex flex-row justify-between px-[150px] w-full">
                <CartList/>
                <Delivery/>
            </div>
        </div>
    )
}