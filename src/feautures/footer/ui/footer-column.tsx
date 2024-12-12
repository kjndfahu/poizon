import {FooterLinks} from "@/feautures/footer/types";
import Link from "next/link";

interface Props {
    data: FooterLinks;
}

export const FooterColumn: React.FC<Props> = ({data}) => {
    return (
        <div className="flex flex-col gap-[47px] text-[18px] font-medium text-[#1F2A37] leading-[22px]">
            {data.title}
            <div className="flex flex-col max-w-[345px] gap-[27px] font-normal">
                {data.data.map((item) => (
                    item.link ? (
                        <Link key={item.link} href={item.link}>
                            <h2>{item.title}</h2>
                        </Link>
                    ) : (
                        <h2 key={item.title}>{item.title}</h2>
                    )
                ))}
            </div>
        </div>
    )
}