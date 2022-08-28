import React, { useState } from 'react';
import './index.less';

export const HtmlParser: React.FC = () => {
  const [text, setText] = useState('');
  const [start, setStart] = useState(57000);

  const empty = new Array(5000)
    .fill(0)
    .map((_, i) => `&#${start + i};`)
    .join(' ');

  return (
    <div className="page-html-parser">
      <div className="title">转义工具</div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <div
        style={{
          userSelect: 'text',
          minHeight: 80,
          width: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="preview"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div className="title">批量转义表，输入起始数字，显示5000位</div>
      <input
        type={'number'}
        value={start.toString()}
        onChange={e => setStart(Number(e.target.value))}
      />
      <div
        style={{
          userSelect: 'text',
          width: 800,
          maxHeight: 800,
          overflowY: 'scroll',
        }}
        className="preview"
        dangerouslySetInnerHTML={{ __html: empty }}
      />
    </div>
  );
};
