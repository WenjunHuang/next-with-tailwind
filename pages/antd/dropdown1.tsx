import React, {ComponentProps, FC} from 'react';
import {Menu, Dropdown, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';

const Comp: FC<ComponentProps<any>> = (props) => {
    const menu = (
        <Menu>
            <Menu.Item>
                <a href="http://www.alipay.com" target="_blank">1st menu item</a>
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
            </div>
        </>
    );
}

export default Comp;