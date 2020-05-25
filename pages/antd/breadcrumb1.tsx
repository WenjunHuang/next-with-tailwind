import React, {FC, ComponentProps} from 'react';
import {Breadcrumb, Menu} from "antd";
import {HomeOutlined, UserOutlined} from "@ant-design/icons";

const Comp: FC<ComponentProps<any>> = (props) => {
    return (
        <>
            <div className="mt-4">
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="#">Application Center</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="#">Application List</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="mt-4">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">
                        <HomeOutlined/>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        <UserOutlined/>
                        <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Application</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="mt-4">
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Application Center</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Application List</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">An Application</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="mt-4">
                <Breadcrumb>
                    <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Component</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item overlay={
                        <Menu>
                            <Menu.Item>
                                <a target="_blank">General</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a target="_blank">Layout</a>
                            </Menu.Item>
                            <Menu.Item>
                                <a>Navigation</a>
                            </Menu.Item>
                        </Menu>
                    }>
                        <a href="">General</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Button</Breadcrumb.Item>
                </Breadcrumb>

            </div>

        </>
    );
}

export default Comp;