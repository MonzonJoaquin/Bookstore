export function Product({ product, style, action }) {
    return <>
        {product?.map((e, i) =>
            <div key={i} className={style}>
                <h3>{e.name}</h3>
                {e.img ? <img src={e.img.src} alt={e.img.alt} /> : null}
                <div>
                    {e.props?.map((e, i) =>
                        <div key={i}>
                            <span> {e.prop} : </span><span> {e.value} </span>
                        </div>)}
                    <div>
                        {/* Sé que de esta forma aún puede haber numeros negativos pero por cuestión de tiempo lo hice así */}
                        <input type="number" id={'count' + i} min={0}/>
                        <button onClick={(event) => action(event, e)}>Añadir</button>
                    </div>
                </div>
            </div>)}
    </>
}