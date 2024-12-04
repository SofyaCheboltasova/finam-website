import style from "./PointsBlock.module.scss";
import Button from "../Button/Button.tsx";
import {IPoints} from "../../assets/data/customersData.ts";

export interface IFormState {
    isFormOpened: boolean,
    setIsFormOpened: (isFormOpened: boolean) => void,
}

interface PointsBlockProps {
    points: IPoints[],
    link: string,
    form: IFormState
}

export function PointsBlock({points, form}: PointsBlockProps) {
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
            <Button text={"Получить консультацию"} onClick={() => form.setIsFormOpened(true)}></Button>
        </div>
    );
}