export default function BusinessDataForm() {
  return (
    <>
      <form className="has-background-white p-4" style={{border:"1px solid #dbdbdb"}}>

        <section className="mb-4">
          <label className="label">Estructura jurídica</label>
          <div className="select">
            <select>
              <option>Sin seleccionar</option>
              <option>Sociedad anónima</option>
              <option>Firma personal</option>
            </select>
          </div>
        </section>

        <section className="is-flex">
          <div className="field mr-4">
            <label className="label">RIF</label>
            <input type="text" className="input" />
          </div>
          <div className="field">
            <label className="label">Nombre de empresa</label>
            <input type="text" className="input" />
          </div>
        </section>

        <section className="is-flex">
          <div className="field mr-4">
            <label className="label">Dirección</label>
            <input type="text" className="input" />
          </div>
          <div className="field">
            <label className="label">Número de teléfono</label>
            <input type="text" className="input" />
          </div>
        </section>
      </form>
    </>
  );
}
