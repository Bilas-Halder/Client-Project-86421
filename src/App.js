import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Introduction from './Pages/Workshop/Intoduction/Introduction';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path="/">
         <Home></Home>
        </Route>
        <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/introduction">
         <Introduction></Introduction>
        </Route>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
