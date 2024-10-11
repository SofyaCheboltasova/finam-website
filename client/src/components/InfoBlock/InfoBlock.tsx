import style from "./InfoBlock.module.scss";

interface CompanyData {
  id: number;
  logo: string;
  year: string;
  description: string;
  points: string[];
}

interface InfoBlockProps {
  data: CompanyData;
}

export function InfoBlock({ data }: InfoBlockProps) {
  const { logo, description, points } = data;

  return (
    <article className={style.block}>
      <div className={style.block__header}>
        <img src={logo} alt="Logo" className={style.logo} />
        <div className={style.subheader}>{description}</div>
      </div>

      <div className={style.block__content}>
        <ul className={style.list}>
          {points.map((point) => {
            return (
              <li key={point} className={style.item}>
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
