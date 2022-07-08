import { useStep } from "../../hooks/useStep";
import ProductImagePreview from "../misc/ProductImagePreview";

export default function AddProductForm() {
  const { step, setStep, prevStep, nextStep } = useStep(1);

  return (
    <>
      <div
        className="p-4"
        style={{ maxWidth: "500px", border: "1px solid #dbdbdb" }}
      >
        {step === 1 ? (
          <section>
            <h1 className="title is-size-4">Datos de producto</h1>
            <div className="field">
              <label className="label">Titulo</label>
              <input type="text" className="input" />
            </div>

            <div className="control my-2">
              <textarea
                className="textarea has-fixed-size"
                placeholder=""
              ></textarea>
            </div>

            <div className="field">
              <label className="label">Precio</label>
              <input type="text" className="input" />
            </div>

            <div className="field">
              <label className="label">Ubicación</label>
              <input type="text" className="input" />
            </div>
          </section>
        ) : step === 2 ? (
          <section>
            <h1 className="title is-size-4">Imágenes del producto</h1>

            <div className="is-flex is-flex-direction-column mb-3">
              <div className="is-flex">
                <ProductImagePreview />
                <ProductImagePreview />
                <ProductImagePreview />
              </div>
              <p>Al menos 3 imágenes del producto.</p>
            </div>

            <div className="file">
              <label className="file-label">
                <input className="file-input" type="file" name="resume" />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">Elegir un archivo</span>
                </span>
              </label>
            </div>
          </section>
        ) : step === 3 ? (
            <section>
                <h1 className="title is-size-5">Confirmar datos de publicación</h1>

                <div className="field">
                    <label className="label">Titulo:</label>
                    <input className="input" disabled />
                </div>

                <div className="field">
                    <label className="label">Descripción</label>
                    <input type="text" disabled className="input" />
                </div>

                <div className="field">
                    <label className="label">Precio:</label>
                    <input className="input" disabled />
                </div>

                <div className="field">
                    <label className="label">Ubicación:</label>
                    <input className="input" disabled />
                </div>

                <div>
                    <label className="label">Imágenes:</label>
                    <div className="is-flex">
                    <ProductImagePreview />
                    <ProductImagePreview />
                    <ProductImagePreview />
                    </div>

                </div>

            </section>
        ): setStep(1)}
        <menu className="m-0 p-0 mt-3 is-fullwidth is-flex is-justify-content-space-between">
          <button onClick={prevStep} className="button is-info is-light">Atrás</button>
          <button onClick={nextStep} className="button is-info">Siguiente</button>
        </menu>
      </div>
    </>
  );
}
