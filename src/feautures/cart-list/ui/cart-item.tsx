import {VerifiedLogo} from "@/shared/ui/icons";
import Image from "next/image";
import img from '../../../shared/assets/img/nike-dunk-low-white-black.png'

interface Props{
    className?:string;
    title: string;
    size: string;
    image?: string;
}

export const CartItem:React.FC<Props> = ({title, size, image}) => {
    return (
        <div className="flex items-center w-[80%] border-b-[1px] border-b-[#D1D5DB] gap-[34px]">
            <Image height={150} src={img} alt="img"/>
            <div className="flex flex-col gap-2 text-[20px] font-medium text-black">
                <h3>{title}</h3>
                <div className="flex items-center gap-1 text-[18px] text-[#58C94E]">
                    <VerifiedLogo/>
                    <h4>Оригинал</h4>
                </div>
                <h3>Размер: {size}</h3>
            </div>
        </div>
    )
}