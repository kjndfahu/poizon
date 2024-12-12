import { useState } from "react";

interface UserFormData {
    name: string;
    phone: string;
}

export const useUserForm = () => {
    const [formData, setFormData] = useState<UserFormData>({
        name: "",
        phone: "",
    });

    const updateField = (field: keyof UserFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return {
        formData,
        updateField,
    };
};