import { useEffect } from "react";

export function useVerticalScroll(
  pageRef: React.RefObject<HTMLDivElement>,
  style: CSSModuleClasses
) {
  useEffect(() => {
    const handleScroll = () => {
      if (!pageRef.current) return;
      const rect = pageRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        pageRef.current.classList.add(style.visible);
      } else {
        pageRef.current.classList.remove(style.visible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
