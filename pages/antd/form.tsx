import React, {ComponentProps, FC, useState} from 'react';
import {Form, Input, Button, Checkbox, Select, Radio} from "antd";
import {FormLayout} from "antd/lib/form/Form"

const Comp: FC<ComponentProps<any>> = (props) => {
    const [form1] = Form.useForm();
    const [form2] = Form.useForm();
    const [formLayout, setFormLayout] = useState<FormLayout>('horizontal');

    const formItemLayout = formLayout === 'horizontal' ? {labelCol: {span: 4}, wrapperCol: {span: 14},} : null;
    const buttonItemLayout = formLayout === 'horizontal' ? { wrapperCol: {span: 14, offset: 4}, } : null;

    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
                form1.setFieldsValue({note: "Hi, man!"});
                return;
            case 'female':
                form1.setFieldsValue({note: "Hi, lady!"});
                return;
            case 'other':
                form1.setFieldsValue({note: "Hi there!"});
                return;
        }

    }

    return (
        <>
            <div className="flex mt-4 justify-center w-80 mx-auto">
                <Form labelCol={{span: 8}} wrapperCol={{span: 16}} form={form1} name="control-hooks"
                      onFinish={(values) => console.log(values)}>
                    <Form.Item name="note" label="Note" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name="gender" label="Gender" rules={[{required: true}]}>
                        <Select placeholder="Select a option and change input text above"
                                onChange={onGenderChange}
                                allowClear>
                            <Select.Option value="male">
                                male
                            </Select.Option>
                            <Select.Option value="female">female</Select.Option>
                            <Select.Option value="other">other</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item noStyle
                               shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}>
                        {
                            ({getFieldValue}) => {
                                return getFieldValue('gender') === 'other' ? (
                                    <Form.Item name="customizeGender" label="Customize Gender"
                                               rules={[{required: true}]}>
                                        <Input/>
                                    </Form.Item>
                                ) : null;
                            }
                        }
                    </Form.Item>
                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                        <Button htmlType="button" onClick={() => form1.resetFields()} className="ml-4">Reset</Button>
                        <Button type="link" htmlType="button" className="ml-4"
                                onClick={() => form1.setFieldsValue({note: 'Hello world!', gender: 'male'})}>
                            Fill form
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="mt-8">
                <Form {...formItemLayout} layout={formLayout} form={form2}
                      initialValues={{layout: formLayout}}
                      onValuesChange={({layout,fieldA,fieldB}:{layout:FormLayout,fieldA:string,fieldB:string}) => {
                          setFormLayout(layout);
                          console.log(fieldA,fieldB);
                      }}>
                    <Form.Item label="Form Layout" name="layout">
                        <Radio.Group value={formLayout}>
                            <Radio.Button value="horizontal">Horizontal</Radio.Button>
                            <Radio.Button value="vertical">Vertical</Radio.Button>
                            <Radio.Button value="inline">Inline</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Field A" name="fieldA">
                        <Input placeholder="input placeholder"/>
                    </Form.Item>
                    <Form.Item label="Field B" name="fieldB">
                        <Input placeholder="input placeholder"/>
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary">Submit</Button>
                    </Form.Item>

                </Form>

            </div>
        </>
    );
}

export default Comp;