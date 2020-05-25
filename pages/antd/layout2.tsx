import React, {ComponentProps, FC, useState} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {
    TeamOutlined,
    FileOutlined,
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from '@ant-design/icons';

const {SubMenu} = Menu;
const {Header, Content, Sider,Footer} = Layout;

const Layout2: FC<ComponentProps<any>> = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout className="min-h-screen">
            <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <div className="logo bg-gray-200 m-4"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined/>}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined/>}>
                        Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined/>}/>
                </Menu>
            </Sider>
            <Layout>
                <Header className="bg-white text-lg p-0">
                    {
                        React.createElement(collapsed?MenuUnfoldOutlined:MenuFoldOutlined,{
                            className:"mx-6",
                            onClick: ()=>setCollapsed(!collapsed)
                        })
                    }
                </Header>
                <Content className="my-8 mx-6 bg-white p-4">
                    Content
                </Content>
                <Footer className="text-center">UED</Footer>
            </Layout>
            <style jsx>
                {`
                  div.logo {
                      height: 32px;
                  }
                `}
            </style>
        </Layout>

    );
}

export default Layout2;