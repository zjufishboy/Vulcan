import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { AttrLabel } from '../attr-label';
import { allAttr, attributeColorMap, damageRateMap, IAttribute } from '../config';
import './index.less';

const renderDamage = (ackAttr: IAttribute, defAttr: IAttribute) => {
  const rate = damageRateMap[ackAttr][defAttr];
  if (rate === 1 / 2) {
    return '1/2';
  }
  return rate.toString();
};

export const AttributeTable: FC = () => {
  const [curAckAttr, setCurAckAttr] = useState<IAttribute>();
  const [curDefAttr, setCurDefAttr] = useState<IAttribute>();

  return (
    <div className="attr-table">
      <div className="table-head">
        <div className="table-head-head">防守方</div>
        <div className="table-row">
          {allAttr.map(defAttr => (
            <div
              key={defAttr}
              className={classNames('table-cell', {
                'table-cell-highlight': curDefAttr == defAttr,
              })}
              onClick={() => {
                if (curDefAttr === defAttr) {
                  setCurDefAttr(undefined);
                } else {
                  setCurDefAttr(defAttr);
                }
              }}
            >
              <AttrLabel attr={defAttr} />
            </div>
          ))}
        </div>
      </div>
      <div className="table-content">
        <div className="table-content-head">攻击方</div>
        <div className="table-content-value">
          {allAttr.map(ackAttr => (
            <div className="table-row" key={ackAttr}>
              <div
                className={classNames('table-cell', {
                  'table-cell-highlight': curAckAttr == ackAttr,
                })}
                onClick={() => {
                  if (curAckAttr === ackAttr) {
                    setCurAckAttr(undefined);
                  } else {
                    setCurAckAttr(ackAttr);
                  }
                }}
              >
                <AttrLabel attr={ackAttr} />
              </div>
              {allAttr.map(defAttr => (
                <div
                  key={defAttr}
                  className={classNames('table-cell', {
                    'table-cell-highlight': curDefAttr === defAttr || curAckAttr == ackAttr,
                    'table-cell-highlight-double': curDefAttr === defAttr && curAckAttr == ackAttr,
                  })}
                >
                  <div className="damage-rate">{renderDamage(ackAttr, defAttr)}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
