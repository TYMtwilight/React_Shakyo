/* ---------------- 1. 型定義 ---------------- */

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type CartItem = Product & { qty: number };

/* ---------------- 2. Action 型 ---------------- */
// payload の型まで縛っておくとエディタ補完が強力になります
export type CartAction =
  | { type: "ADD"; payload: Product }
  | { type: "REMOVE"; payload: number } // id
  | { type: "CHANGE_QTY"; payload: { id: number; qty: number } }
  | { type: "CLEAR" };

/* ---------------- 3. reducer 本体 ---------------- */
export const cartReducer = (
  state: CartItem[],
  action: CartAction
): CartItem[] => {
  switch (action.type) {
    case "ADD":
      // すでに存在するなら qty +1
      const idx = state.findIndex((i) => i.id === action.payload.id);
      if (idx !== -1) {
        return state.map((item, i) =>
          i === idx ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // 新規追加
      return [...state, { ...action.payload, qty: 1 }];
    case "REMOVE":
      return state.filter((i) => i.id !== action.payload);
    case "CHANGE_QTY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item
      );
    case "CLEAR":
      return [];
    default:
      return state;
  }
};
