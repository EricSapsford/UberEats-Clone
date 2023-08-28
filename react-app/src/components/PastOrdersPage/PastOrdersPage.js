import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


function PastOrdersPage() {
    dispatch = useDispatch()

    orders = useSelector(state=>state.orders.pastOrders)
    restaurants = useSelector(state=>state.restaurants)
    menuItems = useSelector(state=>state.menuItems.allMenuItems)

    const renderRestaurantImage = (id) => {
        const place = restaurants.find(restaurant => restaurant.id === id)
        return place.imageUrl
    }

    const getRestaurantName = (id) => {
        const place = restaurants.find(restaurant => restaurant.id === id)
        return place.name
    }

    const handleReorder = () => {
        
    }

    return (
        <>
            {orders.map((order => (
                <div>
                    <div>
                        <img src={renderRestaurantImage(order.restaurantId)} />
                    </div>
                    <div>
                        <div>{() => getRestaurantName(order.restaurantId)}</div>
                        <div>${order.totalCost} • {order.createdAt.toDateString()}</div>
                        <div>
                            {order.menuItems.map(item => (
                                <div>1 {item.name}</div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button>Reorder</button>
                    </div>
                </div>
            )))}
        </>
    )
}


export default OrderPage
