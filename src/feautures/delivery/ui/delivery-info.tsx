import {DeliveryPoint} from "@/feautures/delivery/ui/delivery-point";
import {Forms} from "@/feautures/delivery/ui/forms";

export const DeliveryInfo = () => {
    return (
        <>
            <div className="flex w-full items-center font-medium pt-7 flex-row text-[20px] gap-3">
                Получение:
                <div className="bg-[#EFEFEF] text-[18px] font-medium text-black rounded-[10px] py-[9px] px-[19px]">В пункте выдачи</div>
                <DeliveryPoint/>
            </div>
            <div className="flex w-full font-medium items-center py-7 flex-row text-[20px] gap-3 border-b-[1px] border-b-[#D1D5DB]">
                Кому выдать:
                <Forms/>
            </div>
        </>
    )
}