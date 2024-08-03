import { createSlice } from "@reduxjs/toolkit";
import startContacts from '../../Contacts.json';


const initialState = {
    items: startContacts
}

const slice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        deletContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        addContact: (state, action) => {
            state.items.push(action.payload);
        }
    },
})

export const contactReduser = slice.reducer;
export const {deletContact} = slice.actions;
export const {addContact} = slice.actions;