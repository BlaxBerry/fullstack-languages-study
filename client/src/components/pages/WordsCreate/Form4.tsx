import React, { Dispatch, SetStateAction } from 'react'
import { WordCreateInput } from '../../../types'

export interface WordCreateForm4Props {
  setFormValues: Dispatch<SetStateAction<WordCreateInput>>
  previousStep: () => void
  onSubmit: () => void
}

export default function StepsForm4({
  setFormValues,
  previousStep,
  onSubmit,
}: WordCreateForm4Props) {
  return <div>4</div>
}
