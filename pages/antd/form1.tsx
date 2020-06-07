import React, {FC, ComponentProps} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';

const Comp: FC<ComponentProps<any>> = (props) => {
    return (
        <div className="m-4 flex items-center">
            <Form labelCol={{span: 8}} wrapperCol={{span: 16}} name="basic" initialValues={{remember: true}}>
                <Form.Item label="Username" name="username"
                           rules={[{required: true, message: 'Please input your username!'}]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="密码" name="password" rules={[{required:true,message:'请输入密码'}]}>
                    <Input.Password/>
                </Form.Item>
            </Form>
            <style jsx>
                {`
`}
            </style>
        </div>
    )
}

export default Comp;