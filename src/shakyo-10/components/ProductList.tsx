import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../context/cartReducer';

/* 仮のダミーデータ。実務では API フェッチに差し替え */
const PRODUCTS: Product[] = [
    { id: 1, name: 'リンゴ', price: 120},
    { id: 2, name: 'バナナ', price: 150},
    { id: 3, name: 'ミカン', price: 100},
];

const ProductList: React.FC = () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap'}}>
        {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p}  />
        ))}
    </div>
);

export default ProductList;