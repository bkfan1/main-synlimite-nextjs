import { useState, useEffect } from "react";
import FieldsPreviewer from "../misc/FieldsPreviewer";
import { nanoid } from "nanoid";

const initialSubCategories = [
  {
    id: "sbyzrd54831",
    name: "Zapatos",
    fields: [
      {
        id: "138564cca",
        type: "text",
        min: 5,
        max: 100,
        name: "Marca",
        required: true,
      },
      {
        id: "329563bk1",
        type: "select",
        min: 0,
        max: 0,
        name: "Tallas",
        required: true,
        options: [
          { id: "1a", value: "36" },
          { id: "2b", value: "40" },
        ],
      },
    ],
  },
];

export default function SubCategoryModifierForm() {
  const [section, setSection] = useState("select");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [subCategory, setSubCategory] = useState({});

  const [selectedTypeOfField, setSelectedTypeOfField] = useState("");
  const [newFieldValues, setNewFieldValues] = useState({
    type: "",
    name: "",
    min: 0,
    max: 0,
    required: false,
    description: "",
    options: [],
  });
  const [newOption, setNewOption] = useState({
    value: "",
  });

  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (selectedTypeOfField !== "") {
      setNewFieldValues({
        type: selectedTypeOfField,
        name: "",
        min: 0,
        max: 0,
        required: false,
        description: "",
        options: [],
      });
    }

    setResponse(null);
  }, [selectedTypeOfField]);

  useEffect(() => {
    if (section !== "add") {
      setSelectedTypeOfField("");
      setNewFieldValues({
        type: "",
        name: "",
        min: 0,
        max: 0,
        required: false,
        description: "",
        options: [],
      });
    }
  }, [section]);

  const handleSelectSubCategory = (e) => {
    const { target } = e;
    const { name, value } = target;

    const sc = initialSubCategories.find(
      (subcategory) => subcategory.name === value
    );

    setSelectedSubCategory(value);
    setSubCategory(sc);
  };

  const handleDeleteField = (e, id) => {
    e.preventDefault();

    const updatedSubCategory = { ...subCategory };
    const fields = updatedSubCategory["fields"];
    const index = fields.findIndex((field) => field.id === id);
    fields.splice(index, 1);
    setSubCategory(updatedSubCategory);
  };

  const handleAddNewField = (e) => {
    e.preventDefault();

    const newField = newFieldValues;
    if (newField.type === "text" || newField.type === "number") {
      if (newField.name !== "" && newField.min !== "" && newField.max !== "") {
        const copied = { ...subCategory };
        const fields = copied["fields"];
        fields.push(newField);
        setSubCategory(copied);
        setResponse("Campo creado éxitosamente.");
      }
    }

    if (newField.type === "select") {
      if (
        newField.name !== "" &&
        newField.options.every((option) => option.value !== "")
      ) {
        const copied = { ...subCategory };
        const fields = copied["fields"];
        fields.push(newField);
        setSubCategory(copied);
        setResponse("Campo creado éxitosamente.");
      }
    }
  };

  const handleNewFieldOnChange = (e) => {
    const { target } = e;
    const { name, value, type } = target;

    setNewFieldValues({
      ...newFieldValues,
      [name]: type === "checkbox" ? target.checked : value,
    });
  };

  const handleAddNewOption = (e) => {
    e.preventDefault();

    if (newOption.value !== "") {
      const copied = { ...newFieldValues };
      const realNewOption = { ...newOption, id: nanoid() };
      //console.log(copied);
      const options = copied["options"];
      options.push(realNewOption);
      //console.log(options);
      //console.log(copied);

      setNewFieldValues(copied);
    }
  };

  const handleNewOptionOnChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setNewOption({ ...newOption, [name]: value });
  };

  const handleDeleteOption = (e, id) => {
    e.preventDefault();

    const copied = { ...newFieldValues };
    const options = copied["options"];
    //console.log(options)
    const index = options.findIndex((option) => option.id === id);
    options.splice(index, 1);
    //console.log(copied);
    setNewFieldValues(copied);
  };
  return (
    <>
      <form
        className="subcategoryModifierForm p-4 has-background-white"
        style={{ maxWidth: "500px", minHeight: "360px" }}
      >
        <nav className="breadcrumb is-right" aria-label="breadcrumbs">
          <ul>
            <li>
              <a onClick={() => setSection("select")} href="#">
                Subcategoría
              </a>
            </li>
            {selectedSubCategory ? (
              <>
                <li>
                  <a onClick={() => setSection("add")} href="#">
                    Añadir campo
                  </a>
                </li>
                <li>
                  <a onClick={() => setSection("preview")} href="#">
                    Previsualizar
                  </a>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </nav>

        {section === "select" ? (
          <>
            <label className="label">Elegir subcategoría</label>
            <div className="select">
              <select
                value={selectedSubCategory}
                onChange={(e) => handleSelectSubCategory(e)}
              >
                <option value={""}>Ninguno</option>
                <option value={"Zapatos"}>Zapatos</option>
              </select>
            </div>

            <div className="field my-4">
              {selectedSubCategory !== "" ? (
                <>
                  <label className="label">Campos de esta subcategoría</label>
                  <div className="tags my-2">
                    {subCategory.fields.map((field) => (
                      <div key={field.id} className="tag">
                        <p>{field.name}</p>
                        <button
                          onClick={(e) => handleDeleteField(e, field.id)}
                          className="delete"
                        />
                      </div>
                    ))}
                  </div>

                  {subCategory.fields.length === 0 ? (
                    <h1 className="p-1 has-background-danger has-text-white">
                      <i className="bi bi-x-circle-fill" /> No puedes actualizar
                      una subcategoría sin campos
                    </h1>
                  ) : (
                    <button className="button is-success is-fullwidth">
                      <i className="bi bi-arrow-up" /> Actualizar campos
                    </button>
                  )}
                </>
              ) : (
                <h1 className="label">Selecciona una opción para continuar</h1>
              )}
            </div>
          </>
        ) : section === "add" ? (
          <>
            <label className="label">Tipo de campo</label>
            <div className="select mb-2">
              <select
                value={selectedTypeOfField}
                onChange={(e) => setSelectedTypeOfField(e.target.value)}
              >
                <option value={""}>Ninguno</option>
                <option value={"text"}>Textual</option>
                <option value={"number"}>Numérico</option>
                <option value={"select"}>Selección</option>
              </select>
            </div>

            {selectedTypeOfField === "text" ||
            selectedTypeOfField === "number" ? (
              <>
                <div className="field">
                  <label className="label">Nombre de campo</label>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => handleNewFieldOnChange(e)}
                    className="input"
                    required
                  />
                </div>

                <div className="field">
                  <label className="label">Descripción (opcional)</label>
                  <input
                    type="text"
                    name="description"
                    onChange={(e) => handleNewFieldOnChange(e)}
                    className="input"
                  />
                </div>

                <div className="field">
                  <label className="label">Longitud o valor mínimo</label>
                  <input
                    type="number"
                    name="min"
                    onChange={(e) => handleNewFieldOnChange(e)}
                    className="input"
                    required
                    min={1}
                  />
                </div>

                <div className="field">
                  <label className="label">Longitud o valor máximo</label>
                  <input
                    type="number"
                    name="max"
                    onChange={(e) => handleNewFieldOnChange(e)}
                    className="input"
                    required
                    min={1}
                  />
                </div>

                <div className="is-flex">
                  <input
                    type="checkbox"
                    name="required"
                    onChange={(e) => handleNewFieldOnChange(e)}
                    className="mr-1"
                    required
                  />
                  <label className="label">Requerido</label>
                </div>

                <button
                  onClick={(e) => handleAddNewField(e)}
                  className="button is-success is-fullwidth mt-3"
                >
                  <i className="bi bi-plus" /> Añadir campo
                </button>

                {response ? (
                  <div className="is-flex is-justify-content-space-between mt-3 p-2 has-background-info has-text-white">
                    <p>
                      <i className="bi bi-check-circle-fill" /> {response}
                    </p>

                    <a onClick={() => setResponse(null)}>
                      <i className="bi bi-x" />
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </>
            ) : selectedTypeOfField === "select" ? (
              <>
                <div className="field">
                  <label className="label">Nombre de campo</label>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => handleNewFieldOnChange(e)}
                    className="input"
                    required
                  />
                </div>

                <div className="field">
                  <label className="label">Descripción (opcional)</label>
                  <input
                    type="text"
                    name="description"
                    onChange={(e) => handleNewFieldOnChange(e)}
                    className="input"
                  />
                </div>

                <div className="is-flex is-flex-direction-column">
                  <label className="label">Valor de opción</label>
                  <div className="is-flex">
                    <input
                      type="text"
                      name="value"
                      onChange={(e) => handleNewOptionOnChange(e)}
                      className="input"
                      required
                    />
                    <button
                      onClick={(e) => handleAddNewOption(e)}
                      className="button ml-2"
                    >
                      <i className="bi bi-plus" />
                    </button>
                  </div>
                </div>

                <div className="is-flex mt-3">
                  <input
                    type="checkbox"
                    name="required"
                    onChange={(e) => handleNewFieldOnChange(e)}
                    className="mr-1"
                    required
                  />
                  <label className="label">Requerido</label>
                </div>

                <div className="field mt-3">
                  <label className="label">Opciones</label>
                  <ul
                    className="my-3"
                    style={{ maxHeight: "80px", overflowY: "scroll" }}
                  >
                    {newFieldValues.options.map((option) => (
                      <li key={option.id} className="my-1">
                        <i className="bi bi-dot" /> {option.value}
                        <a
                          onClick={(e) => handleDeleteOption(e, option.id)}
                          className="has-text-danger ml-3"
                        >
                          <i className="bi bi-trash" />
                        </a>{" "}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={(e) => handleAddNewField(e)}
                  className="button is-success is-fullwidth"
                >
                  <i className="bi bi-plus" />
                  Añadir campo
                </button>

                {response ? (
                  <div className="is-flex is-justify-content-space-between mt-3 p-2 has-background-info has-text-white">
                    <p>
                      <i className="bi bi-check-circle-fill" /> {response}
                    </p>

                    <a onClick={() => setResponse(null)}>
                      <i className="bi bi-x" />
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </>
            ) : (
              <h1 className="label">Selecciona una opción para continuar</h1>
            )}
          </>
        ) : section === "preview" ? (
          <FieldsPreviewer fields={subCategory.fields} />
        ) : (
          setSection("select")
        )}
      </form>
    </>
  );
}
