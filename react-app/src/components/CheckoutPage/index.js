import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useShoppingCart } from '../../context/ShoppingCart';

export default function CheckoutPage() {
    const { cart } = useShoppingCart();

    return (
        <>
            <h1>Hello from Checkout</h1>
        </>
    )
}
