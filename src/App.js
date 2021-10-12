import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import HansonAi from './Pages/HansonAi/HansonAi';
import About from './Pages/Home/About/About';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Resources from './Pages/Resources/Resources';
import Robots from './Pages/Robots/Robots';

function App() {
  return (
    <div className="App">
     <Router>
     <Header></Header>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/robots">
                <Robots/>
              </Route>
              <Route path="/hansonai">
                <HansonAi/>
              </Route>
              <Route path="/resources">
                <Resources/>
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
              <Route exact ="*">
                <NotFound/>
              </Route>
          </Switch>
     </Router>
    </div>
  );
}

export default App;
