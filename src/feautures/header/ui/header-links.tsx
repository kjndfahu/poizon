import {headerLinks} from "@/kernel/constants";

export function HeaderLinks(){
    return (
        <div className="flex gap-16 text-[18px] text-[#73818E]">
            {headerLinks.map((item) => (
                <h4 key={item.title}>{item.title}</h4>
            ))}
        </div>

    )
}