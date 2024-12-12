import {MainLogo} from "@/shared/ui/icons";
import {HeaderLinks} from "@/feautures/header/ui/header-links";
import {HeaderRight} from "@/feautures/header/ui/header-right";
import Link from "next/link";

export const Header = () => {
    return (
        <div className="flex bg-white border-b-[#D1D5DB] border-b-[1px] flex-row items-center justify-between py-[15px] px-[150px]">
            <div className="flex items-center gap-[76px]">
                <Link href="/">
                    <MainLogo/>
                </Link>
                <HeaderLinks/>
            </div>
            <HeaderRight/>
        </div>
    )
}