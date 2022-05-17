import React from 'react'
import { Form, Input, Button} from 'antd'

export default function CreatePostForm() {
  const { TextArea } = Input
  const onFinish = (values) => {
    console.log(values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo)
  }
  return (
    <div>
      <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Title is required!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Content"
          name="content"
        >
          <TextArea rows="10" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form.Item>

      </Form>
    </div>
  )
}
