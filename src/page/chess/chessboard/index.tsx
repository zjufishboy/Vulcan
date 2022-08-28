import React, { FC } from 'react';
import './index.less';

export const ChessBoard: FC = () => {
  return (
    <div className="chessboard">
      <div className="lines-vertical">
        {new Array(10).fill(0).map((_i, i) => (
          <div className="line" key={i} />
        ))}
      </div>
      <div className="lines-horizontal">
        {new Array(9).fill(0).map((_i, i) => (
          <div className="line" key={i} />
        ))}
      </div>
      <div className="river-area">
        <span>楚河</span>
        <span>汉界</span>
      </div>
    </div>
  );
};
