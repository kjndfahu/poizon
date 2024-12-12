'use client'

import {useUserForm} from "@/feautures/delivery/model/userForm";

export const Forms = () => {
    const { formData, updateField } = useUserForm();
    return (
        <div className="flex font-normal text-[18px] gap-3">
            <div>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Имя и фамилия"
                    className="w-full py-2 px-4 border rounded-md bg-white text-gray-600 shadow-md focus:outline-none focus:ring-1 focus:ring-[#57BFC1]"
                />
            </div>
            <div>
                <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full py-2 px-4 border rounded-md bg-white text-gray-600 shadow-md focus:outline-none focus:ring-1 focus:ring-[#57BFC1]"
                />
            </div>
        </div>
    );
};
