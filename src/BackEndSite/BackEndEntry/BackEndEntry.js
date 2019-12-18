import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomePageBackEnd } from './../HomePage/HomePageBackEnd';
import { Saving } from './../Saving/Saving';
import { Approval } from './../Approval/Apporval';
const { Header, Content, Footer, Sider } = Layout;

export const BackendEntry = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (<Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
            <div className="logo">QikPassport</div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="requestform">
                    <Link to="/"><Icon type="file" />
                        <span>Request Form</span></Link>
                </Menu.Item>
                <Menu.Item key="approval">
                    <Link to="/approval"><Icon type="form" />
                        <span>Approval</span></Link>
                </Menu.Item>
                <Menu.Item key="saving">
                    <Link to="saving"><Icon type="monitor" />
                        <span>Saving</span></Link>
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
                {props.location['pathname'] === "/saving" ? <Saving /> :
                    props.location['pathname'] === "/approval" ? <Approval /> : <HomePageBackEnd />}
            </Content>
            <Footer style={{ textAlign: 'center' }}>QIkPassport ©2018 all right reserved</Footer>
        </Layout>
    </Layout>)
}