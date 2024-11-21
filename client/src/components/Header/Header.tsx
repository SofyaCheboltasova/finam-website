import style from "./Header.module.scss";
import { useAnchorScroll } from "../../hooks/useAnchorScroll";
import { useState } from "react";

export function Header() {
  useAnchorScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={style.header}>
      <div className={style.header_top}>
        <img src="/images/logos/citadel_logo.svg" alt="Logo" />

        <div className={style.burger} onClick={toggleMenu}>
          <span className={menuOpen ? style.burgerOpen : ""}></span>
          <span className={menuOpen ? style.burgerOpen : ""}></span>
          <span className={menuOpen ? style.burgerOpen : ""}></span>
        </div>
      </div>

      <nav
        className={`${style.header_nav} ${menuOpen ? style.open : ""}`}
        onClick={toggleMenu}
      >
        <a href="#partners">Партнеры</a>
        <a href="#team">Квалификация</a>
        <a href="#cases">Кейсы</a>
        <a href="#products">Стратегии</a>
        <a href="#contacts">Контакты</a>
      </nav>
    </header>
  );
}
