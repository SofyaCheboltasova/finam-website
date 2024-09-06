import style from "./App.module.scss";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <div className={style.app}>
      <WelcomePage />
    </div>
  );
}

export default App;

