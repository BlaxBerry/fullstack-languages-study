import React, { Dispatch, SetStateAction } from 'react'
import {
  CloseCircleOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { Form, Space, Input, Button, Typography, Col, Row } from 'antd'
import { CreateWordInput } from '../../../types'

type WordCreateFormValuesType = Pick<CreateWordInput, 'expressionsList'>

interface WordCreateForm2Props {
  setFormValues: Dispatch<SetStateAction<WordCreateFormValuesType>>
  previousStep: () => void
  nextStep: () => void
}

const INPUT_WIDTH = 200
const INPUT_SPCAE = 10

export default function StepsForm1({
  setFormValues,
  previousStep,
  nextStep,
}: WordCreateForm2Props) {
  const [formInstance] = Form.useForm()

  const onFinish = (values: WordCreateFormValuesType) => {
    setFormValues(values)
    nextStep()
  }
  const onReset = (): void => {
    formInstance.resetFields()
  }

  return (
    <Form
      name="word-create-form-2"
      form={formInstance}
      onFinish={onFinish}
      layout="vertical"
      size="large"
      autoComplete="off"
      scrollToFirstError
    >
      {/* title */}
      <Typography.Title level={3}>短语搭配</Typography.Title>

      {/* list */}
      {/* 通过 initialValue 在 list 动态添加前默认存在一组 */}
      <Form.List
        name="expressionsList"
        initialValue={[{ expression: null, translation: null }]}
      >
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <React.Fragment key={key}>
                {/* 1. 短语名 + 翻译*/}
                <Space style={{ display: 'flex' }} align="baseline" wrap>
                  {/* 1.1 短语名 */}
                  <Form.Item
                    {...restField}
                    name={[name, 'expression']}
                    style={{ width: INPUT_WIDTH * 2 + INPUT_SPCAE }}
                    rules={[
                      { required: true, whitespace: true, message: '必须项' },
                    ]}
                  >
                    <Input placeholder="常用搭配" />
                  </Form.Item>
                  {/* 1.2 短语含义 */}
                  <Form.Item
                    {...restField}
                    name={[name, 'translation']}
                    style={{ width: INPUT_WIDTH }}
                    rules={[
                      { required: true, whitespace: true, message: '必须项' },
                    ]}
                  >
                    <Input placeholder="短语含义" />
                  </Form.Item>
                  {/* 1.3 删除按钮 */}
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>

                {/* 2. 例句 List */}
                <Form.List name={[name, 'sentencesList']}>
                  {(sentencesFields, sentencesOperation) => (
                    <>
                      {sentencesFields.map(
                        ({
                          key: sentencesFieldKey,
                          name: sentencesFieldName,
                          ...restsentencesField
                        }) => (
                          <Row key={sentencesFieldKey} align="middle">
                            <Col flex={1}>
                              {/* 2.1 例句 */}
                              <Form.Item
                                {...restsentencesField}
                                name={[sentencesFieldName, 'sentence']}
                                rules={[
                                  {
                                    required: true,
                                    whitespace: true,
                                    message: '必须项',
                                  },
                                ]}
                              >
                                <Input.TextArea
                                  placeholder="例句"
                                  autoSize={{ minRows: 1, maxRows: 2 }}
                                />
                              </Form.Item>
                              {/* 2.2 例句翻译 */}
                              <Form.Item
                                {...restsentencesField}
                                name={[sentencesFieldName, 'translation']}
                                style={{}}
                                rules={[
                                  {
                                    required: true,
                                    whitespace: true,
                                    message: '必须项',
                                  },
                                ]}
                              >
                                <Input.TextArea
                                  placeholder="翻译"
                                  autoSize={{ minRows: 1, maxRows: 2 }}
                                />
                              </Form.Item>
                            </Col>
                            <Col flex="100px">
                              {/* 2.3 删除 例句 */}
                              <CloseCircleOutlined
                                onClick={() =>
                                  sentencesOperation.remove(sentencesFieldName)
                                }
                                style={{ transform: 'translateY(-10px)' }}
                              />
                            </Col>
                          </Row>
                        )
                      )}
                      {/* 2.4 添加 例句 */}
                      <Form.Item>
                        <Button
                          type="dashed"
                          block
                          icon={<PlusOutlined />}
                          onClick={() => sentencesOperation.add()}
                          style={{ minWidth: INPUT_WIDTH * 2 + INPUT_SPCAE }}
                        >
                          添加 例句
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </React.Fragment>
            ))}

            {/*  add expression 短语添加按钮 */}
            <Form.Item>
              <Button
                type="primary"
                onClick={() => add()}
                icon={<PlusOutlined />}
                style={{ minWidth: INPUT_WIDTH * 3 + INPUT_SPCAE * 2 }}
              >
                新增 短语
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      {/* sumbit button */}
      <Form.Item>
        <Space>
          <Button danger onClick={onReset}>
            清空
          </Button>
          <Button htmlType="submit" type="primary">
            下一步
          </Button>
          <Button onClick={previousStep}>上一步</Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
