import Layout from "../../components/layout/Layout";
import AccountPanel from "../../components/misc/AccountPanel";
import SearchResultsRecipient from "../../components/misc/SearchResultsRecipient";
import VerticalProductCard from "../../components/misc/VerticalProductCard";


export default function AccountPurchasesSection(){
    return(
        <>
        <Layout>
            <main className="is-flex">
                <AccountPanel />

                <section className="is-flex is-flex-direction-column pl-5 pt-2">

                    <h1 className="title is-size-4 mb-3">Compras realizadas</h1>

                    <form>
                        <label className="label">Filtrar por</label>
                        <div className="select">
                            <select>
                                <option>Fecha</option>
                                <option>Valor</option>
                                <option>Vendedor</option>
                                <option>Categoría</option>
                                <option>Peso</option>
                                <option>Medio de pago</option>
                            </select>
                        </div>
                        
                    </form>

                    <SearchResultsRecipient>
                        <VerticalProductCard />
                        <VerticalProductCard />
                        <VerticalProductCard />
                        <VerticalProductCard />

                    </SearchResultsRecipient>

                </section>
            </main>
        </Layout>
        </>
    )
}