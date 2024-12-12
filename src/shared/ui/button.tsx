import {WhiteLogo} from "@/shared/ui/icons";

export function Button(){
    return (
        <div className="flex items-center gap-[6px] px-[26px] py-[9px] bg-[#57BFC1] rounded-[15px]">
            <WhiteLogo className="w-[30px] h-[20px]"/>
            <div className="flex flex-col font-semibold">
                <h4>Наш телеграм канал</h4>
                <p className="font-normal">Telegram web app</p>
            </div>
        </div>
    )
}