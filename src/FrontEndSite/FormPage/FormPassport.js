import React from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

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
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

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
                <Option value="dongthap">Dong Thap</Option>
                <Option value="vinhlong">Vinh Long</Option>
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
                <Option value="dongthap">Dong Thap</Option>
                <Option value="vinhlong">Vinh Long</Option>
              </Select>)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="Nation">
              {getFieldDecorator('nation')(<Select>
                <Option value="1">Nation 1</Option>
                <Option value="2">Nation 2</Option>
                <Option value="3">Nation 3</Option>
              </Select>)}
            </Form.Item>
          </Col>
          <Col span={7} offset={1}>
            <Form.Item label="Religion">
              {getFieldDecorator('religion')(<Select>
                <Option value="1">Religion 1</Option>
                <Option value="2">Religion 2</Option>
                <Option value="3">Religion 3</Option>
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
            <Form.Item label={<span>Addredd Province&nbsp;
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
              })(<Select>
                <Option value="dongthap">Dong Thap</Option>
                <Option value="vinhlong">Vinh Long</Option>
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
                <Option value="nhaman">Nha Man</Option>
                <Option value="sadec">Sa Dec</Option>
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
        <Form.Item label="Habitual Residence">
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [
              { type: 'array', required: true, message: 'Please select your habitual residence!' },
            ],
          })(<Cascader options={residences} />)}
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Website">
          {getFieldDecorator('website', {
            rules: [{ required: true, message: 'Please input website!' }],
          })(
            <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website"
            >
              <Input />
            </AutoComplete>,
          )}
        </Form.Item>
        <Form.Item label="Captcha" extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(<Input />)}
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export const FormPassport = Form.create({ name: 'register' })(RegistrationForm);




//FIXME  NOT VALIDATE FORM