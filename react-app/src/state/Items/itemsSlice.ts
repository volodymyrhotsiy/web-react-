import { createSlice } from "@reduxjs/toolkit";

interface ItemsState {
    itemsList: any[];
}

const initialState: ItemsState = {
    itemsList: [],
}

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.itemsList.push(action.payload);
        },
        removeItem: (state, action) => {
            const item_title = action.payload.title;
            state.itemsList = state.itemsList.filter(item => item.title !== item_title);
        },
    },
});

export const { addItem, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
