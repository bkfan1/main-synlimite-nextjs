

import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import PersonalInfoForm from "../../components/forms/PersonalInfoForm";
import {useStep} from "../../hooks/useStep";
import RegisterConsumerForm from "../../components/forms/RegisterConsumerForm";
import RegisterBusinessForm from "../../components/forms/RegisterBusinessForm";

export default function RegisterSection(){
    const [accountType, setAccountType] = useState("");

    return(
        <Layout>
            <main className="is-flex is-align-items-center is-justify-content-center">

                {accountType === "" ? (
                    <>
                    <form className="is-flex is-flex-direction-column has-background-white p-3" style={{border:"1px solid #dbdbdb"}}>
                        <label className="title is-size-4 mb-3">Seleccionar tipo de cuenta</label>
  
                        <div className="select is-fullwidth">
                            <select value={accountType} onChange={(e)=>setAccountType(e.target.value)}>
                                <option value="">Sin seleccionar</option>
                                <option value="Consumer">Consumidor</option>
                                <option value="Business">Empresa</option>
                            </select>
                        </div>
                    </form>
                    </>
                ) : accountType === "Consumer" ? (
                    <RegisterConsumerForm />
                ) : accountType === "Business" ?<RegisterBusinessForm/> : setAccountType("")}

            </main>
        </Layout>
    )
}