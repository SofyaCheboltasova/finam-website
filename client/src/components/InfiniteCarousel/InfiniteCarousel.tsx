import style from "./InfiniteCarousel.module.scss";

interface InfiniteCarouselProps {
  items: React.ReactNode[];
}

export function InfiniteCarousel({ items }: InfiniteCarouselProps) {
  return (
    <div className={style.carousel}>
      <div className={style.group}>
        {items.map((item, index) => {
          return (
            <div className={style.card} key={`item${index}`}>
              {item}
            </div>
          );
        })}
        {items.map((item, index) => {
          return (
            <div className={style.card} key={`item-hidden${index}`}>
              {item}
            </div>
          );
        })}
        {items.map((item, index) => {
          return (
            <div className={style.card} key={`item-hidden${index}`}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
