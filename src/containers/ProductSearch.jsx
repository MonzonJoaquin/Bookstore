import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchBar } from "../components/SearchBar";
import { fetchBooks } from "../redux/Actions";
import { filterBooks } from "../redux/Reducer";


export function ProductSearch() {
    const dispatch = useDispatch()
    const [valueSearch, setValueSearch] = useState('')

    const search = () => {
        dispatch(filterBooks(valueSearch))
    }

    const reset = () => {
        dispatch(fetchBooks(1))
    }

    return <SearchBar id={'search_bar'} search={() => search()} content={"Buscar"} update={(e) => setValueSearch(e)} reset={()=>reset()}></SearchBar>
}