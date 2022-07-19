import { Space, Button } from 'antd'
import React from 'react'

interface WordCreateSubmitButtonsProps {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}
export default function SubmitButtons({
  currentStep,
  setCurrentStep,
}: WordCreateSubmitButtonsProps) {
  return (
    <Space>
      {currentStep > 1 && (
        <Button
          onClick={() => setCurrentStep((currentStep) => currentStep - 1)}
        >
          Back
        </Button>
      )}
      {currentStep < 4 && (
        <Button
          type="primary"
          onClick={() => setCurrentStep((currentStep) => currentStep + 1)}
        >
          Next
        </Button>
      )}
      {currentStep == 4 && (
        <Button
          type="primary"
          onClick={() => {
            console.log('DONE')
          }}
        >
          Dnoe
        </Button>
      )}
    </Space>
  )
}
