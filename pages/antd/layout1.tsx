import React, {ComponentProps,FC} from 'react';
import {Layout,Menu,Breadcrumb} from "antd";

const {Header,Content,Footer} = Layout;

const Layout1:FC<ComponentProps<any>> = (props)=>{
    return (
      <Layout>
          <Header className="flex items-center">
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
          </Header>
          <Content className="px-12">
              <Breadcrumb className="my-4">
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className="bg-white min-h-screen p-5">Content</div>
          </Content>
          <Footer className="text-center">Footer</Footer>
          <style jsx>{`
            div.logo {
            width: 120px;
            height: 31px;
            background:rgba(255,255,255,0.2);
            margin: 16px 24px 16px 0;
            } 
            div.content {
            }
          `}</style>
      </Layout>
    );

}

export default Layout1;