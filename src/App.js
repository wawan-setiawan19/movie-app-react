import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailMovie from "./pages/DetailMovie";
import About from "./pages/About";
import Fitur from "./pages/Fitur";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header theme="dark" />
        <Switch>
          <Route exact path="/" children={<Main />} />
          <Route exact path="/about" children={<About />} />
          <Route exact path="/fitur" children={<Fitur />} />
          <Route path="/:id" children={<DetailMovie />} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
