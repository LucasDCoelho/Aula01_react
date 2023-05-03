import { Header } from "./components/Header";
import Welcome from "./components/Welcome";
import "./components/base.css"

const App = () => {
  return (
    <>
        <Header />
        <Welcome nome="Natan Apagador"/>
        <h2>Natan apaga pasta</h2>
    </>
  );
}


export default App