import React, { createContext, useReducer, ReactNode, Dispatch, useContext } from 'react';
import { cartReducer, CartItem, CartAction } from './cartReducer';

/* ---------- Context 作成 ---------- */
const CartStateContext = createContext<CartItem[] | undefined>(undefined);
const CartDispatchContext = createContext<Dispatch<CartAction> | undefined>(undefined);

/* ---------- Provider ---------- */
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, []);

    return (
        <CartStateContext value={state}>
            <CartDispatchContext value={dispatch}>
                {children}
            </CartDispatchContext>
        </CartStateContext>
    );
};

/* ---------- カスタム Hook（推奨） ---------- */
export const useCartState = () => {
    const ctx = useContext(CartStateContext);
    if(!ctx) throw new Error("useCartState は CartProvider 配下で呼んでください");
    return ctx;
};

export const useCartDispatch = () => {
    const ctx = useContext(CartDispatchContext);
    if(!ctx) throw new Error("useCartDispatch は CartProvider 配下で呼んでください");
    return ctx;
}