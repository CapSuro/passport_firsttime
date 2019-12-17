import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Select, Layout } from 'antd';
import { Row, Col } from 'antd';
import { DatePicker } from 'antd';

const { Option } = Select;

class FormComponent extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col span={16}>
            <Form.Item label="Fullname">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Fullname!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={6} offset={2}>
            <Form.Item label="Gender">
              {getFieldDecorator('gender', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your gender!',
                  },
                ],
              })(<Select>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label='BirthDay'>
              {getFieldDecorator('birthday', {
                rules: [{
                  type: 'object',
                  required: true,
                  message: 'Please input your birthday!'
                }]
              })(<DatePicker />)}
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item label="Birthplace">
              {getFieldDecorator('birthplace', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Birthplace!',
                  },
                ],
              })(<Select>
                <Option value="dongthap">Dong Thap</Option>
                <Option value="vinhlong">Ving Long</Option>
              </Select>)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="PID">
              {getFieldDecorator('pid', {
                rules: [{ type: 'text', message: 'please input your PID' }]
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={6} offset={1}>
            <Form.Item label="PID Date">
              {getFieldDecorator('piddate', {
                rules: [{ type: 'object', message: 'please input your PID date' }]
              })(<DatePicker />)}
            </Form.Item>
          </Col>
          <Col span={8} offset={1}>
            <Form.Item label="PID Place">
              {getFieldDecorator('pidplace', {
                rules: [{ message: 'please input your PID place' }]
              })(<Select>
                <Option value="province1">Province 1</Option>
                <Option value="province2">Province 2</Option>
              </Select>)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="Nation">
              {getFieldDecorator('nation', {
                rules: [{ required: true, message: 'please select your Nation' }]
              })(<Select>
                <Option value="kinh">Kinh</Option>
                <Option value="Bana">Bana</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label="Religion">
              {getFieldDecorator('religion', {
                rules: [{ required: true, message: 'please select your Religion' }]
              })(<Select>
                <Option value="none">None</Option>
                <Option value="bubdism">Bubdism</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
          <Form.Item label="Phone Number">
              {getFieldDecorator('phoneumber', {
                rules: [{ type: 'text', required: true, message: 'please input your Phone number' }]
              })(<Input/>)}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export const FormPassport = Form.create({ name: 'normal_login' })(FormComponent);
