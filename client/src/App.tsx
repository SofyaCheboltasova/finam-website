import style from "./App.module.scss";
import PartnersPage from "./pages/PartnersPage/PartnersPage";
import QualificationPage from "./pages/QualificationPage/QualificationPage";
import StrategiesPage from "./pages/StrategiesPage/StrategiesPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <div className={style.app}>
      <WelcomePage />
      <PartnersPage />
      <StrategiesPage />
      <QualificationPage />
    </div>
  );
}

export default App;

