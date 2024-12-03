import style from "./App.module.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { UrCustomersPage } from "./pages/UrCustomersPage/UrCustomersPage.tsx";
import PartnersPage from "./pages/PartnersPage/PartnersPage";
import QualificationPage from "./pages/QualificationPage/QualificationPage";
import StrategiesPage from "./pages/StrategiesPage/StrategiesPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import PhysCustomersPage from "./pages/PhysCustomersPage/PhysCustomersPage.tsx";

function App() {
  return (
    <div className={style.app}>
      <img
        src="images/backgrounds/dark_background.png"
        alt=""
        className={style.app__img}
      />
      <Header />
      <WelcomePage />
      <PartnersPage />
      <QualificationPage />
      <img
        src="images/backgrounds/dark_background-flipped.png"
        alt=""
        className={style.app__img_flipped}
      />
      <PhysCustomersPage/>
      <StrategiesPage />
      <UrCustomersPage />
      <Footer />
    </div>
  );
}

export default App;