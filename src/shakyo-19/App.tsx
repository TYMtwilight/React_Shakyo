import React, {useState, useEffect, useCallback} from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { Product } from './types/Product';


const App:React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(()=>{
        const initialProducts = [
            {id: 1, name: "りんご", price: 100},
            {id: 2, name: "バナナ", price: 120},
            {id: 3, name: "みかん", price: 80 },
        ];
        setProducts(initialProducts);
    },[]);

    const addToCart = useCallback((product: Product) => {
        setCart((prev) => [...prev, product]);
    }, []);

    const removeFromCart = useCallback((id: number) => {
        setCart(cart.filter((item) => item.id !== id));
    }, []);


    return (
        <div style={{ padding: '20px'}}>
            <h1>簡易ショッピングカート</h1>
            <ProductList products={products} onAdd={addToCart} />
            <Cart cartItems={cart} onRemove={removeFromCart} />
        </div>
    )
};

export default App;