import React, {FC, ComponentProps, useRef, useEffect, useState} from 'react';
import {Avatar, Button, Form, Input, InputNumber, Modal, Typography} from "antd";
import {SmileOutlined, UserOutlined} from "@ant-design/icons";
import {FormInstance} from "antd/lib/form";

interface ModalFormProps {
    visible: boolean;
    onCancel: () => void;
}

const useResetFormOnCloseModal = ({form, visible}: { form: FormInstance, visible: boolean }) => {
    const prevVisibleRef = useRef<boolean>();
    useEffect(() => {
        prevVisibleRef.current = visible;
    }, [visible]);
    const prevVisible = prevVisibleRef.current;
    useEffect(() => {
        if (!visible && prevVisible) {
            form.resetFields();
        }
    }, [visible]);
}

const ModalForm: FC<ModalFormProps> = ({visible, onCancel}) => {
    const [form] = Form.useForm();

    useResetFormOnCloseModal({form, visible,});

    const onOk = () => {
        form.submit();
    };

    return (
        <Modal title="Basic Drawer" visible={visible} onOk={onOk} onCancel={onCancel}>
            <Form form={form} layout="vertical" name="userForm">
                <Form.Item name="name" label="User Name" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="age" label="User Age" rules={[{required: true}]}>
                    <InputNumber/>
                </Form.Item>
            </Form>
        </Modal>
    );
}

const Comp: FC<ComponentProps<any>> = (props) => {
    const [visible, setVisible] = useState(false);
    const showUserModal = () => {
        setVisible(true);
    };
    const hideUserModal = () => {
        setVisible(false);
    };
    const onFinish = values => {
        console.log('Finish:', values);
    };

    return (
        <div>
            <Form.Provider
                onFormFinish={(name, {values, forms}) => {
                    if (name === 'userForm') {
                        const {basicForm} = forms;
                        const users = basicForm.getFieldValue('users') || [];
                        basicForm.setFieldsValue({users: [...users, values]});
                        setVisible(false);
                    }
                }}>
                <Form labelCol={{span: 8,}} wrapperCol={{span: 16,}} name="basicForm" onFinish={onFinish}>
                    <Form.Item name="group" label="Group Name" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="User List"
                               shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}>
                        {({getFieldValue}) => {
                            const users = getFieldValue('users') || [];
                            return users.length ? (
                                <ul>
                                    {users.map((user, index) => (
                                        <li key={index} className="user mb-4">
                                            <div className="mr-4 inline-block">
                                                <Avatar icon={<UserOutlined/>}/>
                                            </div>
                                            <span> {user.name} - {user.age} </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <Typography.Text className="ant-form-text" type="secondary">
                                    ( <SmileOutlined/> No user yet. )
                                </Typography.Text>
                            );
                        }}

                    </Form.Item>
                    <Form.Item wrapperCol={{offset: 8, span: 16,}}>
                        <Button htmlType="submit" type="primary">Submit</Button>
                        <Button htmlType="button" style={{margin: '0 8px'}} onClick={showUserModal}>Add User</Button>
                    </Form.Item>
                </Form>
                <ModalForm visible={visible} onCancel={hideUserModal}/>
            </Form.Provider>
        </div>
    );
}
export default Comp;