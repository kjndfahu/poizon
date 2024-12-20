import {Button} from "@/shared/ui/button";
import {CartButton, WhiteLogo} from "@/shared/ui/icons";
import Link from "next/link";


export function HeaderRight(){
    return (
        <Link href="/cart">
            <div className="flex gap-[30px] items-center">
                <CartButton/>
                <Button logo={<WhiteLogo className="w-[30px] h-[20px]"/>}
                        textColor="text-[#ffffff]"
                        titleColor="text-[#ffffff]"
                        color="bg-[#57BFC1]"
                        borderColor="border-transparent"/>
            </div>
        </Link>
    )
}