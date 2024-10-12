import React, { useEffect, useRef } from "react";

import style from "./Page.module.scss";

interface PageProps {
  header: string;
  subheader: string;
  color: "white" | "black";
  sticky?: boolean;
  children?: React.ReactNode;
}

export default function Page(props: PageProps) {
  const { header, subheader, color, sticky, children } = props;

  const pageRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!pageRef.current) return;
      const rect = pageRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        pageRef.current.classList.add(style.visible);
      } else {
        pageRef.current.classList.remove(style.visible);
      }
      sticky && transform();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  function transform() {
    if (!stickyRef.current || !stickyRef.current.parentElement) return;
    const offsetTop = stickyRef.current.parentElement?.offsetTop;
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;

    if (scrollRef.current) {
      scrollRef.current.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    }
  }

  return (
    <section
      ref={pageRef}
      className={`${style.page} ${style[color]} ${
        sticky && style.stickyWrapper
      }`}
    >
      <div className={`${sticky && style.sticky}`} ref={stickyRef}>
        <div className={style.page__text}>
          <h2 className={style.header}>{header}</h2>
          <div className={style.subheader__wrapper}>
            <h3 className={style.subheader}>{subheader}</h3>
          </div>
        </div>
        <div className={`${sticky && style.scroll}`} ref={scrollRef}>
          {children}
        </div>
      </div>
    </section>
  );
}
