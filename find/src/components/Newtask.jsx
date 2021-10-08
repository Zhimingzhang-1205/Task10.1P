import React from "react";
import { Menu } from "antd";
import { Form,Radio } from 'antd';
import  "./New.css";
const Newtask = () => {
  const menus = [
    { name: "New Task" },
  ];
  const renderMenus = () => {
    return menus.map((item) => (
      <Menu.Item style={{ marginRight: "2vw" }} key={item.name} class={item.name}>
        {item.name}
      </Menu.Item>
    ));
  };
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
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
      autoComplete="off"
    >
      <Form.Item
        label="Select Task Type:"
        name="suburb"
        rules={[
          {
            required: true,
            message: 'Please Select Task Type!',
          },
        ]}
      >
        <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>In person</Radio>
        <Radio value={2}> Online</Radio>
      </Radio.Group>
      </Form.Item>

    </Form>
    
    </div>
  );
};

export default Newtask;

