import React from "react";
import { Menu } from "antd";
import { Form, Input, Radio} from 'antd';
import  "./Suggest.css";
const Suggest = () => {
  const menus = [
    { name: "Suggest up your task" },
  ];
  const renderMenus = () => {
    return menus.map((item) => (
      <Menu.Item style={{ marginRight: "2vw" }} key={item.name} class={item.name}>
        {item.name}
      </Menu.Item>
    ));
  };
  const [suggest, setSuggest] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setSuggest(e.target.value);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div class="comp">
    <Menu
      mode="horizontal"
      style={{
        display: "flex",
        justifyContent: "center",
        margin:"8px"
      }}
    >
      {renderMenus()}
      
      
    </Menu>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="What is your budget?(This is an estimate)"
        name="budget"
        rules={[
          {
            required: true,
            message: 'Please input your suggest!',
          },
        ]}
      >
        </Form.Item>
      <Form.Item label=" "
        name="budget"
        rules={[
          {
            required: true,
            message: 'Please input your suggest!',
          },
        ]}>
        <Radio.Group onChange={onChange} suggest={suggest}>
        <Radio value={1}>Total</Radio>
        <Radio value={2}> Hourly rate</Radio>
        </Radio.Group>
      </Form.Item>
      </Form>
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label=" "
        name="budget"
        rules={[
          {
            required: true,
            message: 'Please input your suggest!',
          },
        ]}>
        <Input />

      </Form.Item>

    </Form>
    </div>
  );
};

export default Suggest;

