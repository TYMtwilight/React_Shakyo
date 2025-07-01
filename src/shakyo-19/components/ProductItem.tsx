import React, { memo } from 'react';
import { Product } from '../types/Product';

type Props = {
    product: Product;
    onAdd: (product: Product) => void;
};

const ProductItem: React.FC<Props> = memo(({ product, onAdd}) => {
    const { id, name, price } = product;

    return (
        <li key={id} style={{ marginBottom: '8px'}}>
            <button
                onClick={() => onAdd(product)}
                style={{ marginLeft: '10px' }}
            >
                {name} - ¥{price}
            </button>
        </li>
    )
});

export default ProductItem;