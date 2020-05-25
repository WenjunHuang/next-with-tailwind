import React,{FC,ComponentProps} from 'react';

import {Button,Space,Upload,Popconfirm} from 'antd';
import {UploadOutlined} from '@ant-design/icons';

const Space1:FC<ComponentProps<any>> = (props)=>{
    return (
        <Space>
            Space
            <Button type="primary">Button</Button>
            <Upload>
                <Button icon={<UploadOutlined/>}>
                   click to Upload
                </Button>
            </Upload>
            <Popconfirm title="Are your sure delete this task?" okText="Yes" cancelText="No">
                <Button>Confirm</Button>
            </Popconfirm>

        </Space>
    );
}

export default Space1;