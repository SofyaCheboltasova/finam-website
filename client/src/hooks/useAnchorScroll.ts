import { useEffect } from "react";

export function useAnchorScroll() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = document.querySelector(
        (e.currentTarget as HTMLAnchorElement).getAttribute("href")!
      ) as HTMLElement;
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener("click", handleScroll));

    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleScroll)
      );
    };
  }, []);
}
