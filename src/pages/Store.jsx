import { ProductSearch } from "../containers/ProductSearch"
import Styles from "../styles/pages/Store.module.css"

export function Store() {
    return <div className={Styles.Store}>
        <header>
            <ProductSearch></ProductSearch>
        </header>
        <main>
            <aside>
             {/* <Filter></Filter> */}
            </aside>
            <section>
             {/* <Products></Products> */}
            </section>
        </main>
    </div>
}