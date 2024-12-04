
export interface ITeam {
    img: string,
    name: string,
    position: string,
    description: string,
}

export const teamData: ITeam[] = [
    {
        img: "public/images/team/1.jpg",
        name: 'Константин Чеболтасов',
        position: 'Генеральный директор',
        description: 'Аттестованный специалист по рынку ценных бумаг.\nКвалифицированный инвестор.\n20-летний опыт практической работы на основных биржах, NYSE, NASDAQ, MOEX'
    },
    {
        img: "public/images/team/2.jpg",
        name: 'Юлия Чеболтасова',
        position: 'Заместитель директора',
        description: ''
    },
]