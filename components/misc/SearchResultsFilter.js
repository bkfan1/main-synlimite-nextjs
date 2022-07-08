import Link from "next/link"

const states = [
    "Aragua",
    "Distrito capital",
    "Falcón",
    "Zulia",
]

const categories = [
    "Categoria 1",
    "Categoria 2",
    "Categoria 3",
    "Categoria 4",
]

export default function SearchResultsFilter(){
    return(
        <>
        <aside className="searchResultsFilter pt-3 px-2">
            <header className="p-3">
                <h1 className="title is-size-5">Resultados de búsqueda</h1>
            </header>

            <section className="p-2">
                <form className="has-background-white p-2">
                <input type="checkbox" className="mr-2"/>

                    <label>Envíos gratis</label>
                </form>

            </section>

            <section className="mb-2 p-3">
                <h1 className="title is-size-5 mb-2">Ubicación</h1>
                <ul>
                {states.map((state, index)=>(
                    <li key={index}>
                        <Link href="/" >
                        <a className="has-text-grey">{state}</a>
                    </Link>
                    </li>
                ))}
                </ul>

            </section>

            <section className="mb-3 p-3">
                <h1 className="title is-size-5 mb-2">Categorías</h1>
                <ul>
                {categories.map((category, index)=>(
                    <li key={index}>
                        <Link href="/" >
                        <a className="has-text-grey">{category}</a>
                    </Link>
                    </li>
                ))}
                </ul>

            </section>

            <section className="p-3">
                <form>
                    <h1 className="title is-size-5 mb-3">Precio</h1>

                    <div className="is-flex">
                    <div className="field mr-4">
                        <label className="label">Desde</label>
                        <input type="text" className="input" style={{width:"80px"}} />
                    </div>
                    <div className="field">
                        <label className="label">Hasta</label>
                        <input type="text" className="input" style={{width:"80px"}} />
                    </div>
                    </div>

                </form>
            </section>


        </aside>
        </>
    )
}