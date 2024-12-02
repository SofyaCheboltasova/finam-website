import style from "../StrategyBlock/StrategyBlock.module.scss";
import Button from "../Button/Button.tsx";
import {ReactNode} from "react";

interface StrategyBlockProps {
    id: number,
    link: string,
    name: string,
    src?: string;
    children?: ReactNode,
}

export function InfoBlock({id, link, name, src, children }: StrategyBlockProps) {
    function handleClick() {
        window.open(link, "_blanc");
    }
    return (
        <article className={style.block} key={id} onClick={handleClick}>
            <h4 className={style.header}>{name}</h4>
            <div className={style.content}>
                {children}
            </div>
            <img className={style.image} src={src} alt="Chart" />
            <Button text={"Узнать больше"} href={link}></Button>
        </article>
    );
}