import React from 'react';
import ReactDom from 'react-dom';
import '@/global/style/global.less';
import { App } from '@/page/app';

ReactDom.render(<App />, document.getElementById('root'));
//这个文件是打包的入口
