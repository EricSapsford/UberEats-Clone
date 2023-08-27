import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/auth/ProtectedRoute"
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantsNav from "./components/Restaurants";
import RestaurantsByCatagoryNav from "./components/Restaurants/catagoryIndex"
import MenuItemDetails from "./components/MenuItemDetails";
import './app.css';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/restaurants/:restaurantId/menu">
            <RestaurantDetails />
          </Route>
          <Route exact path="/restaurants/:catagory">
            <RestaurantsByCatagoryNav />
          </Route>
          <Route exact path="/restaurants">
            <RestaurantsNav />
          </Route>
          <Route exact path="/menu-items/:menuItemId">
            <MenuItemDetails />
          </Route>
          <Route>
            <h1>Route does not exist</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
