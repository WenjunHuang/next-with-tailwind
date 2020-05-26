import React, {ComponentProps, FC, useState} from 'react';

import {Button,Form, Input, Radio, Select, TreeSelect, DatePicker, InputNumber,Switch} from "antd";
import {SizeType} from "antd/lib/config-provider/SizeContext"

const Comp: FC<ComponentProps<any>> = (props) => {
    const [componentSize, setComponentSize] = useState<SizeType>('small');

    return (
        <div>
            <Form labelCol={{span: 4}}
                  wrapperCol={{span: 14}}
                  layout="horizontal"
                  initialValues={{size: componentSize}}
                  onValuesChange={({size}: { size: SizeType }) => setComponentSize(size)}
                  size={componentSize}>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="middle">Middle</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Input">
                    <Input/>
                </Form.Item>
                <Form.Item label="Select">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="TreeSelect">
                    <TreeSelect treeData={[{
                        title: 'Light',
                        value: 'light',
                        children: [{title: 'Bamboo', value: 'bamboo'}]
                    }]}/>
                </Form.Item>
                <Form.Item label="DatePicker">
                    <DatePicker/>
                </Form.Item>
                <Form.Item label="InputNumber">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Switch">
                    <Switch />
                </Form.Item>
                <Form.Item label = "Button">
                    <Button>BUtton</Button>

                </Form.Item>
            </Form>
        </div>
    );

}

export default Comp;
