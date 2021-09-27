import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import ProfilePage from "./Components/ProfilePage";
import ClientHomePage from "./Components/ClientHomePage";
import NavBar from "./Components/NavBar";
import RegisterPage from "./Components/LoginAndRegister/RegisterPage";
import WelcomePage from "./Components/WelcomePage";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/home" component={ClientHomePage} />

        <Route
          path="/register"
          render={(routerProps) => <RegisterPage routerProps={routerProps} />}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
