import React from 'react';
import { Row, Col } from 'antd';
import { Icon, Input, Form, Button } from 'antd';
import { Table } from 'antd';

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
    const columns = [{
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    }, {
        title: 'Fullname',
        dataIndex: 'fullname',
        key: 'fullname'
    }, {
        title: 'Regist Date',
        dataIndex: 'registdate',
        key: 'registdate'
    }, {
        title: 'State',
        dataIndex: 'state',
        key: 'state'
    }];

    const tempalteData = [
        {
            id: '1',
            fullname: 'Hung Dep Trai',
            registdate: '12-8-2019',
            state: 'DN'
        },
        {
            id: '2',
            fullname: 'Hung Dep Trai',
            registdate: '12-8-2019',
            state: 'DN'
        },
        {
            id: '3',
            fullname: 'Hung Dep Trai',
            registdate: '12-8-2019',
            state: 'DN'
        },
    ]

    return <Table columns={columns} dataSource={tempalteData} />
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