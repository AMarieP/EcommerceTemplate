import React from 'react';
import { Card, Paper, CardMedia, CardActions, CardActionArea, CardContent, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom';


import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
  return (
    // <Card className={classes.root}>
    //     <CardMedia className={classes.media} image={product.media.source} title={product.name} />
    //     <CardContent>
    //         <div className={classes.cardContent}>
    //             <Typography variant='h5' gutterBottom>
    //                 {product.name}
    //             </Typography>
    //             <Typography variant='h5'>
    //                 {product.formatted_with_symbol}
    //             </Typography>
    //             <Typography dangerouslySetInnerHTML={{__html:product.description}} variant='body2' colour='textSecondary' />
    //         </div>
    //     </CardContent>
    //     <CardActions disableSpacing className={classes.cardActions}>
    //         <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)} >
    //             <AddShoppingCart />
    //         </IconButton>

    //     </CardActions>
    // </Card>


  <Paper className={classes.prodCard} elevation={0} square >
    <CardActionArea component={Link} to='/cart' >
      <CardMedia
            className={classes.media}
            component='img'
            alt={product.name}
            title={product.name}
            image={product.media.source} 
            />
        <CardContent className={classes.cardContent} >
            <Typography>{product.name}</Typography>
            <Typography>{product.price.formatted_with_symbol}</Typography>
        </CardContent>
    </CardActionArea>
  </Paper>

  );
}

export default Product;