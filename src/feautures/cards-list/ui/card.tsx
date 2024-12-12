import Image from "next/image";
import img from '../../../shared/assets/img/nike-dunk-low-white-black.png'

interface Props {
    className?: string;
}

export const Card:React.FC<Props> = ({className}) => {
    return (
        <div className="flex items-center gap-2 flex-col text-[16px] text-[#1F2A37]">
            <Image src={img} alt="item"/>
            <h4>Dunk Low WMNS "White / Black"</h4>
            <h4 className="text-[#8E8E8E]">NIKE</h4>
            <h4 className="text-[18px]">22.000 ₽</h4>
        </div>
    )
}