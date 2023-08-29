import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useShoppingCart } from '../../context/ShoppingCart';
import './ShoppingCart.css'


export default function ShoppingCartModal() {
    const dispatch = useDispatch();
    const ulRef = useRef();

    const { cart, setCart } = useShoppingCart()
    const [showMenu, setShowMenu] = useState(false)

    const toggleCart = () => {
        setShowMenu(!showMenu)
    }

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

    const ulClassName = "cart-dropdown" + (showMenu ? "" : " hidden");

    return (
        <>
            <button className='shopping-cart' onClick={() => toggleCart()}>
              <i class="fa-solid fa-cart-shopping"></i>
              <div>Cart</div>
            </button>
            <div>
                {showMenu && (
                    <div className={ulClassName} ref={ulRef}>
                        <div className='cart-contents'>
                            <button onClick={() => setShowMenu(false)}>
                                <i class="fa-solid fa-x"></i>
                            </button>
                            <div className='cart-restaurant'>Restaurant</div>
                            <div className='cart-restaurant-address'>Restaurant Address</div>
                            <div className='cart-quantity'># of items</div>
                            <div className='cart-item-list'>
                                {!cart.length ? (<div>No items in your cart</div>) :
                                    cart.map(item => (
                                        <div>
                                            <div>1 {item.name}</div>
                                            <div>${item.price}</div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='cart-total'>
                                <div>Subtotal</div>
                                <div>$##.##</div>
                            </div>
                        </div>
                        <div className='cart-buttons'>
                            <button className='cart-checkout'>Go to checkout</button>
                            <button>Add items</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
