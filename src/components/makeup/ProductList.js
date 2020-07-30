import React from 'react';
import Product from './Product';

export default function ProductList(props) {
    let products = props.filteredProducts1.map((product) => {
        return <Product key={product.id} name={product.name} brand={product.brand} description={product.description} image={product.image_link} price={product.price}/>
    })
    return (
        <div>
            {products}
        </div>
    )
}
