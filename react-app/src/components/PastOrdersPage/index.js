import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { thunkGetPastOrders } from "../../store/orders";
import { useShoppingCart } from "../../context/ShoppingCart";
import { getAllRestaurantsWithOneMenuItemThunk } from "../../store/restaurant";
import './PastOrdersPage.css'

function PastOrdersPage({ parent }) {
    const history = useHistory()
    const dispatch = useDispatch()

    const [isLoaded, setIsLoaded] = useState(false)
    const { cart, setCart } = useShoppingCart()

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

    const handleReorder = (order) => {
        // console.log("**** order: ", order)
        setCart(order.menuItems)
        history.push("/checkout")
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
                                <button onClick={() => handleReorder(order)}>Reorder</button>
                            </div>
                        </div>
                    )))}
                </div>
            )}
        </div>
    )
}


export default PastOrdersPage
