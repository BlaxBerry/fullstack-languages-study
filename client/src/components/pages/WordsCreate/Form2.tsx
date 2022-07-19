import React, { Dispatch, SetStateAction } from 'react'
import { WordCreateInput } from '../../../types'

export interface WordCreateForm2Props {
  setFormValues: Dispatch<SetStateAction<WordCreateInput>>
  previousStep: () => void
  nextStep: () => void
}

export default function StepsForm2({
  setFormValues,
  previousStep,
  nextStep,
}: WordCreateForm2Props) {
  return <div>2</div>
}
