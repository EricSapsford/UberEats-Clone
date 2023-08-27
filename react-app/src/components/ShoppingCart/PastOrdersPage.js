import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


function PastOrdersPage() {

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

    const getMenuItems = (str) => {
        idArr = str.split(",")
        itemsArr = []
        idArr.forEach(num => {
            const item = menuItems.find(thing => thing.id === num)
            itemsArr.push(item)
        })
        return itemsArr
    }

    return (
        <>
            {orders.map((order => (
                <div>
                    <div>
                        <img src={renderRestaurantImage(order.restaurantId)} />
                    </div>
                    <div>
                        <div>Restaurant Name</div>
                        <div>${order.totalCost} • {order.createdAt.toDateString()}</div>
                        <div>{}</div>
                    </div>
                    <div>

                    </div>
                </div>
            )))}
        </>
    )
}


export default OrderPage
