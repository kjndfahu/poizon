import Image from "next/image";
import heroImage from '@/shared/assets/img/hero-right-2.png'

export const InfoBlock = () => {
    return (
        <div className="flex items-center py-[23px] justify-between bg-[#E2E8F0] text-black px-[200px]">
            <div className="flex flex-col gap-[23px] font-bold text-[48px] w-[581px]">
                <h2>Оригинальные товары
                    от POIZON </h2>
                <ul className="flex flex-col list-disc gap-4 text-[#73818E] font-medium text-[20px] leading-[26px]">
                    <li>Доставка по всей России бесплатно</li>
                    <li>Официально зарегистрированное юридическое лицо</li>
                    <li>Оформление и оплата заказа как в магазине</li>
                    <li>Только сертифицированные товары из каталога POIZON</li>
                    <li>Доставили более 10 000 посылок за 3 года</li>
                </ul>
            </div>

            <Image width={700} height={482} src={heroImage} alt="box"/>
        </div>
    )
}