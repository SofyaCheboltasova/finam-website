
export interface ITeam {
    img: string,
    name: string,
    position: string,
    description: string,
}

export const teamData: ITeam[] = [
    {
        img: "/images/team/1.JPG",
        name: 'Константин Чеболтасов',
        position: 'Генеральный директор',
        description: 'Аттестованный специалист по рынку ценных бумаг.\nКвалифицированный инвестор.\n20-летний опыт практической работы на основных биржах, NYSE, NASDAQ, MOEX'
    },
    {
        img: "/images/team/2.JPG",
        name: 'Юлия Чеболтасова',
        position: 'Заместитель директора',
        description: ''
    },
]