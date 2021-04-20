
import React,{ createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Admin from './component/Admin/Admin';
import Dashboard from './component/Dashboard/Dashboard';
import Book from './component/Book/Book';
import Bookinglist from './component/Bookinglist/Bookinglist';
import AddService from './component/AddService/AddService';
import AddAdmin from './component/AddAmin/AddAdmin';
import ManageService from './component/Manage/ManageService';
import AddReview from './component/Review/AddReview';
export const UserContext = createContext();

function App() {
const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
    <Router>
    
     <Switch>
      <Route exact path="/">
       <Home />
      </Route>
      <PrivateRoute path="/admin">
        <Admin />
      </PrivateRoute>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/book/:_id">
        <Book />
      </PrivateRoute>
      <PrivateRoute path="/book">
        <Book />
      </PrivateRoute>
    
      <PrivateRoute path="/bookingList">
       <Bookinglist />
       </PrivateRoute>

       <PrivateRoute path="/addService">
        <AddService />
      </PrivateRoute>
      
      <PrivateRoute path="/addAdmin">
        <AddAdmin />
      </PrivateRoute>

      <PrivateRoute path="/addReview">
        <AddReview />
      </PrivateRoute>

      <PrivateRoute path="/manage">
        <ManageService />
      </PrivateRoute>

      {/* <PrivateRoute path="/checkout/:_id">
        <Checkout />
      </PrivateRoute>
      <PrivateRoute path="/orders">
        <Orders />
      </PrivateRoute>
      <PrivateRoute path="/manageProduct">
        <ManageProduct />
      </PrivateRoute> */}
      <Route path="/login">
       <Login></Login>
      </Route>
     </Switch>
 
 </Router>
 </UserContext.Provider>
  );
}

export default App;
