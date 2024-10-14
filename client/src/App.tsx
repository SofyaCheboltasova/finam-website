import style from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { CasesPage } from "./pages/CasesPage/CasesPage";
import PartnersPage from "./pages/PartnersPage/PartnersPage";
import QualificationPage from "./pages/QualificationPage/QualificationPage";
import StrategiesPage from "./pages/StrategiesPage/StrategiesPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <section id="/">
        <WelcomePage />
      </section>
      <section id="partners">
        <PartnersPage />
      </section>
      <section id="products">
        <StrategiesPage />
      </section>
      <section id="team">
        <QualificationPage />
      </section>
      <section id="cases">
        <CasesPage />
      </section>
    </div>
  );
}

export default App;
