import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    // console.log('CartContext', CartContext)
    const numberOfCartItems = items.reduce((curNumber, item) => {
        // console.log(curNumber, item.amount)
        return curNumber + item.amount

    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);

        return () => {
            clearTimeout(timer);
        };

    }, [items]);

    // console.log('numberOfCartItems', numberOfCartItems)
    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
};

export default HeaderCartButton;