import React from 'react';

import { Spin } from 'antd';
import './Loader.css'

function Loader() {
  return <div className='spinnerContainer'>
    <Spin tip="Loading..." />
  </div>
}

export default Loader;
