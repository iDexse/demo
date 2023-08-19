import React from "react";
import { Card } from "antd";

function Cardframe(props) {
  return (
    <div id={props.id}>
      <Card
        title={props.title}
        bordered={false}
        style={{
          width: "100%",
        }}
        className={props.className}
      >
        {props.children}
      </Card>
    </div>
  );
}

export default Cardframe;
