import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        completeList: [],

    },
    reducers: {
        setCompleteList: (state, action) => {
            state.completeList = action.payload
        },
        filterBooks: (state, action) => {
            state.completeList = action.payload===''?state.completeList:state.completeList.filter(e => e.title.toLowerCase().startsWith(action.payload.toLowerCase()))
        }
    }
})

export const { setCompleteList, filterBooks} = productsSlice.actions
export const products = productsSlice.reducer


export const purchaseOrderSlice = createSlice({
    name: 'purchaseOrder',
    initialState: {
        order: []
    },
    reducers: {
        addOrder: (state, action) => {
            state.order.push(action.payload) 
        },
        withdrawOrder: (state, action) => {
            state.order = state.order.filter(e => e.props[1].value !== action.payload)
        }
    }
})

export const {addOrder, withdrawOrder} = purchaseOrderSlice.actions
export const purchaseOrder = purchaseOrderSlice.reducer

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state, _) => {
            state.user = {}
        }
    }
})

export const {login, logout} = userSlice.actions
export const user = userSlice.reducer