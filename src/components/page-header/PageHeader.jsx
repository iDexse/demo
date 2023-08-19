import React, { useEffect, useRef } from "react";
import { Button, Space, Form } from "antd";

import "./page-header.scss";

function PageHeader(props) {
  const headerRef = useRef(null);
  const titleH = useRef(null);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        headerRef.current.classList.add("shrink");
        titleH.current.classList.add("title-header");
      } else {
        headerRef.current.classList.remove("shrink");
        titleH.current.classList.remove("title-header");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="page-header d-flex justify-content-between p-3"
    >
      <div className="d-flex flex-column">
        <p ref={titleH}>Sản phẩm</p>
        <h3>Thêm mới sản phẩm</h3>
      </div>
      <Space align="end" size="small">
        <Button>Thoát</Button>
        <Form.Item style={{ margin: "0" }}>
          <Button type="primary" htmlType="submit">
            Lưu
          </Button>
        </Form.Item>
      </Space>
    </div>
  );
}

export default PageHeader;
