import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import RestaurantsByCategoryNav from "./components/Restaurants/categoryIndex"
import MenuItemDetails from "./components/MenuItemDetails";
import Footer from "./components/Footer";
import './app.css';
import PastOrdersPage from "./components/PastOrdersPage";
import CheckoutPage from "./components/CheckoutPage";
import WalletLandingPage from "./components/Wallet";
import { ShoppingCartProvider } from "./context/ShoppingCart";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
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

              <ProtectedRoute exact path="/account">
                <ManageAccount />
              </ProtectedRoute>

              <ProtectedRoute exact path="/wallet">
                <WalletLandingPage />
              </ProtectedRoute>

              <Route exact path="/restaurants/:restaurantId/menu">
                <RestaurantDetails />
              </Route>

              <ProtectedRoute exact path="/restaurants/:restaurantId/menu/manage">
                <RestaurantDetailsOwner />
              </ProtectedRoute>

              {/* <Route exact path="/restaurants/:category">
                <RestaurantsByCategoryNav />
              </Route> */}

              <Route exact path="/restaurants">
                <RestaurantsNav />
              </Route>

              <Route exact path="/menu-items/:menuItemId">
                <MenuItemDetails />
              </Route>

              <ProtectedRoute exact path="/past-orders">
                <PastOrdersPage />
              </ProtectedRoute>

              <Route exact path="/checkout">
                <CheckoutPage />
              </Route>

              <Route>
                <h1>Route does not exist</h1>
              </Route>
            </Switch>
          )}
        </div>
        <div id="footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
