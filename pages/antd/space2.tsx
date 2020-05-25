import React, {FC, ConsumerProps, useState} from 'react';
import {UploadOutlined} from '@ant-design/icons';
import {Space, Card, Radio, Button, Slider} from "antd"
import {SizeType} from "antd/lib/config-provider/SizeContext"


const Space2: FC<ConsumerProps<any>> = (props) => {
    const [size, setSize] = useState<SizeType>('small');
    const [customSize, setCustomSize] = useState(8);

    return (
        <>
            <Space direction="vertical">
                <Card title="Card" className="w-80">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Card title="Card" className="w-80">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Space>

            <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
                <Radio value="small">Small</Radio>
                <Radio value="middle">Middle</Radio>
                <Radio value="large">Large</Radio>
            </Radio.Group>
            <br/>
            <Space size={size}>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
            </Space>

            <Slider value={customSize} onChange={(e) => setCustomSize(e as number)}/>
            <br/>
            <Space size={customSize}>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
            </Space>
        </>
    )
}

export default Space2;