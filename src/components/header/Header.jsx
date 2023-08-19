import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import './header.scss';

function Header() {
    return ( 
        <div className="header fixed-top flex-row-reverse">
            <Avatar size="large" icon={<UserOutlined/>}/>
        </div>
     );
}

export default Header;