import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Introduction from './Pages/Workshop/Intoduction/Introduction';
import QuestionSetWorkOne from './Pages/Workshop/QuestionSetWorkOne/QuestionSetWorkOne';
import QuestionSetWorkTwo from './Pages/Workshop/QuestionSetWorkTwo/QuestionSetWorkTwo';
import Survey from './Pages/Workshop/Survey/Survey';
import Profile from './Pages/Dashboard/Profile/Profile';
import QuestionSetOneDash from './Pages/Dashboard/QuestionSetOneDash/QuestionSetOneDash';
import QuestionSetTwoDash from './Pages/Dashboard/QuestionSetTwoDash/QuestionSetTwoDash';
import DashSurvey from './Pages/Dashboard/DashSurvey/DashSurvey';

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

        <Route path="/questionworksetone">
         <QuestionSetWorkOne></QuestionSetWorkOne>
        </Route>

        <Route path="/questionworksettwo">
         <QuestionSetWorkTwo></QuestionSetWorkTwo>
        </Route>

        <Route path="/survey">
        <Survey></Survey>
        </Route>

        <Route path="/profile">
        <Profile></Profile>
        </Route>

        <Route path="/questionsetonedash">
        <QuestionSetOneDash></QuestionSetOneDash>
        </Route>
        <Route path="/questionsettwodash">
        <QuestionSetTwoDash></QuestionSetTwoDash>
        </Route>
        <Route path="/dashsurvey">
        <DashSurvey></DashSurvey>
        </Route>



        
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
