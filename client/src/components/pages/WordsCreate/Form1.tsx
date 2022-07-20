import React, { Dispatch, SetStateAction } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Form, Space, Input, Button, Select, Typography } from 'antd'
import { WordCreateInput } from '../../../types'

type WordCreateFormValuesType = Pick<
  WordCreateInput,
  'name' | 'pronunciation' | 'language' | 'area' | 'meaningsList'
>
interface WordCreateForm1Props {
  setFormValues: Dispatch<SetStateAction<WordCreateFormValuesType>>
  nextStep: () => void
}

const INPUT_WIDTH = 200
const INPUT_SPCAE = 10

export default function StepsForm1({
  nextStep,
  setFormValues,
}: WordCreateForm1Props) {
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
      name="word-create-form-1"
      form={formInstance}
      onFinish={onFinish}
      layout="vertical"
      size="large"
      autoComplete="off"
      scrollToFirstError
    >
      {/* 1. 名称 & 读音 */}
      <Typography.Title level={3}>名称与读音</Typography.Title>
      <Space wrap style={{ display: 'flex' }} align="baseline">
        {/* 1.1. name 单词名 */}
        <Form.Item
          name={'name'}
          label={'单词'}
          tooltip="单词名"
          rules={[{ required: true, whitespace: true, message: '必须项' }]}
        >
          <Input placeholder="单词名" />
        </Form.Item>
        {/* 1.2. pronunciation 单词读音 */}
        <Form.Item
          name={'pronunciation'}
          label={'读音'}
          tooltip="单词读音"
          rules={[{ required: true, whitespace: true, message: '必须项' }]}
        >
          <Input placeholder="单词读音" />
        </Form.Item>
        {/* 1.3. language 单词属于哪国语言 */}
        <Form.Item
          name={'language'}
          label={'语言'}
          tooltip="所属国家语言"
          rules={[{ required: true, whitespace: true, message: '必须项' }]}
        >
          {/* TODO: 通过API获取 */}
          <Select style={{ minWidth: INPUT_WIDTH }} placeholder="请选择">
            <Select.Option value="en">英语</Select.Option>
            <Select.Option value="ja">日语</Select.Option>
          </Select>
        </Form.Item>
        {/* 1.4. language 单词属于什么范围 */}
        <Form.Item
          name={'area'}
          label={'领域'}
          tooltip="所属领域"
          style={{ minWidth: INPUT_WIDTH }}
        >
          {/* TODO: 通过API获取 */}
          <Select
            showArrow
            placeholder="请选择"
            mode="tags"
            maxTagCount="responsive"
            tokenSeparators={[',', '・', '、', ' ']} // TODO: 设定 分隔字符（不能算入的字符）
          >
            <Select.Option value="it">IT</Select.Option>
            <Select.Option value="daily">日常生活</Select.Option>
          </Select>
        </Form.Item>
      </Space>

      {/* 2. 词性 & 对应含义 */}
      <Typography.Title level={3}>词性与含义</Typography.Title>
      {/* 通过 initialValue 在 list 动态添加前默认存在一组 */}
      <Form.List
        name="meaningsList"
        initialValue={[{ type: null, meanings: null }]}
      >
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                wrap
                style={{ display: 'flex' }}
                align="baseline"
              >
                {/* 2.1. type 词性名 */}
                <Form.Item
                  {...restField}
                  name={[name, 'type']}
                  rules={[
                    { required: true, whitespace: true, message: '必须项' },
                  ]}
                >
                  {/* TODO: 通过API获取 */}
                  <Select
                    style={{ minWidth: INPUT_WIDTH }}
                    placeholder="请选择"
                  >
                    <Select.Option value="n.">名词</Select.Option>
                    <Select.Option value="vt.">及物动词</Select.Option>
                    <Select.Option value="vi.">不及物动词</Select.Option>
                  </Select>
                </Form.Item>
                {/* 2.2. meanings 对应词性的含义 */}
                <Form.Item
                  {...restField}
                  name={[name, 'meanings']}
                  style={{ minWidth: INPUT_WIDTH * 2 + INPUT_SPCAE }}
                  rules={[
                    { required: true, whitespace: true, message: '必须项' },
                  ]}
                >
                  <Input placeholder="单词含义" />
                </Form.Item>
                {/* 2.3. 删除按钮 */}
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            {/* 2.4.  add button 词性添加按钮*/}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
                style={{ minWidth: INPUT_WIDTH * 3 + INPUT_SPCAE * 2 }}
              >
                新增 词性含义
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      {/* 4. sumbit button */}
      <Form.Item>
        <Space>
          <Button danger onClick={onReset}>
            清空
          </Button>
          <Button htmlType="submit" type="primary">
            下一步
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}
