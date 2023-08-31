import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import ManageAccount from "./components/ManageAccount";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import ProtectedRoute from "./components/auth/ProtectedRoute"
import RestaurantDetails from "./components/RestaurantDetails";
import RestaurantDetailsOwner from "./components/RestaurantDetailsOwner";
import RestaurantsNav from "./components/Restaurants";
import RestaurantsByCatagoryNav from "./components/Restaurants/catagoryIndex"
import MenuItemDetails from "./components/MenuItemDetails";
import Footer from "./components/Footer";
import './app.css';
import PastOrdersPage from "./components/PastOrdersPage";
import CheckoutPage from "./components/CheckoutPage";

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
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/account">
            <ManageAccount />
          </Route>
          <Route exact path="/restaurants/:restaurantId/menu">
            <RestaurantDetails />
          </Route>
          <Route exact path="/restaurants/:restaurantId/menu/manage">
            <RestaurantDetailsOwner />
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
          <Route exact path="/past-orders">
            <PastOrdersPage />
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
          <Route>
            <h1>Route does not exist</h1>
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
