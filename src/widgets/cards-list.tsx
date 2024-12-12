import {Card} from "@/feautures/cards-list/ui/card";

export const CardsList =() => {
    return (
        <div className="flex justify-between flex-wrap gap-[65px] mb-[100px] px-[150px]">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}