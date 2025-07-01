import React, { memo } from 'react';
import ProductItem from './ProductItem';
import { Product } from '../types/Product';

type Props = {
    products: Product[];
    onAdd: (product: Product) => void;
};

const ProductList: React.FC<Props> = memo(({products, onAdd}) => {
    return (
        <div>
            <h2>商品一覧</h2>
            <ul>
                {products.map((product) => 
                    <ProductItem product={product} onAdd={onAdd} />
                )}
            </ul>
        </div>
    );
});

export default ProductList;