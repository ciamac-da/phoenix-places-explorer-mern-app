import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Footer from './shared/components/Footer/Footer';
import NotFound from './shared/components/NotFound/NotFound';
import UserPlaces from './places/pages/UserPlaces';


const App = () => {
  return (
    <Router>
    <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places/" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces />
        </Route>
        <Route                                  component={NotFound}     /> 
        <Route path="*" exact                   component={NotFound}     />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
