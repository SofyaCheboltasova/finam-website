
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
        description: 'Аттестаты ФКЦБ 1.0, 4.0\n—\nКвалификационный аттестат специалиста по брокерско-дилерской деятельности\n—\n20-летний опыт практической работы на всех основных биржах'
    },
    {
        img: "/images/team/2.JPG",
        name: 'Юлия Чеболтасова',
        position: 'Заместитель директора.\nСпециалист по работе с клиентами',
        description: 'Квалифицированная поддержка и информирование на всех этапах открытия счета и работе на фондовом рынке'
    },
]