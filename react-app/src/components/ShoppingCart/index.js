import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useShoppingCart } from '../../context/ShoppingCart';
import './ShoppingCart.css'
import { getAllRestaurantsWithOneMenuItemThunk } from '../../store/restaurant';

export default function ShoppingCartModal() {
    const dispatch = useDispatch();
    const ulRef = useRef();

    const { cart, setCart } = useShoppingCart()
    const [showMenu, setShowMenu] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [total, setTotal] = useState(0)

    const restaurants = useSelector(state=>state.restaurant.allRestaurants)

    useEffect(() => {
        let newTotal = 0;
        cart.forEach(item => {
            newTotal += item.price
        })
        setTotal(newTotal)
    }, [cart])

    useEffect(() => {
        dispatch(getAllRestaurantsWithOneMenuItemThunk())
        setIsLoaded(true)
    }, [dispatch])

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            if (!ulRef.current) return
            if (!ulRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const toggleCart = () => {
        setShowMenu(!showMenu)
    }

    const ulClassName = "cart-dropdown" + (showMenu ? "" : " hidden");

    return (
        <>
            <button className='shopping-cart' onClick={() => toggleCart()}>
                <i class="fa-solid fa-cart-shopping"></i>
                <div>Cart</div>
            </button>
            <div>
                {showMenu && isLoaded && (
                    <div className={ulClassName} ref={ulRef}>
                        <div className='cart-contents'>
                            <button onClick={() => setShowMenu(false)}>
                                <i class="fa-solid fa-x"></i>
                            </button>
                            <div className='cart-restaurant'>{restaurants[cart[0].restaurantId].name}</div>
                            <div className='cart-restaurant-address'>{restaurants[cart[0].restaurantId].streetAddress}</div>
                            <div className='cart-quantity'>{cart.length} {cart.length === 1 ? "item" : "items"}</div>
                            <div className='cart-item-list'>
                                {!cart.length ? (<div>No items in your cart</div>) :
                                    cart.map(item => (
                                        <div className='item-entry'>
                                            <div>1 {item.name}</div>
                                            <div>${item.price.toFixed(2)}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='cart-total'>
                                <div>Subtotal</div>
                                <div>${total.toFixed(2)}</div>
                            </div>
                        </div>
                        <div className='cart-buttons'>
                            <button className='cart-checkout' onClick={() => alert('Feature coming soon!')}>Go to checkout</button>
                            <button>Add items</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
