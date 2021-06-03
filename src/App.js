import Header from "./Components/Header";
import Main from "./Components/Main";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailMovie from "./Components/DetailMovie";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header theme="dark" />
        <Switch>
          <Route exact path="/" children={<Main />} />
          <Route path="/:id" children={<DetailMovie />} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
