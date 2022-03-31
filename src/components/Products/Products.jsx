import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//       { id: 1, name: 'Shoes', description: 'Running shoes', price: '5', image: 'https://ae01.alicdn.com/kf/HTB17x2ZXDjxK1Rjy0Fnq6yBaFXaX/AODLEE-Plus-Size-38-48-Fashion-Men-Sneakers-for-Men-Casual-Shoes-Laces-Male-Footwear-Mens.jpg_Q90.jpg_.webp'},
//       {id: 2, name: 'Mac book', description: 'Apple macbook', price: '100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdARGhnOT9T3Nf3seZ-lZrLZf0nnWys8DGlQ&usqp=CAU'},

// ]

const Products = ({ products }) => {
  const classes = useStyles();
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product}  />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

