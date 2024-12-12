interface Props{
    color: string;
    borderColor: string;
    titleColor: string;
    textColor: string;
    logo: React.ReactNode;
}

export const Button:React.FC<Props> = ({color, borderColor, titleColor, textColor, logo}) => {
    return (
        <div className={`flex items-center gap-[11px] px-[26px] py-[9px] ${color} ${borderColor} rounded-[15px]`}>
            {logo}
            <div className={`flex ${titleColor} flex-col font-semibold`}>
                <h4>Наш телеграм канал</h4>
                <p className={`${textColor} font-normal`}>Telegram web app</p>
            </div>
        </div>
    )
}