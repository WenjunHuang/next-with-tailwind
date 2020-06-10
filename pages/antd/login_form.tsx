import React, {FC, ComponentProps, useState} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

const NormalLoginForm: FC<ComponentProps<any>> = (props) => {
    const [loading,setLoading] = useState(false);
    const onFinish = values => {
        console.log('Received values of form: ', values);
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },10 * 1000);
    };

    return (
        <div>
            <Form name="normal_login" className="login-form" initialValues={{remember: true}} onFinish={onFinish}>
                <Form.Item name="username" rules={[{required: true, message: 'Please input your Usesrname!'}]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username" disabled={loading}/>
                </Form.Item>
                <Form.Item name="password" rules={[{required: true, message: 'Please input your Password!'}]}>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                        disabled={loading}
                    />
                </Form.Item>
                <Form.Item>
                    <div className="flex justify-between">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a className="text-indigo-200 no-underline" href="#">Forgot password</a>
                    </div>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full" loading={loading}>Log in</Button>
                </Form.Item>
            </Form>
        </div>

    );
}

export default NormalLoginForm;