import Link from "next/link";

interface Props{
    className?:string;
    title: string;
    homeLink?: string;
    secondTitle?: string;
    secondLink?: string;
    thirdTitle?: string;
}

export const PageTitle:React.FC<Props> = ({title, homeLink, secondTitle, secondLink, thirdTitle}) => {
    return (
        <div className="text-black text-[28px] font-medium py-[35px] px-[150px]">
            <div className="flex border-b-[1px] border-[#D1D5DB] flex-col gap-[25px] pb-[15px]">
                <h2>{title}</h2>
                <div className="flex cursor-pointer text-[16px] font-normal flex-row">
                    {homeLink && (
                        <Link href={homeLink}>
                            <p>Главная /&nbsp;</p>
                        </Link>
                    )}
                    {secondTitle && (
                        <Link href={secondLink || ''}>
                            <p>{secondTitle}</p>
                        </Link>
                    )}
                    {thirdTitle && (<p>{thirdTitle}</p>)}
                </div>
            </div>
        </div>
    )
}