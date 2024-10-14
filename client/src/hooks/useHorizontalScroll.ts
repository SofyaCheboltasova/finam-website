import { useEffect } from "react";

export function useHorizontalScroll(
  pageRef: React.RefObject<HTMLDivElement>,
  scrollRef: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    window.addEventListener("scroll", transform);
    return () => {
      window.removeEventListener("scroll", transform);
    };
  }, []);

  function transform() {
    if (!pageRef.current || !pageRef.current.offsetTop) return;
    const offsetTop = pageRef.current.offsetTop;
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;

    if (scrollRef.current) {
      scrollRef.current.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    }
  }
}
