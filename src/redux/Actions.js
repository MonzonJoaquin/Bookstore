import axios from "axios";

// import actions
import { setCompleteList, addOrder, withdrawOrder, login, logout } from "./Reducer";


//Books
export const fetchBooks = (page) => (dispatch) => {
    axios.get(`https://api.itbook.store/1.0/search/all/${page}`)
        .then(response => {  dispatch(setCompleteList(response.data.books))})
        .catch(e => console.error(e))
} //http://books.cloudfoundry.com/data/books

//ShoppingCart

export const addShoppingCart = (product) => (dispatch) => {
    dispatch(addOrder(product))
}

export const withdrawShoppingCart = (id) => (dispatch) => {
    dispatch(withdrawOrder(id))
}

//User

export const registerUser = (user) => {
    axios.post('https://reqres.in/api/register', user)
        .then(r => console.log(r))
        .catch(e => console.error(e))
}

export const loginUserAPI = (user) => {
    axios.post('https://reqres.in/api/register', user)
        .then(r => console.log(r))
        .catch(e => console.error(e))
}

export const loginUser = (user) => (dispatch) => {
    dispatch(login(user))
}

export const logoutUser = () => (dispatch) => {
    dispatch(logout())
}
