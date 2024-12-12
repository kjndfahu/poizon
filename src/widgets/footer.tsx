import {FooterColumn} from "@/feautures/footer/ui/footer-column";
import {helpFooterLinks, policiesFooterLinks, supportFooterLinks, addressesFooterLinks} from "@/kernel/constants";
import {Button} from "@/shared/ui/button";
import {MainLogo} from "@/shared/ui/icons";


export const Footer = () => {
    return (
        <div className="flex flex-col justify-between py-[68px] px-[150px]">
            <div className="flex justify-between">
                <FooterColumn data={helpFooterLinks}/>
                <FooterColumn data={policiesFooterLinks}/>
                <FooterColumn data={supportFooterLinks}/>
                <FooterColumn data={addressesFooterLinks}/>
            </div>
            <Button logo={<MainLogo className="w-[30px] h-[20px]"/> }
                    textColor="text-[#73818E]"
                    titleColor="text-[#000000]"
                    color="bg-[#ffffff]"
                    borderColor="border-[1px] max-w-[290px] border-[#D1D5DB]"/>
        </div>
    )
}