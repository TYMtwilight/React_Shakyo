import React, { memo } from 'react';
import { Product } from '../types/Product';

type Props = {
    product: Product;
    onAdd: (product: Product) => void;
};

const ProductItem: React.FC<Props> = memo(({ product, onAdd}) => {
    const {id, name, price} = product;

    return (
        <li style={{ marginBottom: '8px' }}>
            {name} - ¥{price}
            <button
                style={{ marginLeft: '10px'}}
                onClick={() => onAdd(product)}
            >
                カートに追加
            </button>
        </li>
    )
});

export default ProductItem;