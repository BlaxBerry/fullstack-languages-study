import React, { Dispatch, SetStateAction } from 'react'
import { Form, Typography, Space, Input, Row, Col, Button } from 'antd'
import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { CreateWordInput } from '../../../types'

type WordCreateFormValuesType = Pick<
  CreateWordInput,
  'sentencesList' | 'publishAt'
>

interface WordCreateForm3Props {
  setFormValues: Dispatch<SetStateAction<WordCreateFormValuesType>>
  previousStep: () => void
  nextStep: () => void
}

const INPUT_WIDTH = 200
const INPUT_SPCAE = 10

export default function StepsForm3({
  setFormValues,
  previousStep,
  nextStep,
}: WordCreateForm3Props) {
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
      <Typography.Title level={3}>相关例句</Typography.Title>

      {/* list */}
      {/* 通过 initialValue 在 list 动态添加前默认存在一组 */}
      <Form.List
        name="sentencesList"
        initialValue={[{ sentence: null, translation: null }]}
      >
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Row key={key} align="middle">
                <Col flex={1}>
                  {/* 2.1 例句 */}
                  <Form.Item
                    {...restField}
                    name={[name, 'sentence']}
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
                    {...restField}
                    name={[name, 'translation']}
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
                    onClick={() => remove(name)}
                    style={{ transform: 'translateY(-10px)' }}
                  />
                </Col>
              </Row>
            ))}

            {/*  add expression 短语添加按钮 */}
            <Form.Item>
              <Button
                type="dashed"
                block
                onClick={() => add()}
                icon={<PlusOutlined />}
                style={{ minWidth: INPUT_WIDTH * 2 + INPUT_SPCAE }}
              >
                新增 例句
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
