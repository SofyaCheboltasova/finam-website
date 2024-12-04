import style from "./CompanyBlock.module.scss";

interface CompanyData {
  id: number;
  points: string[];
  logo?: string;
}

interface CompanyBlockProps {
  data: CompanyData;
}

export function CompanyBlock({ data }: CompanyBlockProps) {
  const { id, logo, points } = data;

  return (
    <article className={`${style.block} ${style.floating}`}>
      <div className={style.block__header}>
        <img src={logo} alt="Logo" className={style.logo} />
        {/* <div className={style.subheader}>{description}</div> */}
      </div>

      <ul className={style.list}>
        {points.map((point) => {
          return (
            <li key={id} className={style.item}>
              {point}
            </li>
          );
        })}
      </ul>
    </article>
  );
}