import style from './PersonBlock.module.scss';
import {ITeam} from "../../assets/data/teamData.ts";

export function PersonBlock(props: ITeam) {
    return (
        <div className={style.block}>
            <img className={style.img} src={props.img} alt={props.name}/>
            <div className={style.content}>
                <div className={style.content__header}>
                    <h4 className={style.header__name}>{props.name}</h4>
                    <span className={style.header__position}>{props.position}</span>
                </div>
                <p className={style.content__text}>{props.description}</p>
            </div>
        </div>
    )
}