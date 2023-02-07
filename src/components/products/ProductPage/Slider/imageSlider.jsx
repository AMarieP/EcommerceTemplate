import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import { IconButton } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import useStyles from './styles'



const ImageSlider = () => {
  const classes = useStyles();
  const { scrollRef, prev, next } = useSnapCarousel();
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xycDhmDYYZ2w5fjOhKIQc5mgjFDbfvr4bxmzWr85&s',
    'https://cdn.esawebb.org/archives/images/screen/carinanebula3.jpg',
    'https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/b33c73279163c84b65241cdfcc1c8844/Fresh_Stock_Content.jpg'
  ];

  return (
    <>
    <div>
      <ul className={classes.container} ref={scrollRef}>
        {images.map((image) => (
          <li className={classes.content} >
            <img src={image} className={classes.image}/>
          </li>
        ))}
        <div className={classes.buttons} >
          <IconButton variant='elevated' className={classes.button} onClick={() => prev()}>
            <ChevronLeft />
          </IconButton>
          <IconButton className={classes.button} onClick={() => next()}>
            <ChevronRight />
          </IconButton>
        </div>
      </ul>
    </div>
    </>
  );
};

export default ImageSlider;