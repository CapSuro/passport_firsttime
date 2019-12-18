import React from 'react';
import { Row, Col } from 'antd';
import { Icon, Input, Form, Button } from 'antd';
import { Table, Tag, Tooltip } from 'antd';

const { Column } = Table;

const getColor = (state) => {
    if (state === 'CN') return 'blue';
    else if (state === 'CXT') return 'red';
    else if (state === 'CD') return 'green';
    else if (state === 'KD') return 'black';
    else if (state === 'KXT') return 'black';
    else return 'orange';
}

const getTooltip = (state) => {
    if (state === 'CN') return 'waiting for receiving';
    else if (state === 'CXT') return 'waiting for checking';
    else if (state === 'CD') return 'waiting for approval';
    else if (state === 'KD') return 'approval denied';
    else if (state === 'KXT') return 'not validated';
    else return 'approved';
}

const SearchForm = Form.create({ name: 'search_form' })((props) => {
    const { getFieldDecorator } = props.form;
    return (<Form>
        <Row>
            <Col span={18}>
                <Form.Item>
                    {getFieldDecorator('search', { rules: [{ type: 'text', message: 'please inset valid text' }] })
                        (<Input prefix={<Icon type="search" />} />)}
                </Form.Item>
            </Col>
            <Col span={5} offset={1}>
                <Button type="primary" htmlType="submit">Search</Button>
            </Col>
        </Row>
    </Form>)
});


const TablePassport = (props) => {
    const tempalteData = [
        {
            id: '1',
            fullname: 'Hung Dep Trai',
            registdate: '12-8-2019',
            state: 'CN'
        },
        {
            id: '2',
            fullname: 'Hung Dep Trai',
            registdate: '12-8-2019',
            state: 'CXT'
        },
        {
            id: '3',
            fullname: 'Hung Dep Trai',
            registdate: '12-8-2019',
            state: 'CD'
        },
        {
            id: '4',
            fullname: 'Hung Dep Trai',
            registdate: '12-8-2019',
            state: 'KXT'
        },
        {
            id: '5',
            fullname: 'Hung Dep Trai',
            registdate: '12-8-2019',
            state: 'DD'
        },
        {
            id: '6',
            fullname: 'Hung Dep Trai',
            registdate: '12-8-2019',
            state: 'KD'
        },
    ]

    return <Table dataSource={tempalteData}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Fullname" dataIndex="fullname" key="fullname" />
        <Column title="Regist Date" dataIndex="registdate" key="registdate" />
        <Column title="State" dataIndex="state" key="state"
            render={
                state => (
                    <span>
                        <Tooltip title={getTooltip(state)}>
                            <Tag color={getColor(state)}>{state}</Tag>
                        </Tooltip>
                    </span>
                )
            } />
    </Table>
}

export const MonitorPage = (props) => {
    return (
        <div className="search_bar">
            <Row>
                <SearchForm />
            </Row>
            <Row>
                <TablePassport />
            </Row>
        </div>)
}