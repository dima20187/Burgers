import { IItems, IUser } from "@/types/Items";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState{
    burger: IItems[];
    user: IUser[];
};

const initialState: IInitialState = {
    burger: [],
    user: [],
};

export const couterSlice = createSlice({
    name: 'burger',
    initialState,
    reducers:{
        incrementNumber: (state, {payload}) => {
            state.user.push({
                id: new Date().toISOString(),
                number: Number('+'+ 375 +  payload),
            });
             console.log(state.user);
        },
        decrementNumber: (state, {payload}) => {
            state.user = state.user.filter(({id})=>id === payload);
        },
        increment: (state, {payload}) => {
            {   let newCart = [...state.burger];
                const found = newCart.find(({name})=> name === payload.name);
                if(found){
                    state.burger.forEach((post)=>post.name===payload.name ?post.quantity=post.quantity + 1:post.quantity);
               return;
            }else{
                state.burger.push({
                    id: new Date().toISOString(),
                    image: payload.image,
                    name: payload.name,
                    price:payload.price,
                    quantity: payload.quantity,
                    });
            }};
        },
        decrement: (state, {payload}) => {
                state.burger = state.burger.filter(({id})=>id !== payload);
        },
        plusQuantity: (state, {payload}) => {
            let newCart = [...state.burger];
            const found = newCart.find(({name})=>name === payload.name);
            if(found){
            state.burger.forEach((post)=>post.name ===payload.name ? post.quantity = post.quantity + 1 : post.quantity);
            return;
        }
        },
        minusQuantity: (state, {payload}) => {
            let newCart = [...state.burger];
            const found = newCart.find(({name})=>name === payload.name);
            if(found){
            state.burger.forEach((post)=>post.name ===payload.name ? post.quantity=post.quantity - 1: post.quantity);
            state.burger.forEach((post)=> post.quantity ===0? post.quantity = 1 :post.quantity);
            return;
        }
        }}
})
export const {increment, decrement,plusQuantity,minusQuantity,incrementNumber,decrementNumber} = couterSlice.actions;
export default couterSlice.reducer;