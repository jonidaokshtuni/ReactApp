import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    // console.log('CartContext', CartContext)
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        // console.log(curNumber, item.amount)
        return curNumber + item.amount

    }, 0);
    // console.log('numberOfCartItems', numberOfCartItems)
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
};

export default HeaderCartButton;