export const Calculator = () => {
    return (
        <div className="flex items-center justify-between flex-col py-[65px] bg-[#57BFC10F] rounded-[50px] px-[110px]">
            <h2 className="text-[30px] leading-[36px] font-medium text-black text-center">Рассчитай стоимость<br/> заказа прямо на сайте</h2>
            <div className="flex flex-col gap-[37px]">
                <div className="border-[#57BFC1] border-[2px] text-[#57BFC180] rounded-full bg-white px-[20px] text-[20px] py-[10px]"><input className="outline-0 font-medium placeholder-[#57BFC180] text-[#57BFC180]" placeholder="Цена на товар в юанях" type="text"/></div>
                <div className="flex gap-3">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="flex flex-col text-[17px] leading-[20px]">
                <h2>Итоговая стоимость: 3500₽</h2>
                С учётом доставки
            </div>
        </div>
    )
}