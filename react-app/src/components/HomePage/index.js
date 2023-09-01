import React from 'react';
import { useSelector } from 'react-redux';
import RestaurantsNav from '../Restaurants';
import HomePage from './HomePage';
import './HomePage.css';

export default function BannerLogic() {
  const sessionUser = useSelector(state => state.session.user)

  return (
    <>
      {sessionUser ? <RestaurantsNav /> : <HomePage />}
    </>
  )
}
