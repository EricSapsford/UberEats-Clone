import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useShoppingCart } from '../../context/ShoppingCart';
import { getAllRestaurantsWithOneMenuItemThunk, getOneRestaurantThunk } from '../../store/restaurant';
import './CheckoutPage.css'

export default function CheckoutPage() {
    const dispatch = useDispatch()

    const { cart } = useShoppingCart();
    const [isLoaded, setIsLoaded] = useState(false)
    const [subtotal, setSubtotal] = useState(0)

    // const restaurants = useSelector(state=>state.restaurant.allRestaurants)
    const restaurant = useSelector(state=>state.restaurant.singleRestaurant)
    // const restaurant = restaurants[cart[0].restaurantId]

    useEffect(() => {
        dispatch(getOneRestaurantThunk(cart[0]?.restaurantId))
        setIsLoaded(true)
    }, [dispatch])

    useEffect(() => {
        let newTotal = 0;
        cart.forEach(item => {
            newTotal += item.price
        })
        setSubtotal(newTotal)
    }, [])

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

    return (
        <>
            {isLoaded && cart.length && (<div className='checkout-content'>
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
                            <button>
                                Add items
                            </button>
                        </div>
                        <div className='checkout-item-count'>{cart.length} {cart.length === 1 ? "item" : "items"}</div>
                        <div className='checkout-item-list'>
                            {cart.map(item => (
                                <div className='item-entry'>
                                    <div>1 {item.name}</div>
                                    <div>${item.price.toFixed(2)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='checkout-right'>
                    <button>Place Order</button>
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
