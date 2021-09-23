import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import ProfilePage from "./Components/ProfilePage";
import ClientHomePage from "./Components/ClientHomePage";
import NavBar from "./Components/NavBar";
import RegsiterPageConsumer from "./Components/LoginAndRegister/RegsiterPageConsumer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/home" component={ClientHomePage} />
        <Route path="/register" component={RegsiterPageConsumer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
