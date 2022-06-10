import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../components/Product";
import { Paginated } from "../components/Paginated";
import { addShoppingCart, fetchBooks } from '../redux/Actions';

import Styles from '../styles/containers/Products.module.css'

export function Products() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.completeList)
    const [index, setIndex] = useState(1)
    

    const restructuring = products.map(e => { return { name: e.title, img: { src: e.image, alt: e.title }, props: [{ prop: 'Precio', value: e.price }, { prop: 'ISBN', value: e.isbn13 }] } })

    useEffect(() => {
        dispatch(fetchBooks(index))
    }, [dispatch, index])

    const addToCart = (e, product) => {
        product.count = Number(e.target.previousElementSibling.value)
        dispatch(addShoppingCart(product))
    }

    return (
        <>
            <div className={Styles.Products}>
                <Product product={restructuring} style={Styles.product} action={addToCart}/>
            </div>
            <Paginated maxIndex={100} items={10} action={setIndex} style={Styles.Paginated} />
        </>
    )
}

