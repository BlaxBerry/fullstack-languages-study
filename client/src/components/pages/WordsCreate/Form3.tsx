import React, { Dispatch, SetStateAction } from 'react'
import { WordCreateInput } from '../../../types'

export interface WordCreateForm3Props {
  setFormValues: Dispatch<SetStateAction<WordCreateInput>>
  previousStep: () => void
  nextStep: () => void
}

export default function StepsForm3({
  setFormValues,
  previousStep,
  nextStep,
}: WordCreateForm3Props) {
  return <div>3</div>
}
