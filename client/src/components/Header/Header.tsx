import style from "./Header.module.scss";
import { useAnchorScroll } from "../../hooks/useAnchorScroll";

export function Header() {
  useAnchorScroll();

  return (
    <header className={style.header}>
      <img src="/images/logos/citadel_logo.svg" alt="Logo" />

      <nav className={style.navigation}>
        <a href="#partners">Партнеры</a>
        <a href="#team">Квалификация</a>
        <a href="#cases">Кейсы</a>
        <a href="#products">Стратегии</a>
        <a href="#contacts">Контакты</a>
      </nav>
    </header>
  );
}
