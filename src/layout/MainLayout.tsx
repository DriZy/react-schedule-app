import {Breadcrumb, Layout} from 'antd';
import {Outlet, useLocation} from 'react-router-dom';
import React from 'react';
import './MainLayout.css'
import HorizontalHeader from "../components/header/HorizontalHeader";
import PatientTable from "../components/patient/table/PatientTable";

const {Header, Content, Footer} = Layout;

const MainLayout: React.FC = () => (
    <Layout className="layout">
        <HorizontalHeader/>
        <Content style={{padding: '0 50px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                <Outlet/>
            </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
);

export default MainLayout;