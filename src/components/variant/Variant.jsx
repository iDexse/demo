import React, { useState } from "react";

import { Form, Input, Select, Checkbox, Button, Space } from "antd";
import { PlusOutlined, DeleteFilled } from "@ant-design/icons";

import "./variant.scss";

function Variant() {
  const [addEl, setAddEl] = useState(false);
  const variant_contents = (
    <div className="variant-content">
      <div className="d-flex justify-content-between">
        <label htmlFor="name-variant">
          <code className="required">*</code>Tên biến thể
        </label>
        <Checkbox>Thêm hình ảnh</Checkbox>
      </div>
      <Form.Item
        name="name-variant"
        rules={[{ required: true, message: "Vui lòng chọn danh mục sản phẩm" }]}
      >
        <Select id="name-variant" placeholder="Tên biến thể" options={[]} />
      </Form.Item>
      <Form.Item
        name="options"
        label="Tùy chọn"
        rules={[{ required: true, message: "Vui lòng chọn danh mục sản phẩm" }]}
      >
        <div className="d-flex align-items-center">
          <Input
            style={{ maxWidth: "96%" }}
            placeholder="Nhập một tùy chọn"
            showCount
            maxLength={50}
          />
          <DeleteFilled style={{ fontSize: "20px", marginLeft: "5px" }} />
        </div>
      </Form.Item>
      <Space size="small" direction="vertical" style={{ width: "100%" }}>
        <Button
          type="dashed"
          block
          className="d-flex justify-content-center align-items-center"
        >
          <PlusOutlined />
          Thêm mới
        </Button>
        <Button type="primary">Hoàn tất</Button>
      </Space>
    </div>
  );

  return (
    <div>
      {variant_contents}
      {addEl ? null : (
        <Button
          type="dashed"
          className="mt-2 d-flex justify-content-center align-items-center"
          onClick={() => setAddEl(true)}
        >
          <PlusOutlined />
          Thêm biến thể
        </Button>
      )}
      {addEl && variant_contents}
    </div>
  );
}

export default Variant;
