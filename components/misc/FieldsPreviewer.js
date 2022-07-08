export default function FieldsPreviewer({ fields }) {
  return (
    <>
      <div className="fieldsPreviewer is-flex is-flex-direction-column">
        <div className="is-fullwidth">
          {fields.length === 0 ? (
            <div>
              <h1 className="label">Esta subcategoría no tiene campos</h1>
            </div>
          ) : (
            fields.map((field) => (
              <>
                <div className="field">
                  <label className="label">{field.name}</label>

                  {field.type === "text" ? (
                    <input
                      type={field.type}
                      name={field.name}
                      minLength={field.min}
                      maxLength={field.max}
                      required={field.required}
                      className="input"
                    />
                  ) : field.type === "number" ? (
                    <input
                      type={field.type}
                      name={field.name}
                      min={field.min}
                      max={field.max}
                      required={field.required}
                      className="input"
                    />
                  ) : (
                    <>
                      <div className="select">
                        <select required={field.required}>
                          {field.options.map((option) => (
                            <option key={option.id}>{option.value}</option>
                          ))}
                        </select>
                      </div>
                    </>
                  )}
                </div>
              </>
            ))
          )}
        </div>
      </div>
    </>
  );
}
