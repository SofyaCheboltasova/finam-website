import Page from "../../components/Page/Page";
import style from "./TeamPage.module.scss";
import {PersonBlock} from "../../components/PersonBlock/PersonBlock.tsx";
import {teamData} from "../../assets/data/teamData.ts";

export default function TeamPage() {
  const header = "КВАЛИФИКАЦИЯ";
  const subheader =
    "Наша команда объединяет сертифицированных экспертов и опытных инвесторов, чьи знания и многолетняя практика гарантируют надежность и успех ваших финансовых решений";

  return (
    <Page id="team" header={header} subheader={subheader} color={"white"}>
      <div className={style.teamPage}>
        <div className={style.team}>
            {teamData.map(member =>
                <PersonBlock img={member.img} name={member.name} position={member.position} description={member.description}/>
            )}

            {/*<div className={style.team__info}>*/}
            {/*    <p>Участие во всероссийских конференциях</p>*/}
            {/*</div>*/}
        </div>
      </div>
    </Page>
  );
}