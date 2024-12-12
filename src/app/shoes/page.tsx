import {PageTitle} from "@/shared/ui/page-title";
import {CardsList} from "@/widgets/cards-list";

export default function ShoesPage(){
    return (
        <>
            <PageTitle title="Обувь" homeLink="/" secondTitle="Обувь"/>
            <CardsList/>
        </>
    )
}