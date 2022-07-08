import { useStep } from "../../hooks/useStep";
import PersonalInfoForm from "./PersonalInfoForm";
import AccountForm from "./AccountForm";
import BusinessDataForm from "./BusinessDataForm";
import { Router, useRouter } from "next/router";
import FormStatusResponseFigure from "../misc/FormStatusResponseFigure";

export default function RegisterBusinessForm() {
  const router = useRouter();
  const { step, setStep, prevStep, nextStep } = useStep(1);
  return (
    <>
      <form>
        <h1 className="title is-size-4">
          {`${step < 4 ? `Paso ${step}: ` : ""} `}
          {step === 1
            ? "Datos de cuenta"
            : step === 2
            ? "Datos de empresa"
            : step === 3
            ? "Datos de dueño"
            : ""}
        </h1>

        <progress
          className="progress is-info"
          value={
            step === 1
              ? "10"
              : step === 2
              ? "45"
              : step === 3
              ? "95"
              : step === 4
              ? "100"
              : ""
          }
          max="100"
        ></progress>

        {step === 1 ? (
          <AccountForm />
        ) : step === 2 ? (
          <BusinessDataForm />
        ) : step === 3 ? (
          <PersonalInfoForm />
        ) : step === 4 ? (
          <FormStatusResponseFigure />
        ) : (
          setStep(1)
        )}
        <menu className="is-flex is-justify-content-space-between m-0 p-0 mt-3">
          {step < 4 ? (
            <button
              className="button is-info is-light"
              onClick={(e) => {
                e.preventDefault();

                step === 1 ? router.reload() : prevStep();
              }}
            >
              Atrás
            </button>
          ) : (
            ""
          )}

          {step <= 3 ? (
            <button
              className="button is-info"
              onClick={(e) => {
                e.preventDefault();
                nextStep();

              }}
            >
              Siguiente
            </button>
          ) : (
            ""
          )}
        </menu>
      </form>
    </>
  );
}
