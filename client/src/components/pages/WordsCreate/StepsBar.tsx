import { Steps } from 'antd'
import React from 'react'

interface WordCreateStepsBarProps {
  currentStep: number
}

export default function StepsBar({ currentStep }: WordCreateStepsBarProps) {
  const CREATE_STEPS = [
    { step: 1, title: '词性含义' },
    { step: 2, title: '短语搭配' },
    { step: 3, title: '相关例句' },
    { step: 4, title: '完成提交' },
  ]

  const getStepStatus = (step: number): string => {
    if (currentStep === step) return '编写中'
    else if (currentStep > step) return '完成'
    else return '等待中'
  }

  return (
    <Steps
      current={currentStep - 1}
      percent={(100 / CREATE_STEPS.length) * currentStep}
    >
      {CREATE_STEPS.map((item) => (
        <Steps.Step
          key={item.step}
          title={item.title}
          description={getStepStatus(item.step)}
        />
      ))}
    </Steps>
  )
}
