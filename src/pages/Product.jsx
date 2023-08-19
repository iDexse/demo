import React, { useState } from "react";

import "react-quill/dist/quill.snow.css";

import { PlusOutlined } from "@ant-design/icons";
import { Anchor, Col, Row, Input, Upload, Switch, Form, Select } from "antd";

import {
  Cardframe,
  PageHeader,
  TextAreaEditor,
  DataTable,
  Variant,
} from "../components";

import "./product.scss";

function Product() {
  const [checked, setChecked] = useState(false);
  // upload images
  const [fileList1, setFileList1] = useState([]);
  const [fileList2, setFileList2] = useState([]);
  const [fileList3, setFileList3] = useState([]);
  const [fileList4, setFileList4] = useState([]);
  const [fileList5, setFileList5] = useState([]);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  // kích hoạt biến thể
  function handleSwitch(check) {
    setChecked(check);
  }

  return (
    <Form layout="vertical">
      <PageHeader />
      <Row>
        <Col span={4} className="ms-2">
          <Anchor
            offsetTop={150}
            items={[
              {
                key: "1",
                href: "#part-1",
                title: "Thông tin cơ bản",
              },
              {
                key: "2",
                href: "#part-2",
                title: "Hình ảnh",
              },
              {
                key: "3",
                href: "#part-3",
                title: "mô tả sản phẩm",
              },
              {
                key: "4",
                href: "#part-4",
                title: "Thông tin bán hàng",
              },
            ]}
          />
        </Col>
        <Col span={19}>
          <Cardframe id="part-1" title="Thông tin cơ bản">
            <Form.Item
              name="name-product"
              label="Tên sản phẩm"
              rules={[
                { required: true, message: "Vui lòng nhập tên sản phẩm" },
              ]}
            >
              <Input placeholder="Tên sản phẩm" />
            </Form.Item>
            <Form.Item
              name="cate-product"
              label="Danh mục"
              rules={[
                { required: true, message: "Vui lòng chọn danh mục sản phẩm" },
              ]}
            >
              <Select
                placeholder="Danh mục"
                options={[
                  {
                    label: "Quần tây",
                    value: "pants",
                  },
                  {
                    label: "Áo sơ mi",
                    value: "shirt",
                  },
                  {
                    label: "Áo thun",
                    value: "t-shirt",
                  },
                ]}
              />
            </Form.Item>
          </Cardframe>
          <Cardframe id="part-2" title="Hình ảnh" className="mt-4">
            <label>
              <code>*</code>Hình ảnh sản phẩm
            </label>
            <Row>
              <div className="big-upload">
                <Form.Item
                   rules={[
                    { required: true, message: "Phải upload hình ảnh chính cho sản phẩm" },
                  ]}
                >
                  <Upload
                    listType="picture-card"
                    fileList={fileList1}
                    onChange={({ fileList: newFileList }) =>
                      setFileList1(newFileList)
                    }
                  >
                    {fileList1.length >= 1 ? null : uploadButton}
                  </Upload>
                </Form.Item>
              </div>
              <div
                style={{ width: "350px" }}
                className="group-upload d-flex flex-wrap"
              >
                <Upload
                  listType="picture-card"
                  fileList={fileList2}
                  onChange={({ fileList: newFileList }) =>
                    setFileList2(newFileList)
                  }
                >
                  {fileList2.length >= 1 ? null : uploadButton}
                </Upload>
                <Upload
                  listType="picture-card"
                  fileList={fileList3}
                  onChange={({ fileList: newFileList }) =>
                    setFileList3(newFileList)
                  }
                >
                  {fileList3.length >= 1 ? null : uploadButton}
                </Upload>
                <Upload
                  listType="picture-card"
                  fileList={fileList4}
                  onChange={({ fileList: newFileList }) =>
                    setFileList4(newFileList)
                  }
                >
                  {fileList4.length >= 1 ? null : uploadButton}
                </Upload>
                <Upload
                  listType="picture-card"
                  fileList={fileList5}
                  onChange={({ fileList: newFileList }) =>
                    setFileList5(newFileList)
                  }
                >
                  {fileList5.length >= 1 ? null : uploadButton}
                </Upload>
              </div>
            </Row>
          </Cardframe>
          <Cardframe id="part-3" title="mô tả sản phẩm" className="mt-4">
            <TextAreaEditor />
          </Cardframe>
          <Cardframe id="part-4" title="Thông tin bán hàng" className="mt-4">
            <div className="d-flex">
              <p>Kích hoạt biến thể:</p>
              <div className="ms-2">
                <Switch onChange={handleSwitch} />
                <p className="text-body-tertiary">
                  Bạn có thể thêm biến thể nếu sản phẩm này có nhiều lựa chọn
                  kích cỡ
                </p>
              </div>
            </div>
            {checked && <Variant />}
            <div>
              <p>Giá và số lượng</p>
              <DataTable />
            </div>
          </Cardframe>
        </Col>
      </Row>
    </Form>
  );
}

export default Product;
