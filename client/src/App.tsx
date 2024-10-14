import style from "./App.module.scss";
import { Footer } from "./components/Footer/Footer";
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
      <WelcomePage />
      <PartnersPage />
      <QualificationPage />
      <CasesPage />
      <StrategiesPage />
      {/* <Form/> */}
      <Footer />
    </div>
  );
}

export default App;
