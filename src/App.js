import "./App.css";
<<<<<<< HEAD
import Navbar from "./components/Sidebar/Navbar";
import DashBoard from "./components/DashBoard/DashBoard";
import ArtDisplay from "./components/ArtDisplay/ArtDisplay";
import About from "./components/About/About";
import Contributor from "./components/Contributor/Contributor";

=======
import DashBoard from "./components/DashBoard/DashBoard";
import ArtDisplay from "./components/ArtDisplay/ArtDisplay";
>>>>>>> ec476dc49a5e33d74d3862ed561b0b34bfca521b
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useParams,
} from "react-router-dom";
function App() {
  return (
    <Router>
<<<<<<< HEAD
        <Navbar/>
        <div className="App">
        <div className="leaf">
        <div className="sq1"></div>
        <div className="sq2"></div>
        </div>
        <Switch>

          <Route path="/art" component={ArtDisplay}/>
          <Route path="/about" component={About}/>
          <Route path="/contributor" component={Contributor}/>
          <Route path="/" component={DashBoard}/>

        </Switch>
        </div>

=======
      <div className="App">
        <Switch>
          <Route path="/art">
            <ArtDisplay></ArtDisplay>
          </Route>
          <Route path="/">
            <DashBoard></DashBoard>
          </Route>
        </Switch>
      </div>
>>>>>>> ec476dc49a5e33d74d3862ed561b0b34bfca521b
    </Router>
  );
}

export default App;
