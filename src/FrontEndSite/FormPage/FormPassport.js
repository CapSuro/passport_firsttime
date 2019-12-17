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
    const { getFieldDecorator } = this.props.form;const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
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
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="Address Province">
              {getFieldDecorator('addressprovince', {
                rules: [{ required: false, message: 'please select your Address Province' }]
              })(<Select>
                <Option value="kinh">Kinh</Option>
                <Option value="Bana">Bana</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label="Address District">
              {getFieldDecorator('addresssdistrict', {
                rules: [{ required: false, message: 'please select your Address District' }]
              })(<Select>
                <Option value="none">None</Option>
                <Option value="bubdism">Bubdism</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label="Address Detail">
              {getFieldDecorator('addressdetail', {
                rules: [{ type: 'text', required: false, message: 'please input your Address Detail' }]
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="Tabernacle Address Province">
              {getFieldDecorator('tabernacleaddressprovince', {
                rules: [{ required: false, message: 'please select your Tabernacle Address Province' }]
              })(<Select>
                <Option value="kinh">Kinh</Option>
                <Option value="Bana">Bana</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label="Tabernacle Address District">
              {getFieldDecorator('tabernacleaddresssdistrict', {
                rules: [{ required: false, message: 'please select your Tabernacle Address District' }]
              })(<Select>
                <Option value="none">None</Option>
                <Option value="bubdism">Bubdism</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label="Tabernacle Address Detail">
              {getFieldDecorator('tabernacleaddressdetail', {
                rules: [{ type: 'text', required: false, message: 'please input your Tabernacle Address Detail' }]
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <Form.Item label="Job">
              {getFieldDecorator('job', {
                rules: [{ type: 'text', required: false, message: 'please input your Job' }]
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item label="Job Address">
              {getFieldDecorator('jobaddress', {
                rules: [{ type: 'text', required: false, message: 'please input your Job Address' }]
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <Form.Item label="Father's Fullname">
              {getFieldDecorator('fathername', {
                rules: [{ type: 'text', message: 'Please input your father\'s fullname' }]
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item label="Father's Birthday">
              {getFieldDecorator('fatherbirthday', {
                rules: [{ type: 'object', message: 'Please input your father\'s birthday' }]
              })(<DatePicker />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <Form.Item label="Mother's Fullname">
              {getFieldDecorator('mothername', {
                rules: [{ type: 'text', message: 'Please input your mother\'s fullname' }]
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item label="Mother's Birthday">
              {getFieldDecorator('motherbirthday', {
                rules: [{ type: 'object', message: 'Please input your mother\'s birthday' }]
              })(<DatePicker />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <Form.Item label="Husband/Wife's Fullname">
              {getFieldDecorator('husbandwifename', {
                rules: [{ type: 'text', message: 'Please input your husbandwife\'s fullname' }]
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item label="Husband/Wife's Birthday">
              {getFieldDecorator('husbandwifebirthday', {
                rules: [{ type: 'object', message: 'Please input your husbandwife\'s birthday' }]
              })(<DatePicker />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={11}>
            <Form.Item label="Receiving Agency">
              {getFieldDecorator('receivingagency', {
                rules: [{
                  required: true,
                  message: 'Please select Receving Agency'
                }]
              })(<Select>
                <Option value="province1">1</Option>
                <Option value="province2">2</Option>
                <Option value="province3">3</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={11} offset={2}>
            <Form.Item label="Receiving Address">
              {getFieldDecorator('receivingaddress', {
                rules: [{
                  required: true,
                  message: 'Please select Receving Address'
                }]
              })(<Select>
                <Option value="province1">1</Option>
                <Option value="province2">2</Option>
                <Option value="province3">3</Option>
              </Select>)}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export const FormPassport = Form.create({ name: 'normal_login' })(FormComponent);
