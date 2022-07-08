import Layout from "../../../components/layout/Layout";
import BusinessProfileInfoCard from "../../../components/misc/BusinessProfileInfoCard";
import SearchResultsRecipient from "../../../components/misc/SearchResultsRecipient";
import VerticalProductCard from "../../../components/misc/VerticalProductCard";

export default function BusinessProfile() {
  return (
    <>
      <Layout>
        <main className="is-flex">
          <BusinessProfileInfoCard />
          <section className="is-flex is-flex-direction-column p-3">
            <header className="is-flex is-flex-direction-column">
              <h1 className="title is-size-4 mt-2">Productos de esta tienda</h1>
              <div className="is-flex">
              <form className="mr-3">
                <label className="label">Filtrar por</label>
                <div className="select">
                  <select>
                    <option>Todos</option>
                    <option>Más vendidos</option>
                    <option>En oferta</option>
                    <option>Categoría</option>
                  </select>
                </div>
              </form>

              <form className="">
                <label className="label">Seleccionar categoría</label>
                <div className="select">
                  <select>
                    <option>Todos</option>
                    <option>Más vendidos</option>
                    <option>En oferta</option>
                    <option>Categoría</option>
                  </select>
                </div>
              </form>
              </div>
            </header>
            <SearchResultsRecipient>
              <VerticalProductCard />
              <VerticalProductCard />

              <VerticalProductCard />
              <VerticalProductCard />
              <VerticalProductCard />
            </SearchResultsRecipient>
          </section>
        </main>
      </Layout>
    </>
  );
}
