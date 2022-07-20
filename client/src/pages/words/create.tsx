import React, { useEffect, useState } from 'react'
import { useSetState } from 'ahooks'
import {
  WordCreateStepsBar as StepsBar,
  WordCreateForm1 as Form1,
  WordCreateForm2 as Form2,
  WordCreateForm3 as Form3,
  WordCreateForm4 as Form4,
} from '../../components/pages'
import { CreateWordInput, CreateWord, WordDetail } from '../../types'
import { useMutation } from '@apollo/client'
import { CREATE_WORD } from '../../graphql'
import { useErrorHandling } from '../../hooks'

export default function WordCreate() {
  const { handleGrapqhlRequestError } = useErrorHandling()

  const [formValues, setFormValues] = useSetState<CreateWordInput>(
    {} as CreateWordInput
  )
  const [currentStep, setCurrentStep] = useState<number>(1)

  const [
    createWord,
    {
      data: createWordData,
      loading: createWordLoading,
      error: createWordError,
    },
  ] = useMutation<CreateWord>(CREATE_WORD)

  const nextStep = (): void => {
    setCurrentStep((currentStep) => currentStep + 1)
  }
  const previousStep = (): void => {
    setCurrentStep((currentStep) => currentStep - 1)
  }
  const onClear = (): void => {
    setCurrentStep(1)
    setFormValues({})
  }

  const onSubmit = (): void => {
    createWord({
      variables: {
        input: formValues,
      },
    })
    if (createWordData) {
      console.log('SUCCESS')
      onClear()
    }
  }

  useEffect(() => {
    // grapqhl request error handling
    if (createWordError) handleGrapqhlRequestError(createWordError)
  }, [createWordError])

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
            formValues={formValues}
            previousStep={previousStep}
            onClear={onClear}
            onSubmit={onSubmit}
            createWordLoading={createWordLoading}
            createWordData={createWordData?.createWord as WordDetail}
          />
        )}
      </div>
    </div>
  )
}
