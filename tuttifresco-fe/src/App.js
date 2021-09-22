import logo from "./logo.svg";
import "./App.css";
import ProfilePage from "./Components/ProfilePage";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ProfilePage />
    </div>
  );
}

export default App;
