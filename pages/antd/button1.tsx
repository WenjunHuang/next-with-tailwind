import React, {ComponentProps, FC, useState} from 'react';
import {Button, Tooltip, Radio, Menu, Dropdown} from "antd";
import {SearchOutlined, DownloadOutlined,DownOutlined,PoweroffOutlined } from '@ant-design/icons';
import {SizeType} from "antd/lib/config-provider/SizeContext"

const AntdButton1: FC<ComponentProps<any>> = (props) => {
    const [size, setSize] = useState<SizeType>('large');
    const [loading,setLoading] = useState(false);
    return (
        <>
            <div className="flex justify-center">
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<SearchOutlined/>}/>
                </Tooltip>
                <Button type="primary" shape="circle">A</Button>
                <Button type="primary" icon={<SearchOutlined/>}>Search</Button>
                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined/>}/>
                </Tooltip>
                <Button icon={<SearchOutlined/>}>Search</Button>
                <Button type="dashed" shape="circle" icon={<SearchOutlined/>}/>
            </div>

            <div className="mt-8 flex flex-col items-center">
                <Radio.Group value={size} onChange={(e) => {
                    setSize(e.target.value as SizeType);
                }}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <br/>
                <div className="flex justify-center">
                    <Button type="primary" size={size}>Primary</Button>
                    <Button size={size}>Default</Button>
                    <Button type="dashed" size={size}>Dashed</Button>
                    <Button type="link" size={size}>Link</Button>
                </div>
                <div className="flex justify-center mt-8">
                    <Button type="primary" icon={<DownloadOutlined/>} size={size}/>
                    <Button type="primary" shape="circle" icon={<DownloadOutlined/>} size={size}/>
                    <Button type="primary" shape="round" icon={<DownloadOutlined/>} size={size}/>
                    <Button type="primary" shape="round" icon={<DownloadOutlined/>} size={size}>Download</Button>
                    <Button type="primary" icon={<DownloadOutlined/>} size={size}>Download</Button>
                </div>

                <div className="flex flex-wrap justify-between mt-8 w-80">
                    <Button type="primary" className="w-1/2">Primary</Button>
                    <Button type="primary" disabled className="w-1/2">Primary(disabled)</Button>
                    <Button className="w-1/2">Default</Button>
                    <Button disabled className="w-1/2">Default(disabled)</Button>
                    <Button type="link" className="w-1/2">Link</Button>
                    <Button type="link" disabled className="w-1/2">Link(disabled)</Button>

                    <Button type="link" danger className="w-1/2">Danger Link</Button>
                    <Button type="link" danger disabled className="w-1/2">Danger Link(disabled)</Button>

                    <Button danger>Danger Default</Button>
                    <Button danger disabled>Danger Default</Button>
                </div>


                <div className="flex flex-wrap justify-between mt-8 w-80">
                    <Button type="primary">primary</Button>
                    <Button>secondary</Button>
                    <Dropdown overlay={<Menu>
                        <Menu.Item key="1">1st item</Menu.Item>
                        <Menu.Item key="2">2nd item</Menu.Item>
                        <Menu.Item key="3">3rd item</Menu.Item>
                    </Menu>}>
                        <Button>
                            Actions <DownOutlined/>
                        </Button>
                    </Dropdown>
                </div>

                <div className="flex flex-wrap justify-between mt-8 w-80">
                    <Button type="primary" loading size={size}>按钮</Button>
                    <Button type="primary" icon={<PoweroffOutlined/>} loading={loading} onClick={()=>{
                        setLoading(true);
                        setTimeout(()=>{
                            setLoading(false)
                        },6000);
                    }}>Click me!</Button>

                </div>


            </div>
        </>
    );
}

export default AntdButton1;