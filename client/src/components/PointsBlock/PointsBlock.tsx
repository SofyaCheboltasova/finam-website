import style from "./PointsBlock.module.scss";
import Button from "../Button/Button.tsx";
import {IPoints} from "../../assets/data/customersData.ts";

interface PointsBlockProps {
    points: IPoints[],
    link: string,
}

export function PointsBlock({points, link}: PointsBlockProps) {
    return (
        <div className={style.block}>
            <div className={style.points}>
                {points.map(point => {
                    const {id, name, description, footnote, link} = point;
                    return (
                        <div key={id} className={style.point}>
                            <h4 className={style.header}>{name}</h4>
                            {footnote && <span className={style.footnote}>{`*${footnote}`}</span>}
                            <p className={style.description}>{description}</p>
                            {link && <a href={link.href} target={'_blank'} className={style.link}>{link.name}</a>}
                        </div>
                    )
                })}
            </div>
            <Button text={"Получить консультацию"} href={link}></Button>
        </div>
    );
}