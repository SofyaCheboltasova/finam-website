import {customerPoints} from "../../assets/data/customersData.ts";
import Page from "../../components/Page/Page";
import {IFormState, PointsBlock} from "../../components/PointsBlock/PointsBlock.tsx";

export default function PhysCustomersPage(props: IFormState) {
    const header = "ФИЗИЧЕСКИМ ЛИЦАМ";
    const subheader = 'Готовые инвестиционные стратегии, доступ на биржи РФ, США и Гонконга'

    return (
        <Page id="products" color={"white"} header={header} subheader={subheader}>
            <PointsBlock link={'https://wa.me/79134489089'} points={customerPoints} form={props}/>
        </Page>
    );
}