import React from 'react';
import {Row, Col} from 'antd';
import { FormPassport } from './FormPassport';


export const FormPage = (props) => {
    return (
        <Row>
            <Col span={4}></Col>
            <Col span={16} style={{marginTop: "2em", marginBottom:"2em"}}>
                <FormPassport {...props}/>
            </Col>
            <Col span={4}></Col>
        </Row>
    )
}