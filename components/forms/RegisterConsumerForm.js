import { Router, useRouter } from "next/router";
import { useStep } from "../../hooks/useStep";
import FormStatusResponseFigure from "../misc/FormStatusResponseFigure";
import AccountForm from "./AccountForm";
import PersonalInfoForm from "./PersonalInfoForm";
export default function RegisterConsumerForm() {
  const { step, setStep, prevStep, nextStep } = useStep(1);
  const router = useRouter();
  return (
    <>
      <form>
        <h1 className="title is-size-4">
          {`${step < 3 ? `Paso ${step}: ` : ""} `}
          {step === 1
            ? "Datos de cuenta"
            : step === 2
            ? "Datos personales"
            : ""}
        </h1>

        <progress
          className="progress is-info"
          value={
            step === 1 ? "10" : step === 2 ? "45" : step === 3 ? "100" : ""
          }
          max="100"
        ></progress>

        {step === 1 ? (
          <AccountForm />
        ) : step === 2 ? (
          <PersonalInfoForm />
        ) : step === 3 ? (
          <FormStatusResponseFigure />
        ) : (
          setStep(1)
        )}

        <menu className="is-flex is-justify-content-space-between m-0 p-0 mt-3">
          {step < 3 ? (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  step === 1 ? router.reload() : prevStep();
                }}
                className="button is-info is-light"
              >
                Atrás
              </button>
              <button
                className="button is-info"
                onClick={(e) => {
                  e.preventDefault();
                  nextStep();
                }}
              >
                Siguiente
              </button>
            </>
          ) : (
            ""
          )}
        </menu>
      </form>
    </>
  );
}
