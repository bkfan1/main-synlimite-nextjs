import { useStep } from "../../hooks/useStep";

export default function RequestRefundForm() {
  const { step, setStep, prevStep, nextStep } = useStep(1);
  return (
    <>
      <form className="p-3 has-background-white" style={{maxWidth:"500px", border:"1px solid #dbdbdb", borderRadius:"5px"}}>
          <h1 className="title is-size-4">Solicitar un reembolso</h1>
        <div className="field mr-4">
          <label className="label">Fecha de compra</label>
          <input type="date" className="input" style={{width:"160px"}} />
        </div>

        <div className="field mr-4">
          <label className="label">Motivo de reembolso</label>
          <div className="control">
            <textarea
              className="textarea has-fixed-size"
              placeholder="Fixed size textarea"
            ></textarea>
          </div>
        </div>

        <div className="mt-3">
            <label className="label">Fotos del producto</label>
        <div className="file has-name is-boxed is-fullwidth">
          <label className="file-label">
            <input className="file-input" type="file" name="resume" />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label has-text-centered">Elegir fotos</span>
            </span>
            <span className="file-name has-text-centered">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </label>
        </div>

        </div>
      </form>
    </>
  );
}
