import style from "./CompanyBlock.module.scss";

interface CompanyData {
  id: number;
  logo: string;
  year: string;
  description: string;
  points: string[];
}

interface CompanyBlockProps {
  data: CompanyData;
}

export function CompanyBlock({ data }: CompanyBlockProps) {
  const { logo, description, points } = data;

  return (
    <article className={`${style.block} ${style.floating}`}>
      <div className={style.block__header}>
        <img src={logo} alt="Logo" className={style.logo} />
        <div className={style.subheader}>{description}</div>
      </div>

      <ul className={style.list}>
        {points.map((point) => {
          return (
            <li key={point} className={style.item}>
              {point}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
