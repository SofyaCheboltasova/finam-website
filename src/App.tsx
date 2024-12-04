import style from "./App.module.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { UrCustomersPage } from "./pages/UrCustomersPage/UrCustomersPage.tsx";
import PartnersPage from "./pages/PartnersPage/PartnersPage";
import TeamPage from "./pages/TeamPage/TeamPage.tsx";
import StrategiesPage from "./pages/StrategiesPage/StrategiesPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import PhysCustomersPage from "./pages/PhysCustomersPage/PhysCustomersPage.tsx";
import {useState} from "react";
import {Form} from "./components/Form/Form.tsx";

function App() {
    const [isFormOpened, setIsFormOpened] = useState(false);

  return (
    <div className={style.app}>
      <img
        src="images/backgrounds/dark_background.png"
        alt=""
        className={style.app__img}
      />
      <Header />
      <WelcomePage isFormOpened={isFormOpened} setIsFormOpened={setIsFormOpened}/>
      <PartnersPage />
      <TeamPage />
      <img
        src="images/backgrounds/dark_background-flipped.png"
        alt=""
        className={style.app__img_flipped}
      />
      <PhysCustomersPage isFormOpened={isFormOpened} setIsFormOpened={setIsFormOpened}/>
      <StrategiesPage />
      <UrCustomersPage isFormOpened={isFormOpened} setIsFormOpened={setIsFormOpened}/>
      <Footer />
      {isFormOpened && <Form setIsFormOpened={setIsFormOpened}/>}
    </div>
  );
}

export default App;