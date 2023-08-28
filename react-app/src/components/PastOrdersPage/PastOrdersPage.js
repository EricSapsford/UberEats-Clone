import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkGetPastOrders } from "../../store/orders";
import { getAllRestaurantsWithOneMenuItemThunk } from "../../store/restaurant";
import './PastOrdersPage.css'

function PastOrdersPage() {
    const dispatch = useDispatch()

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(thunkGetPastOrders(user.id))
        dispatch(getAllRestaurantsWithOneMenuItemThunk())
        setIsLoaded(true)
    }, [dispatch])

    const orders = useSelector(state=>state.orders.pastOrders)
    const restaurantsObj = useSelector(state=>state.restaurant.allRestaurants)
    const restaurants = Object.values(restaurantsObj)
    console.log("restaurants: ", restaurants)
    const user = useSelector(state=>state.session.user)

    const renderRestaurantImage = (id) => {
        return restaurantsObj[id].imageUrl
    }

    const getRestaurantName = (id) => {
        return restaurantsObj[id].name
    }

    const handleReorder = () => {
        alert('nice try bud')
    }

    return (
        <>
            {isLoaded && orders.length > 0 && restaurants.length > 0 && (
                <div className="orders-list">
                    <h1>Past Orders</h1>
                    {orders.map((order => (
                        <div className="order-container">
                            <div className="order-image">
                                <img src={restaurantsObj[order.restaurantId].imageUrl} />
                            </div>
                            <div className="order-info">
                                <div className="order-info-name">{restaurantsObj[order.restaurantId].name}</div>
                                <div>${order.totalCost.toFixed(2)} • {new Date(order.createdAt).toDateString()}</div>
                                <div className="order-items-list">
                                    {order.menuItems.map(item => (
                                        <li>1 {item.name}</li>
                                    ))}
                                </div>
                            </div>
                            <div className="reorder-div">
                                <button onClick={() => handleReorder()}>Reorder</button>
                            </div>
                        </div>
                    )))}
                </div>
            )}
        </>
    )
}


export default PastOrdersPage
