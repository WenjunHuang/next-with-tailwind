import React, {ComponentProps, FC} from 'react';
import {Menu, Dropdown, Button,message,Tooltip} from 'antd';
import {UserOutlined,DownOutlined} from '@ant-design/icons';
import {MenuProps} from "antd/lib/menu"

const Comp: FC<ComponentProps<any>> = (props) => {
    const handleMenuClick: MenuProps['onClick'] = (e)=>{
        message.info(`Click on menu item: ${e.key}`);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined/>}>
                1st menu item
            </Menu.Item>
            <Menu.Item>
                <a href="http://www.alipay.com" target="_blank">2nd menu item</a>
            </Menu.Item>
            <Menu.Item>
                <a href="http://www.alipay.com" target="_blank">3rd menu item</a>
            </Menu.Item>
        </Menu>
    );
    return (
        <>
            <div>
                <Dropdown overlay={menu} placement="bottomLeft">
                    <Button>bottomLeft</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="bottomCenter">
                    <Button>bottomCenter</Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="bottomRight">
                    <Button>bottomRight</Button>
                </Dropdown>
            </div>
            <div className="mt-4">
                <Dropdown.Button overlay={menu}>
                    Dropdown
                </Dropdown.Button>
                <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
                    Dropdown
                </Dropdown.Button>
                <Dropdown.Button overlay={menu}>
                    With Tooltip
                </Dropdown.Button>
                <Dropdown overlay={menu}>
                    <Button>
                        Button <DownOutlined />
                    </Button>
                </Dropdown>
            </div>
        </>
    );
}

export default Comp;