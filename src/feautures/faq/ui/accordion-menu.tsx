'use client'

import {faqQuestions} from "@/kernel/constants";
import {ChevronDown, ChevronUp} from "lucide-react";
import {useAccordion} from "@/feautures/faq/model/useAccordion";

export const AccordionMenu = () => {
    const { openIndex, toggleAccordion } = useAccordion();

    return (
        <div className="flex flex-col gap-[11px] w-full ">
            {faqQuestions.map((item, index) => (
                <div key={index} className=" border-[1px] px-[30px] rounded-[10px] border-gray-300 py-2">
                    <button onClick={() => toggleAccordion(index)} className="flex justify-between items-center w-full text-left text-gray-900 text-lg font-medium">
                        {item.question} {openIndex === index ? (
                            <ChevronUp className="w-5 h-5 text-gray-500"/>
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500"/>
                        )}
                    </button>
                    {openIndex === index && (
                        <div className="mt-2 text-gray-700 text-base">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}