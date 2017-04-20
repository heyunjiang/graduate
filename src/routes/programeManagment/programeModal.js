//还未修改
import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Checkbox, Modal, Select, DatePicker } from 'antd'
const FormItem = Form.Item
const Option = Select.Option
const { RangePicker } = DatePicker
const CheckboxGroup = Checkbox.Group

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
  form,
  visible,
  onOk,
  onCancel,
}) => {
  const {getFieldDecorator, validateFields, getFieldsValue} = form;
  const dateFormat = 'YYYY/MM/DD';
  function handleOk(){
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
      }
      onOk(data)
    })
  }
  const modalOpts = {
    title: `新建项目`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal',
  }
  const userGroup = [{ label: 'heyunjiang', value: '1' },{ label: '么么哒', value: '4' }];
  return (
    <Modal {...modalOpts}>
      <Form>
        <FormItem label="项目名称" {...formItemLayout}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入项目名称!' }],
            })(
              <Input />
            )}
        </FormItem>
        <FormItem label="项目类型" {...formItemLayout}>
            {getFieldDecorator('type',{
              initialValue: '个人项目',
            })(
              <Select>
                <Option value="个人项目">个人项目</Option>
                <Option value="团队项目">团队项目</Option>
              </Select>
            )}
        </FormItem>
        <FormItem label="项目描述" {...formItemLayout}>
            {getFieldDecorator('des')(
              <Input type="textarea" />
            )}
        </FormItem>
        <FormItem label="预期成果" {...formItemLayout}>
            {getFieldDecorator('expectValue')(
              <Input type="textarea" />
            )}
        </FormItem>
        <FormItem label="预期时间" {...formItemLayout}>
            {getFieldDecorator('expectTime')(
              <RangePicker />
            )}
        </FormItem>
        <FormItem label="项目成员" {...formItemLayout}>
            {getFieldDecorator('member')(
              <CheckboxGroup options={userGroup} />
            )}
        </FormItem>
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
