import {DeliveryInfo} from "@/feautures/delivery/ui/delivery-info";
import {DeliveryPrice} from "@/feautures/delivery/ui/delivery-price";

export const Delivery = () => {
    return (
        <div className="flex flex-col w-[50%] text-[28px] px-[50px] text-[#1F2A37] border-l-[1px] border-l-[#D1D5DB]">
            <div className="pb-[30px] border-b-[1px] border-b-[#D1D5DB]">Доставка</div>
            <DeliveryInfo/>
            <DeliveryPrice/>
        </div>
    )
}