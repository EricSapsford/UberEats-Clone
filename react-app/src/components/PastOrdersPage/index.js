import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { thunkGetPastOrders } from "../../store/orders";
import { getAllRestaurantsWithOneMenuItemThunk } from "../../store/restaurant";
import './PastOrdersPage.css'

function PastOrdersPage({ parent }) {
    const dispatch = useDispatch()

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(thunkGetPastOrders(user.id))
        dispatch(getAllRestaurantsWithOneMenuItemThunk())
        setIsLoaded(true)
    }, [dispatch])

    const orders = useSelector(state => state.orders.pastOrders)
    const reverseOrders = orders.reverse()
    const restaurantsObj = useSelector(state => state.restaurant.allRestaurants)
    const restaurants = Object.values(restaurantsObj)
    const user = useSelector(state => state.session.user)

    const handleReorder = () => {
        alert('nice try bud')
    }

    const handleClassName = () => {
        if (parent === 'account') {
            return 'orders-list-account'
        } else {
            return 'orders-list'
        }
    }

    return (
        <div className="orders-page">
            {isLoaded && orders.length > 0 && restaurants.length > 0 && (
                <div className={handleClassName()}>
                    <h1>Past Orders</h1>
                    {[...orders].reverse().map((order => (
                        <div className="order-container">
                            <div className="order-image">
                                <img src={restaurantsObj[order.restaurantId].imageUrl} />
                            </div>
                            <div className="order-info">
                                <div className="order-info-name">{restaurantsObj[order.restaurantId].name}</div>
                                <div>${order.totalCost.toFixed(2)} • {new Date(order.createdAt).toDateString()}</div>
                                <div className="order-items-list">
                                    {order.menuItems.map(item => (
                                        <li key={item.id}>1 {item.name}</li>
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
        </div>
    )
}


export default PastOrdersPage
