import React, { useState } from 'react'
import { useSetState } from 'ahooks'
import {
  WordCreateStepsBar as StepsBar,
  WordCreateForm1 as Form1,
  WordCreateForm2 as Form2,
  WordCreateForm3 as Form3,
  WordCreateForm4 as Form4,
} from '../../components/pages'
import { WordCreateInput } from '../../types'

export default function WordCreate() {
  const [formValues, setFormValues] = useSetState<WordCreateInput>(
    {} as WordCreateInput
  )
  const [currentStep, setCurrentStep] = useState<number>(1)

  const nextStep = (): void => {
    setCurrentStep((currentStep) => currentStep + 1)
  }
  const previousStep = (): void => {
    setCurrentStep((currentStep) => currentStep - 1)
  }

  const onSubmit = (): void => {
    console.log(formValues)
  }

  console.log(formValues)

  return (
    <div className="my-word-create">
      {/* 1. steps bar */}
      <StepsBar currentStep={currentStep} />

      {/* 2. steps form content */}
      <div className="my-word-create-form" style={{ marginTop: 20 }}>
        {currentStep === 1 && (
          <Form1 setFormValues={setFormValues} nextStep={nextStep} />
        )}
        {currentStep === 2 && (
          <Form2
            setFormValues={setFormValues}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        )}
        {currentStep === 3 && (
          <Form3
            setFormValues={setFormValues}
            previousStep={previousStep}
            nextStep={nextStep}
          />
        )}
        {currentStep === 4 && (
          <Form4
            setFormValues={setFormValues}
            previousStep={previousStep}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </div>
  )
}
