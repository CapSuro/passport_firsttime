import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomePage } from './../HomePage/HomePage';
import { MonitorPage } from './../MonitorPage/MonitorPage';
import { FormPage } from '../FormPage/FormPage';
import { loadData } from './../ActionCreators';
import { DataTypes } from '../Types';
import { connect } from 'react-redux';

const { Header, Content, Footer, Sider } = Layout;

const mapStateToProps = (store) => ({
    ...store
});

const mapDispatchToProps = {
    loadData
}

const EntryComponent = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(()=>{
        props.loadData(DataTypes.NATIONS);
        props.loadData(DataTypes.PROVINCES);
        props.loadData(DataTypes.RELIGIONS);
        props.loadData(DataTypes.DISTRICTS);
    });

    return (<Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
            <div className="logo">QikPassport</div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="document">
                    <Link to="/"><Icon type="file" />
                        <span>Document</span></Link>
                </Menu.Item>
                <Menu.Item key="form">
                    <Link to="/passport_form"><Icon type="form" />
                        <span>Passport Form</span></Link>
                </Menu.Item>
                <Menu.Item key="monitor">
                    <Link to="monitor"><Icon type="monitor" />
                        <span>Monitor</span></Link>
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
                {props.location['pathname'] === "/passport_form" ? <FormPage {...props}/> :
                    props.location['pathname'] === "/monitor" ? <MonitorPage /> : <HomePage />}
            </Content>
            <Footer style={{ textAlign: 'center' }}>QIkPassport ©2018 all right reserved</Footer>
        </Layout>
    </Layout>)
}

export const Entry = connect(mapStateToProps, mapDispatchToProps)(EntryComponent);