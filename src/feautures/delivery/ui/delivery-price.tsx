export const DeliveryPrice = () => {
    return (
        <div className="flex flex-col gap-3 pt-7 pb-[75px]">
            <div className="flex justify-between text-[20px] text-black">
                <h4>Товар</h4>
                <h4>12 185 ₽</h4>
            </div>
            <div className="flex justify-between text-[20px] text-black">
                <div>
                    <h4>Доставка</h4>
                    <p className="text-[#73818E] text-[16px]">Оплачивается при получении</p>
                </div>
                <h4>≈400 ₽</h4>
            </div>
            <div className="flex items-center justify-center text-[20px] mt-5 text-white py-3 bg-[#57bfc1] cursor-pointer rounded-[15px]">
                12 185 ₽ Оплатить
            </div>
        </div>
    )
}