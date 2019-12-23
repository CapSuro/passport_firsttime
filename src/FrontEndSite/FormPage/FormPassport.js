import React from 'react';
import { provinces } from './../../provinces';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Button, DatePicker } from 'antd';
import { district } from './../../districts';
import { nations } from './../../nations';
import { religions } from './../../religions';

const { Option } = Select;

class RegistrationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      AddressProvince: null
    };
  }

  setAddressProvince = value => {console.log(value)}

  getDistrictsInProvince = (provinceid) =>
    district.filter(d => d.provinceid === provinceid)

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const tailFormItemLayout = {
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
          <Col span={8}>
            <Form.Item label="Fullname">
              {getFieldDecorator('fullname', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Fullname!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label="Birthday">
              {getFieldDecorator('birthday', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Birthday!',
                  },
                ],
              })(<DatePicker />)}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Birthplace">
              {getFieldDecorator('birthplace', {
                rules: [
                  {
                    required: true,
                    message: 'Please select your Birthplace!',
                  },
                ],
              })(<Select>
                {provinces.map(p => <Option value={p.value} key={p.value}>{p.name}</Option>)}
              </Select>)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Form.Item label="Gender">
              {getFieldDecorator('gender', {
                rules: [
                  {
                    required: true,
                    message: 'Please select your Gender!',
                  }
                ],
              })(<Select>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={5} offset={1}>
            <Form.Item label={
              <span>PID&nbsp;
              <Tooltip title="PID number: 9 to 12 digits">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }>
              {getFieldDecorator('pid')(<Input />)}
            </Form.Item>
          </Col>
          <Col span={5} offset={1}>
            <Form.Item label="PID Date">
              {getFieldDecorator('piddate')(<DatePicker />)}
            </Form.Item>
          </Col>
          <Col span={5} offset={1}>
            <Form.Item label="PID Place">
              {getFieldDecorator('pidplace')(<Select>
                {provinces.map(p => <Option value={p.value} key={p.value}>{p.name}</Option>)}
              </Select>)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="Nation">
              {getFieldDecorator('nation')(<Select>
                {nations.map(n => <Option value={n.value} key={n.value}>{n.name}</Option>)}
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label="Religion">
              {getFieldDecorator('religion')(<Select>
                {religions.map(r => <Option value={r.value} key={r.value}>{r.name}</Option>)}
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label="Phone Number">
              {getFieldDecorator('phonenumber', {
                rules: [{
                  required: true
                  , message: 'Please input your Phone Number!'
                }],
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label={<span>Address Province&nbsp;
              <Tooltip title="write based on Registration book">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>}>
              {getFieldDecorator('addprovince', {
                rules: [
                  {
                    required: true,
                    message: 'Please select your Address Province!',
                  }
                ],
              })(<Select onChange={()=>console.log("change")}>
                {provinces.map(p => <Option value={p.value} key={p.value}>{p.name}</Option>)}
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label={<span>Addredd District&nbsp;
              <Tooltip title="write based on Registration book">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>}>
              {getFieldDecorator('adddistrict', {
                rules: [
                  {
                    required: true,
                    message: 'Please select your Address District!',
                  }
                ],
              })(<Select>
                <Option value="1">{this.state.AddressProvince}</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label={<span>Addredd Detail&nbsp;
              <Tooltip title="write based on Registration book">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>}>
              {getFieldDecorator('adddetail', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Address Detail'
                  }
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label={<span>Staying Province&nbsp;
              <Tooltip title="write based on your now staying place">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>}>
              {getFieldDecorator('addprovince')(<Select>
                <Option value="dongthap">Dong Thap</Option>
                <Option value="vinhlong">Vinh Long</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label={<span>Staying District&nbsp;
              <Tooltip title="write based on your now staying place">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>}>
              {getFieldDecorator('adddistrict')(<Select>
                <Option value="nhaman">Nha Man</Option>
                <Option value="sadec">Sa Dec</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label={<span>Staying Detail&nbsp;
              <Tooltip title="write based on your now staying place">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>}>
              {getFieldDecorator('staydetail')(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="Job">
              {getFieldDecorator('job')(<Input />)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label={
              <span>Company&nbsp;
              <Tooltip title="Company which you are working at">
                  <Icon type="question-circle-o" />
                </Tooltip></span>
            }>
              {getFieldDecorator('company')(<Input />)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label="Company Address">
              {getFieldDecorator('companyaddress')(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Form.Item label={
              <span>Father Name&nbsp;
              <Tooltip title="If you have father, you must input this field">
                  <Icon type="question-circle-o" />
                </Tooltip></span>
            }>
              {getFieldDecorator('fatherfullname')(<Input />)}
            </Form.Item>
          </Col>
          <Col span={5} offset={1}>
            <Form.Item label="Father's Birthday">
              {getFieldDecorator('fatherbirthday')(<DatePicker />)}
            </Form.Item>
          </Col>
          <Col span={5} offset={1}>
            <Form.Item label={<span>Mother's Fullname&nbsp;
              <Tooltip title="If you have mother, you must input this field">
                <Icon type="question-circle-o" />
              </Tooltip></span>}>
              {getFieldDecorator('motherfullname')(<Input />)}
            </Form.Item>
          </Col>
          <Col span={5} offset={1}>
            <Form.Item label="Mother's Birthday">
              {getFieldDecorator('motherbirthday')(<DatePicker />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={18}>
            <Form.Item label="Husband/Wife Fullname">
              {getFieldDecorator('husbandwifefullname')(<Input />)}
            </Form.Item>
          </Col>
          <Col span={5} offset={1}>
            <Form.Item label="Husband/Wife Birthday">
              {getFieldDecorator('husbandwifebirthday')(<DatePicker />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item label="Receiving Organization">
              {getFieldDecorator('recievingorganization', {
                rules: [
                  {
                    required: true,
                    message: 'Please select receiving organization!'
                  },
                ],
              })(<Select>
                <Option value="1">Province 1</Option>
                <Option value="2">Province 2</Option>
                <Option value="3">Province 3</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={11} offset={1}>
            <Form.Item label="Receiving Address">
              {getFieldDecorator('receivingaddress', {
                rules: [
                  {
                    required: true,
                    message: 'Please select receiving organization!'
                  }
                ]
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit Form
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export const FormPassport = Form.create({ name: 'register' })(RegistrationForm);
