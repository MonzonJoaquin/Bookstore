
import { ProductSearch } from "../containers/ProductSearch"
import { Products } from "../containers/Products"
import Styles from "../styles/pages/Shop.module.css"
import { useState } from "react"
import { ShoppingCart } from "../containers/ShoppingCart"

export function Shop() {

    const [display, setDisplay] = useState('none')
    const setModal = () => setDisplay(display === 'none' ? 'block' : 'none')

    return <div className={Styles.Store}>
        <header className={Styles.Header}>
            <ProductSearch></ProductSearch>
        </header>
        <main className={Styles.Main}>

            <section className={Styles.Section}>
                <Products />
            </section>
            <div className={Styles.ShoppingCart}>
                <img  src="https://cdn.icon-icons.com/icons2/933/PNG/512/shopping-cart_icon-icons.com_72552.png" width={64}  alt="Carrito de compras" onClick={setModal}></img>
            </div>
            <div className={Styles.Order} style={{ display: display }}>
                 <ShoppingCart action={setModal}/>
            </div>
        </main>
    </div>
}