export interface strategyType {
  id: number;
  name: string;
  description: string;
  link: string;
  minSum: number;
  risk: "Консервативный" | "Умеренный" | "Агрессивный";
  profit: number | null;
  chart: string;
}

export const id =
  "?AgencyBAckofficeID=4425&agent=2a48d454-1dae-4115-885d-1f33a37d363d";

export const strategies: strategyType[] = [
  {
    id: 1,
    name: "Накопительная. Акции РФ",
    description:
      "Подойдет для консервативных клиентов с малыми суммами и возможностью постоянного довнесения средств на счет.",
    link: `https://www.comon.ru/strategies/110121/${id}`,
    minSum: 59500,
    risk: "Консервативный",
    profit: 31,
    chart: "/images/strategies/1.png",
  },
  {
    id: 2,
    name: "Дивиденды навсегда",
    description:
      "Долгосрочная дивидендная стратегия, предусматривающая покупку акций, имеющих потенциал роста и с хорошей дивидендной доходностью.",
    link: `https://www.comon.ru/strategies/10853/${id}`,
    minSum: 200000,
    risk: "Консервативный",
    profit: 18,
    chart: "/images/strategies/2.png",
  },
  {
    id: 3,
    name: "MIX ST+IQT+BC",
    description:
      "Стратегия рассчитана для инвесторов, желающих совместить инвестиции и спекуляции.",
    link: `https://www.comon.ru/strategies/111405/${id}`,
    minSum: 600000,
    risk: "Консервативный",
    profit: 30,
    chart: "/images/strategies/3.png",
  },
  {
    id: 4,
    name: "НЗТ активная",
    description:
      "Основная идея стратегии — поиск недооцененных бумаг на Российском рынке, а также спекулятивная торговля в более короткие промежутки времени под корпоративные истории",
    link: `https://www.comon.ru/strategies/16451/${id}`,
    minSum: 200000,
    risk: "Умеренный",
    profit: 49,
    chart: "/images/strategies/4.png",
  },
  {
    id: 5,
    name: "Валютная",
    description:
      "Стратегия «Валютная» стала лучше адаптироваться к текущей ситуации на валютном рынке.",
    link: `https://www.comon.ru/strategies/11564/${id}`,
    minSum: 200000,
    risk: "Умеренный",
    profit: 33,
    chart: "/images/strategies/5.png",
  },
  {
    id: 6,
    name: "Krot",
    description:
      "В торговле используются высоколиквидные волатильные акции и фьючерсы Российского фондового рынка.",
    link: `https://www.comon.ru/strategies/108010/${id}`,
    minSum: 95000,
    risk: "Умеренный",
    profit: 37,
    chart: "/images/strategies/6.png",
  },
  {
    id: 7,
    name: "Хедж-Фонд (Hedge Fund online)",
    description:
      "Инвестиционная стратегия хедж-фонда предполагает активное управление, базирующееся на принципах максимизации доходности, долгосрочного инвестирования, диверсификации и эффективного риск-менеджмента.",
    link: `https://www.comon.ru/strategies/119204/${id}`,
    minSum: 200000,
    risk: "Агрессивный",
    profit: 156,
    chart: "/images/strategies/7.png",
  },
  {
    id: 8,
    name: "Арбитражная стратегия на российском рынке",
    description:
      "Данная стратегия представляет собой набор арбитражных механизмов,  на срочной и фондовой секций Московской бирже.",
    link: `https://www.comon.ru/strategies/118916/${id}`,
    minSum: 290000,
    risk: "Агрессивный",
    profit: 109,
    chart: "/images/strategies/8.png",
  },
  {
    id: 9,
    name: "Росток+",
    description:
      "Торговля осуществляется только на срочном рынке с применением технического анализа, вручную.",
    link: `https://www.comon.ru/strategies/110116/${id}`,
    minSum: 400000,
    risk: "Агрессивный",
    profit: 147,
    chart: "/images/strategies/9.png",
  },
];


export const legalPoints = [
    {
    id: 5,
    name: 'Конвертация валют для ВЭД по выгодному курсу',
    description: 'Операции с валютой по биржевому курсу. Гибкие тарифные планы (комиссия от 0,0027%), вывод денежных средств в день совершения сделки'
  },
  {
    id: 6,
    name: 'Страхование валютных рисков',
    description: 'Услуга по защите ваших активов от изменений курсов валюты и ценных бумаг'
  },
  {
    id: 1,
    name: 'Предсказуемый пассивный доход',
    description: 'Банковские депозиты, инвестирование в долговые инструменты, размещение в российские и зарубежные активы, доверительное управление'
  },
  {
    id: 2,
    name: 'Институциональным инвесторам',
    description: 'Организация выпуска и размещение ценных бумаг на бирже, услуги маркет-мэйкинга, сделки РЕПО, управление ликвидностью и т.д.'
  },
  {
    id: 4,
    name: 'Привлечение инвестиций',
    description: 'Организация публичного размещения акций и облигаций, управление ликвидностью, обслуживание сделок в области слияний и поглощений, привлечение финансирования'
  },
  {
    id: 3,
    name: 'Партнерские программы «ФИНАМ»',
    description: 'Партнерские программы «ФИНАМ» обеспечат вашему бизнесу приток новых клиентов, повышение лояльности текущих клиентов и дополнительный источник дохода'
  },
]