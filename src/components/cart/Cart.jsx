import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import { Link } from 'react-router-dom';

import useStyles from './styles'
import CartItem from './cartItem/CartItem';

const Cart = ({cart, handleEmptyCart, handleRemoveFromCart, handleUpdateCartQty}) => {
    
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no items in your cart 
            <Link to='/' className={classes.link}>
            start adding some!
            </Link>
        </Typography>
    );

    const FilledCart = () =>(
        <>
            <Grid container spacing={3} >
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQuantity={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography varient='h4' >
                    subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} onClick={handleEmptyCart} size='large' type='button' variant='contained' colour='secondary'>
                        Empty Cart
                    </Button>
                    <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' colour='primary'>
                        Checkout
                    </Button>

                </div>
            </div>

        </>
    )

    if(!cart.line_items) return 'Loading...';


  return (
    <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart