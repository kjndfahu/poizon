import { useState } from "react";

export const useAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return { openIndex, toggleAccordion };
};