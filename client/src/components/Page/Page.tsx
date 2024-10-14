import React, { useRef } from "react";

import style from "./Page.module.scss";
import { useVerticalScroll } from "../../hooks/useVerticalScroll";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";

interface PageProps {
  header: string;
  subheader: string;
  color: "white" | "black";
  scrollType?: "horizontal" | "round";
  children?: React.ReactNode;
}

export default function Page(props: PageProps) {
  const { header, subheader, color, scrollType, children } = props;

  const pageRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  useVerticalScroll(pageRef, style);

  scrollType && useHorizontalScroll(pageRef, scrollRef);

  return (
    <section
      ref={pageRef}
      className={`${style.page} ${style[color]} ${
        scrollType && style.stickyWrapper
      }`}
    >
      {scrollType ? (
        <div className={style.sticky}>
          <div className={style.page__text}>
            <h2 className={style.header}>{header}</h2>
            <div className={style.subheader__wrapper}>
              <h3 className={style.subheader}>{subheader}</h3>
            </div>
          </div>
          <div className={style.hScroll} ref={scrollRef}>
            {children}
          </div>
        </div>
      ) : (
        <>
          <div className={style.page__text}>
            <h2 className={style.header}>{header}</h2>
            <div className={style.subheader__wrapper}>
              <h3 className={style.subheader}>{subheader}</h3>
            </div>
          </div>
          {children}
        </>
      )}
    </section>
  );
}
