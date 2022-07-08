


export default function BuyProductForm(){
    return(
        <>
        <form className="is-flex is-flex-direction-column">
            <h1 className="title is-size-5 mt-3 mb-2">Ordenar</h1>
            <label className="label">Cantidad</label>
            <input type="text" className="input mb-4" style={{width:"100px"}} />
            <button className="button is-info mb-3">Comprar</button>
            <button className="button is-link">Añadir al carrito</button>
        </form>
        </>
    )
}