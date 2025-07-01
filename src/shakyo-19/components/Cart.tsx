import React, { memo } from 'react';
import { Product } from '../types/Product';

type Props = {
    cartItems: Product[];
    onRemove: (id: number) => void;
};

const Cart:React.FC<Props> = memo(({cartItems, onRemove}) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <h2>カート</h2>
            {cartItems.length === 0 ? (
                <p>カートは空です</p>
            ) : (
                <ul>
                    {cartItems.map(({id, name, price}) => (
                        <li key={id}>
                            {name} - ¥{price}
                            <button style={{ marginLeft: '10px' }}
                                onClick={() => onRemove(id)}
                            >
                                削除
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <p>合計金額： ¥{total}</p>
        </div>
    )
});

export default Cart;