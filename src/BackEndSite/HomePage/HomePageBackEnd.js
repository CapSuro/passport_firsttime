import React from 'react';
import { Table } from 'antd';
import { Button, Divider, Tag, Tooltip } from 'antd';

const { Column } = Table

const data = [
    {
        id: 1,
        fullname: 'Hung Dep Trai',
        birthday: '8-1-1998',
        addressprovince: 'Dong Thap',
        addressdistrict: 'Chau Thanh',
        addressdetail: 'Cai Tau Ha',
        state: 'CN'
    },
    {
        id: 2,
        fullname: 'Hung Dep Trai',
        birthday: '8-1-1998',
        addressprovince: 'Dong Thap',
        addressdistrict: 'Chau Thanh',
        addressdetail: 'Cai Tau Ha',
        state: 'CXN'
    },
    {
        id: 3,
        fullname: 'Hung Dep Trai',
        birthday: '8-1-1998',
        addressprovince: 'Dong Thap',
        addressdistrict: 'Chau Thanh',
        addressdetail: 'Cai Tau Ha',
        state: 'CN'
    },
]
export const HomePageBackEnd = (props) => {

    return (<Table dataSource={data}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Fullname" dataIndex="fullname" key="fullname" />
        <Column title="Birthday" dataIndex="birthday" key="birthday" />
        <Column title="Address Province" dataIndex="addressprovince" key="addressprovince" />
        <Column title="Address District" dataIndex="addressdistrict" key="addressdistrict" />
        <Column title="Address Detail" dataIndex="addressdetail" key="addressdetail" />
        <Column title="State" dataIndex="state" key="state" render={
            state => (<span>
                <Tooltip title={state==="CN"?"Waiting for receiving":"Waiting for checking"}>
                    <Tag color="blue">{state}
                    </Tag>
                </Tooltip>
            </span>)
        } />
        <Column title="Action" key="action"
            render={
                (text, record) => (
                    <span>
                        <Button type="primary">Recived</Button>
                        <Divider type="vertical"></Divider>
                        <Button type="danger">Checked</Button>
                    </span>
                )
            } />
    </Table>)
}