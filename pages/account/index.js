import AccountForm from "../../components/forms/AccountForm";
import PersonalInfoForm from "../../components/forms/PersonalInfoForm";
import Layout from "../../components/layout/Layout";
import AccountPanel from "../../components/misc/AccountPanel";


export default function AccountMainSection(){

    return(
        <>
        <Layout>
            <main className="is-flex">
                <AccountPanel/>
                <section className="is-flex is-flex-direction-column p-3">

                    <section className="mb-6">
                    <header className="mb-3">
                        <h1 className="title is-size-4">Datos de cuenta</h1>
                    </header>
                    <AccountForm/>
                    </section>

                    <section className="">
                    <header className="mb-3">
                        <h1 className="title is-size-4">Datos personales</h1>
                    </header>
                    <PersonalInfoForm/>
                    </section>

    

                </section>

            </main>
        </Layout>
        </>
    )



}