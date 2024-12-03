// import { InfiniteCarousel } from "../../components/InfiniteCarousel/InfiniteCarousel";
import Page from "../../components/Page/Page";
import style from "./TeamPage.module.scss";
import {PersonBlock} from "../../components/PersonBlock/PersonBlock.tsx";
import {teamData} from "../../assets/data/teamData.ts";
// import {InfiniteCarousel} from "../../components/InfiniteCarousel/InfiniteCarousel.tsx";

export default function TeamPage() {
  const header = "КВАЛИФИКАЦИЯ";
  const subheader =
    "Наша команда объединяет сертифицированных экспертов и опытных инвесторов, чьи знания и многолетняя практика гарантируют надежность и успех ваших финансовых решений";

  // function getCarousel() {
  //   const items = [];
  //   for (let i = 1; i < 4; i++) {
  //     const src = `public/images/docs/${i}.jpg`;
  //     const className = style.image__rect;
  //     const doc = <img src={src} alt="Document" className={className} />;
  //     items.push(doc);
  //   }
  //   // return <InfiniteCarousel items={items} />;
  //   return (
  //       <div className={style.docs}>
  //         {items.map((item) => (
  //             <div>
  //               {item}
  //             </div>
  //         ))}
  //       </div>
  //   )
  // }

  return (
    <Page id="team" header={header} subheader={subheader} color={"white"}>
      <div className={style.teamPage}>
        <div className={style.team}>
            {teamData.map(member =>
                <PersonBlock img={member.img} name={member.name} position={member.position} description={member.description}/>
            )}
        </div>
      {/*{getCarousel()}*/}
      </div>
    </Page>
  );
}