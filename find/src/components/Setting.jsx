import React from "react";
import { Menu } from "antd";
import { Form, Input, TimePicker } from 'antd';
import "./Setting.css";
import moment from 'moment';



const Setting = (props) => {

  function onChange(time, timeString) {
    console.log(time, timeString);
  }
  const menus = [
    { name: "Setting up your task" },
  ];
  const renderMenus = () => {
    return menus.map((item) => (
      <Menu.Item style={{ marginRight: "2vw" }} key={item.name} class={item.name}>
        {item.name}
      </Menu.Item>
    ));
  };
  //   const [value, setValue] = React.useState(1);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  console.log(props.state)
  if (props.state !== 2) {
    return (
      <div class="comp">
        <Menu
          mode="horizontal"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "8px"
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
            label="Suburb"
            name="suburb"
            rules={[
              {
                required: true,
                message: 'Please input your suburb!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: 'Please input your date!',
              },
            ]}
          >
            <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
          </Form.Item>
        </Form>
      </div>
    );
  }
  else {
    return (
      <div class="comp">
        <Menu
          mode="horizontal"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "8px"
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
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: 'Please input your date!',
              },
            ]}
          >
            <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
          </Form.Item>
        </Form>
      </div>
    );
  }
};

export default Setting;

