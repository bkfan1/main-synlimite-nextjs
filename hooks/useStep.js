import { useState } from "react"


export const useStep = (initialStep)=>{

    const [step, setStep] = useState(initialStep);

    const prevStep = ()=>{
        setStep(step-1);
    }
    const nextStep = ()=>{
        setStep(step+1)
    }

    return {step,setStep, prevStep, nextStep}


}