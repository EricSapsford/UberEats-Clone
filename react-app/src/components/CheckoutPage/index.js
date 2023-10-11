import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useShoppingCart } from '../../context/ShoppingCart';
import { getAllRestaurantsWithOneMenuItemThunk, getOneRestaurantThunk } from '../../store/restaurant';
import './CheckoutPage.css'
import { thunkCreateOrder } from '../../store/orders';
import * as sessionActions from "../../store/session";

export default function CheckoutPage() {
    const dispatch = useDispatch()
    const history = useHistory()

    const { cart, setCart } = useShoppingCart();
    const [isLoaded, setIsLoaded] = useState(false)
    const [subtotal, setSubtotal] = useState(0)

    // const restaurants = useSelector(state=>state.restaurant.allRestaurants)
    const restaurant = useSelector(state => state.restaurant.singleRestaurant)
    // const restaurant = restaurants[cart[0].restaurantId]

    useEffect(() => {
        dispatch(getOneRestaurantThunk(cart[0]?.restaurantId))
        setIsLoaded(true)
    }, [dispatch])

    useEffect(() => {
        if (cart.length) {
            let newTotal = 0;
            cart.forEach(item => {
                newTotal += item.price
            })
            setSubtotal(newTotal)
        }
    }, [])

    useEffect(() => {
        if (!cart.length) {
            setSubtotal(0)
        }
    }, [cart])

    const handleTestingFee = () => {
        let divider = .3
        let fee = divider * subtotal
        return fee.toFixed(2)
    }

    const handleTax = () => {
        let tax = .08
        let fee = tax * subtotal
        return fee.toFixed(2)
    }

    const handleTotal = () => {
        let testFee = parseFloat(handleTestingFee());
        let taxFee = parseFloat(handleTax());
        let total = subtotal + testFee + taxFee;
        return total.toFixed(2);
    }

    const placeOrder = () => {
        let itemsStr = ""
        cart.forEach(item => {
            if (!itemsStr) {
                itemsStr += item.id.toString()
            } else {
                itemsStr += "," + item.id.toString()
            }
        })

        const newOrder = {
            menuItems: itemsStr,
            totalCost: parseFloat(handleTotal()),
            restaurantId: cart[0].restaurantId
        }

        dispatch(sessionActions.updateCurrentWalletThunk(-parseFloat(handleTotal())))

        dispatch(thunkCreateOrder(newOrder))
            .then((res) => {
                if (!res.errors) {
                    history.push("/past-orders")
                    alert("Order successfully placed")
                    setCart([])
                }
            })
    }

    return (
        <>
            {isLoaded && (<div className='checkout-content'>
                <div className='checkout-left'>
                    <div className='checkout-left-top'>
                        <div className='checkout-image'>
                            <img src={restaurant.imageUrl} />
                        </div>
                        <div className='checkout-restaurant'>
                            <div className='checkout-name'>{restaurant.name}</div>
                            <div className='checkout-addy'>{restaurant.streetAddress}</div>
                        </div>
                    </div>
                    <div className='checkout-left-bottom'>
                        <div className='checkout-header'>
                            <span>Order Summary</span>
                            <button onClick={() => history.push(`/restaurants/${restaurant.id}/menu`)}>
                                Add items
                            </button>
                        </div>
                        <div className='checkout-item-count'>{cart.length} {cart.length === 1 ? "item" : "items"}</div>
                        <div className='checkout-item-list'>
                            {cart.length ? cart.map(item => (
                                <div className='item-entry'>
                                    <div>1 {item.name}</div>
                                    <div>${item.price.toFixed(2)}</div>
                                </div>
                            )) : (
                                <div className='item-entry'>
                                    Your cart is empty
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='checkout-right'>
                    <button onClick={() => placeOrder()}>Place Order</button>
                    <div className='checkout-total-summary'>
                        <div className='checkout-header' id='order-total'>
                            Order Total
                        </div>
                        <div className='checkout-item-list'>
                            <div className='item-entry'>
                                <div>Subtotal</div>
                                <div>${subtotal.toFixed(2)}</div>
                            </div>
                            <div className='item-entry'>
                                <div>Testing Fee</div>
                                <div>${handleTestingFee()}</div>
                            </div>
                            <div className='item-entry'>
                                <div>Taxes & Other Fees</div>
                                <div>${handleTax()}</div>
                            </div>
                        </div>
                        <div className='checkout-header'>
                            <div>Total</div>
                            <div>${handleTotal()}</div>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    )
}
