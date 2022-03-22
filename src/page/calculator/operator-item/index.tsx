import React from 'react';
import './index.less';
import cx from 'classnames';
import { IOperator } from '../constants';
import { isMobile } from '@/utils/is-mobile';

export const OperatorItem: React.FC<{ item: IOperator }> = ({ item }) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const renderSymbol = () => {
    if (item.symbol === 'x^y') {
      return (
        <span>
          x<sup>y</sup>
        </span>
      );
    }
    if (item.symbol == '√x') {
      return (
        <span>
          √<span style={{ textDecoration: 'overline' }}>x</span>
        </span>
      );
    }
    if (item.symbol == 'x') {
      return <span>&times;</span>;
    }
    if (item.symbol == '/') {
      return <span>&divide;</span>;
    }
    return item.symbol;
  };

  return (
    <div
      key={item.symbol}
      className="operator-item"
      onMouseDown={() => {
        if (isMobile) {
          return;
        }
        setIsPressed(true);
      }}
      onMouseUp={() => {
        if (isMobile) {
          return;
        }
        setIsPressed(false);
      }}
      onMouseLeave={() => {
        if (isMobile) {
          return;
        }
        setIsPressed(false);
      }}
      onTouchStart={() => {
        if (!isMobile) {
          return;
        }
        setIsPressed(true);
      }}
      onTouchEnd={() => {
        if (!isMobile) {
          return;
        }
        setIsPressed(false);
      }}
    >
      <div
        className={cx('item-content', {
          'operator-active': isPressed,
          'operator-light': item.highlight === 'LIGHT',
          'operator-back': item.highlight === 'BACK',
          'operator-char': item.highlight === 'CHAR',
          'operator-normal': item.highlight === 'NORMAL',
        })}
      >
        {item.highlight === 'BACK' ? (
          <div className="operator-item-back">{item.symbol}</div>
        ) : (
          renderSymbol()
        )}
      </div>
    </div>
  );
};
