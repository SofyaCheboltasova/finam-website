import style from "./CompanyBlock.module.scss";

interface CompanyData {
  id: string;
  points: string[];
  logo?: string;
}

interface CompanyBlockProps {
  data: CompanyData;
}

export function CompanyBlock({ data }: CompanyBlockProps) {
  const { id, logo, points } = data;

  return (
    <article key={id} className={`${style.block} ${style.floating}`}>
      <div className={style.block__header}>
        <img src={logo} alt="Logo" className={style.logo} />
        {/* <div className={style.subheader}>{description}</div> */}
      </div>

      <ul className={style.list}>
        {points.map((point) => {
          return (
            <li key={'li' + id} className={style.item}>
              {point}
            </li>
          );
        })}
      </ul>
    </article>
  );
}