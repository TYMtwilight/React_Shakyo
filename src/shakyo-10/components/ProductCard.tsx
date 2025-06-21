import React from 'react';
import { Product } from '../context/cartReducer';
import { useCartDispatch } from '../context/CartContext';

type Props = { product: Product };

const ProductCard: React.FC<Props> = ({ product }) => {
    const dispatch = useCartDispatch();

    return (
        <div style={{ border: '1px solid #ddd', padding: 12, width: 180 }}>
            <h4>{product.name}</h4>
            <p>¥{product.price.toLocaleString()}</p>
            <button onClick={() => dispatch({type: 'ADD', payload: product})}>
                カートに追加
            </button>
        </div>
    );
};

export default ProductCard;