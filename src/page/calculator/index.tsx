import { fileSelect } from '@/utils/fileSelect';
import React from 'react';
import './index.less';
import cx from 'classnames';
import { isMobile } from '@/utils/is-mobile';
import { operators } from './constants';
import { OperatorItem } from './operator-item';

export const Calculator: React.FC = () => {
  return (
    <div
      className="page-calculator"
      onContextMenu={e => {
        e.preventDefault();
      }}
    >
      <div className="history">
        <div className="last-calc">
          <span>20</span>
          <span>&times;</span>
          <span>20</span>
        </div>
        <div className="result">= 400</div>
      </div>

      <div className="operator-area">
        {operators.map(item => (
          <OperatorItem item={item} key={item.symbol} />
        ))}
      </div>
    </div>
  );
};
