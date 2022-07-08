import { useRouter } from "next/router";

export default function PersonalInfoForm() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <form className="personalInfoForm has-background-white p-3" >
        <section className="is-flex">
          <div className="field mr-3">
            <label className="label">Nombre</label>
            <input type="text" className="input" />
          </div>

          <div className="field">
            <label className="label">Apellido</label>
            <input type="text" className="input" />
          </div>
        </section>

        <section className="is-flex">
          <div className="field mr-3">
            <label className="label">Cédula</label>
            <input type="text" className="input" />
          </div>

          <div className="field">
            <label className="label">Número telefónico</label>
            <input type="text" className="input" />
          </div>
        </section>

        <section className="is-flex">
          <div className="field mr-4">
            <label className="label">Estado civil</label>
            <div className="select">
              <select>
                <option>Sin seleccionar</option>
                <option>Soltero</option>
                <option>Casado</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label className="label">Sexo</label>
            <div className="select">
              <select>
                <option>Sin seleccionar</option>
                <option>Hombre</option>
                <option>Mujer</option>
              </select>
            </div>
          </div>
        </section>

        {pathname === "/account" ? <button className="button is-info is-fullwidth mt-3">Actualizar</button> : ""}
      </form>
    </>
  );
}
