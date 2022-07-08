import Link from "next/link";

const categories = ["Categoria", "Categoria"];

export default function BusinessProfileInfoCard() {
  return (
    <>
      <aside className="businessProfileInfoCard is-flex is-flex-direction-column">
          <header className="is-flex is-flex-direction-column is-align-items-center mt-5">

              <div className="has-background-white" style={{width:"180px", height:"100px", border:"1px solid #dbdbdb"}}>
              </div>

              <h1 className="title is-size-4 mt-1 mb-3 has-text-centered">Tienda</h1>

              <menu className="is-flex is-flex-direction-column p-0 m-0">
                  <button className="button is-info" style={{width:"140px"}}>Seguir</button>
              </menu>
          </header>

          <section className="pl-5 mt-5">
              <h2 className="title is-size-5 mb-3">Categorías</h2>

              <ul>
                  {categories.map((category, index)=>(
                      <Link href="/" key={index}>
                          <li><a className="has-text-grey">{category} {index+1}</a></li>
                      </Link>
                  ))}
              </ul>

          </section>
       
      </aside>
    </>
  );
}
