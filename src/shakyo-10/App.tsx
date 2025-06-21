import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import CartPanel from './components/CartPanel';

const App: React.FC = () => (
    <CartProvider>
        <div style={{ padding: 20}}>
            <h1>useReducer 版ショッピングカート</h1>
            <ProductList />
            <CartPanel />
        </div>
    </CartProvider>
);

export default App;