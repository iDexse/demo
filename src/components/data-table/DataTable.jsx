import React from 'react';
import { Table, Input, InputNumber } from 'antd';

function DataTable() {

    const data = [
        {
            key: "1"
        }
    ]

    const columns = [
        {
          title: 'Giá bán',
          dataIndex: 'price',
          key: 'price',
          render: (number) => <InputNumber value={number} style={{width:"80%"}} defaultValue={0} />,
        },
        {
          title: 'Giá gốc',
          dataIndex: 'cost',
          key: 'cost',
          render: (number) => <InputNumber value={number} style={{width:"80%"}} defaultValue={0} />,
        },
        {
          title: 'Số lượng',
          dataIndex: 'quantity',
          key: 'quantity',
          render: (number) => <InputNumber value={number} style={{width:"80%"}} defaultValue={0} />,
        },
        {
            title: 'SKU người bán',
            dataIndex: 'SKU',
            key: 'SKU',
            render: (text) => <Input value={text}  placeholder='SKU người bán'/>,
          },
      ];
    return ( 
        <Table dataSource={data} columns={columns} />
     );
}

export default DataTable;