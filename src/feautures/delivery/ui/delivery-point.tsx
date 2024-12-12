'use client'

import {usePickupPoint} from "@/feautures/delivery/model/usePickPoint";
import {deliveryPoints} from "@/feautures/delivery/model/constants";

export const DeliveryPoint = () => {
    const { isOpen, setIsOpen, selectedPoint, handleSelect } = usePickupPoint();

    return (
        <div className="relative font-medium">
            <button onClick={() => setIsOpen(!isOpen)} className="w-[350px] text-[18px] py-2 px-4 border rounded-md bg-white text-gray-600 shadow-md hover:bg-gray-50 focus:outline-none">
                {selectedPoint || "Выбрать пункт выдачи"}
            </button>

            {isOpen && (
                <ul className="absolute left-0 mt-2 text-[18px] w-full bg-white border rounded-md shadow-lg z-10">
                    {deliveryPoints.map((point, index) => (
                        <li key={index} onClick={() => handleSelect(point)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            {point}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
