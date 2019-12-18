import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { HomePage } from './../HomePage/HomePage';
import { MonitorPage } from './../MonitorPage/MonitorPage';
import { FormPage } from '../FormPage/FormPage';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const Entry = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (<Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={()=>setCollapsed(!collapsed)}>
            <div className="logo">QikPassport</div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="document">
                    <Icon type="file" />
                    <span><Link to="/">Document</Link></span>
                </Menu.Item>
                <Menu.Item key="form">
                    <Icon type="form" />
                    <span><Link to="/passport_form">Passport Form</Link></span>
                </Menu.Item>
                <Menu.Item key="monitor">
                    <Icon type="monitor" />
                    <span><Link to="monitor">Monitor</Link></span>
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
              {props.location['pathname']==="/passport_form"?<FormPage/>:
              props.location['pathname']==="/monitor"?<MonitorPage/>:<HomePage/>}
          </Content>
          <Footer style={{ textAlign: 'center' }}>QIkPassport ©2018 all right reserved</Footer>
        </Layout>
    </Layout>)
}