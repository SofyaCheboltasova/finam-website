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
    id: 110121,
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
    id: 10853,
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
    id: 111405,
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
    id: 16451,
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
    id: 11564,
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
    id: 108010,
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
    id: 119204,
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
    id: 118916,
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
    id: 110116,
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

export interface IPoints {
  id: number,
  name: string,
  description: string,
  footnote?: string,
  link?: {
    name: string,
    href: string,
  }
}

export const legalPoints: IPoints[] = [
    {
    id: 110,
    name: 'Конвертация валют для ВЭД по выгодному курсу',
    description: 'Операции с валютой по биржевому курсу. Гибкие тарифные планы (комиссия от 0,0027%), вывод денежных средств в день совершения сделки'
  },
  {
    id: 111,
    name: 'Страхование валютных рисков',
    description: 'Биржевые инструменты для защиты активов от изменений курсов валюты и ценных бумаг'
  },
  {
    id: 112,
    name: 'Краткосрочное размещение средств под высокий %',
    description: 'Банковские депозиты, инвестирование в долговые инструменты, размещение в российские и зарубежные активы, доверительное управление'
  },
  // {
  //   id: 2,
  //   name: 'Краткосрочное размещение средств под высокий %',
  //   description: ''
  //   // description: 'Организация выпуска и размещение ценных бумаг на бирже, услуги маркет-мэйкинга, сделки РЕПО, управление ликвидностью и т.д.'
  // },
  {
    id: 113,
    name: 'Привлечение инвестиций',
    description: 'Организация публичного размещения акций и облигаций, управление ликвидностью, обслуживание сделок в области слияний и поглощений, привлечение финансирования'
  },
  {
    id: 114,
    name: 'Партнерские программы «ФИНАМ»',
    description: 'Партнерские программы «ФИНАМ» обеспечат вашему бизнесу приток новых клиентов, повышение лояльности текущих клиентов и дополнительный источник дохода'
  },
]

export const customerPoints: IPoints[] = [
  {
    id: 115,
    name: 'Брокерский счет',
    description: 'Добавляйте в портфель акции российских и мировых компаний, облигации и валюту на Московской бирже, СПБ Бирже, NYSE, NASDAQ и HKEX',
    link: {
      name: 'Открыть онлайн',
      href: `https://www.finam.ru/landing/otkrytie-scheta-new/${id}`
    }
  },

  {
    id: 116,
    name: 'ИИС — индивидуальный инвестиционный счет',
    description: `Получайте до 60 000 ₽ каждый год за счет налогового вычета. 15% — для физических лиц с доходом от 5 млн₽ в год, 13% — для остальных физлиц.`,
    link: {
      name: 'Открыть онлайн',
      href: `https://www.finam.ru/landing/otkrytie-scheta-new/${id}`
    }
  },
  {
    id: 117,
    name: 'Тест-драйв реального счета ',
    description: 'Научитесь торговать на бирже без рисков и абсолютно бесплатно. Для практики начисляются виртуальные 400 000₽.',
    link: {
      name: 'Открыть онлайн',
      href: `https://www.finam.ru/landings/demoaccount/${id}`
    }
  },
  {
    id: 118,
    name: 'Финам Автоследование',
    description: 'Готовые инвестиционные стратегии от 30тыс.руб. без необходимости иметь знания о рыночных продуктах или совершать самостоятельно сделки',
    link: {
      name: 'Подробнее',
      href: `https://www.finam.ru/landings/recom-strategy/${id}`
    }
  },
  {
    id: 119,
    name: 'Доступ к биржам США ',
    footnote: 'Только для квалифицированных инвесторов',
    description: 'Прямой доступ к ведущим биржам США: NYSE, NASDAQ, CBOE, СМЕ. Сделки с американскими акциями, фьючерсами и опционами.',
  },
  {
    id: 120,
    name: 'Персональные консультации по инвестированию',
    description: 'Инвестиционный консультант соберет подходящий портфель и будет помогать управлять им, чтобы вы могли достичь своих финансовых целей.',
    footnote: 'Для клиентов с портфелем от 3 млн₽.',
  },
]