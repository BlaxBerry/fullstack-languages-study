import React, { useState } from 'react'
import {
  WordCreateStepsBar as StepsBar,
  WordCreateForm1 as Form1,
  WordCreateForm2 as Form2,
  WordCreateForm3 as Form3,
  WordCreateForm4 as Form4,
  WordCreateSubmitButtons as SubmitButtons,
} from '../../components/pages'

export default function WordCreate() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="my-word-create">
      {/* 1. steps bar */}
      <StepsBar currentStep={currentStep} />

      {/* 2. steps form content */}
      <div className="my-word-create-form">
        {currentStep === 1 && <Form1 />}
        {currentStep === 2 && <Form2 />}
        {currentStep === 3 && <Form3 />}
        {currentStep === 4 && <Form4 />}
      </div>

      {/* 3. bottom submit buttons */}
      <SubmitButtons
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  )
}
