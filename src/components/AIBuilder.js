import { useState } from 'react'
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Stepper from "./Stepper";

export default function AIBuilder() {

    const [step, setStep] = useState(1)

    const onStepClick = (setValue) => {
        setStep(setValue)
    }

    return (
        <div className="max-w-full h-full py-6">
            <div class="grid grid-cols-2 gap-4 h-full">
                <div>
                    <Stepper onStepClick={onStepClick} stepValue={step} />
                </div>
                <div>
                    {(() => {
                        switch (step) {
                            case 1:
                                return <Step1 />
                            case 2:
                                return <Step2 />
                            case 3:
                                return <Step3 />
                            case 4:
                                return <div className='w-full'><Step4 /></div>; break;
                            default:
                                return null
                        }
                    })()}
                </div>


            </div>

        </div>
    )
}