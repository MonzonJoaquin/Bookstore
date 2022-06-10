import { useDispatch, useSelector } from 'react-redux'
import { withdrawShoppingCart } from '../redux/Actions';
import Styles from '../styles/containers/ShoppingCart.module.css'


export function ShoppingCart({ action }) {

    const dispatch = useDispatch()
    const products = useSelector(state => state.purchaseOrder.order)
    
    const totalPrice = products[0] ? products.map(e => Number(e.props[0].value.slice(1)) * e.count).reduce((a, b) => a + b) : null
    
    const withdrawProduct = (id) => {
        dispatch(withdrawShoppingCart(id))
    }
    return (
        <div className={Styles.Modal}>
            <div className={Styles.ContentModal}>
                <table className={Styles.Table}>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((e, i) => (
                            <tr key={i}>
                                <td>{e.name.replaceAll(' ', '-')}</td> <td>{e.count}</td> <td>{e.props[0].value}</td> <td onClick={()=>withdrawProduct(e.props[1].value)} style={{cursor: 'pointer'}}>Retirar</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>Precio total = {totalPrice}</p>
            </div>
            <span className={Styles.Exit} onClick={() => action()}>Cerrar carrito de compras</span>
        </div>
    )
}

