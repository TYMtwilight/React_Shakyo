import React, { useCallback, memo } from 'react';
import { useCartState, useCartDispatch } from '../context/CartContext';

const CartPanel: React.FC = memo(() => {
    const cart = useCartState();
    const dispatch = useCartDispatch();
    
    /* 金額計算は useCallback + reduce で最小限再計算 */
    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    const changeQty = useCallback(
        (id: number, qty: number) => dispatch({ type: 'CHANGE_QTY', payload: { id, qty }}),
        [dispatch]
    );

    if(cart.length === 0) return <p>カートは空です</p>;

    return (
        <div style={{ marginTop: 24}}>
            <h3>カート内容</h3>
            <ul>
                {cart.map((item) => (
                    <li key={item.id} style={{ marginBottom: 6}}>
                        {item.name} / ¥{item.price} ×
                        <input 
                            type="number"
                            min={1}
                            value={item.qty}
                            onChange={(e) => changeQty(item.id, Number(e.target.value))}
                            style={{ width: 50, margin: '0 4px'}}
                        />
                        <button onClick={() => dispatch({ type: 'REMOVE', payload: item.id})}>
                            削除
                        </button>
                    </li>
                ))}
            </ul>
            <p>合計: <strong>¥{total.toLocaleString()}</strong></p>
            <button onClick={() => dispatch({ type: 'CLEAR'})}>カートを空にする</button>
        </div>
    );
});

export default CartPanel;