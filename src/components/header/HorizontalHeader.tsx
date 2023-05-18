import {  Menu } from 'antd';
import React from 'react';
import './Header.css'
import {Header} from "antd/es/layout/layout";

const HorizontalHeader: React.FC = () => {

    const items = [
        {label: 'DrNG', key: 'dr'}, // remember to pass the key prop
        {label: 'Patients', key: 'patients'}, // which is required
    ];
    return(
    <Header>
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
        />
    </Header>
    );
}

export default HorizontalHeader;