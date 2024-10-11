import React from "react";

import style from "./Page.module.scss";

interface PageProps {
  header: string;
  subheader: string;
  color: "white" | "black";
  children?: React.ReactNode;
}

export default function Page(props: PageProps) {
  const { header, subheader, color, children } = props;

  return (
    <section className={`${style.page} ${style[color]}`}>
      <div className={style.page__text}>
        <h2 className={style.header}>{header}</h2>
        <div className={style.subheader__wrapper}>
          <h3 className={style.subheader}>{subheader}</h3>
        </div>
      </div>

      {children}
    </section>
  );
}
