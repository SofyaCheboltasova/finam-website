import style from "./InfiniteCarousel.module.scss";

interface InfiniteCarouselProps {
  items: React.ReactNode[];
}

export function InfiniteCarousel({ items }: InfiniteCarouselProps) {
  return (
    <div className={style.carousel}>
      <div className={style.group}>
        {items.map((item) => {
          return <div className={style.card}>{item}</div>;
        })}
      </div>
      <div aria-hidden className={style.group}>
        {items.map((item) => {
          return <div className={style.card}>{item}</div>;
        })}
      </div>
    </div>
  );
}
