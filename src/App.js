import Nav from './Navbar';
// import Home from './Home';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Home';
import Create from './Create';
import Blogdetails from './Blogdetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <div className="content">
        {/* <Home> </Home> */}
        <Switch>
           <Route exact path="/">
                 <Home></Home>
           </Route>
           <Route exact path="/Create">
                 <Create></Create>
           </Route>
           <Route exact path="/blogs/:id">
                 <Blogdetails></Blogdetails>
           </Route>
           <Route exact path="*">
               <NotFound></NotFound>
           </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
