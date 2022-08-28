import React, { FC } from 'react';
import { PageContainer } from '@/biz-components/page-container';

import { believeTable } from './data';
import './index.less';

export const BelieveTool: FC = () => {
  return (
    <PageContainer>
      <div style={{ marginBottom: 12 }}>信赖查询表</div>
      <div style={{ marginBottom: 12 }} className="believe-tips">
        <div>
          每场三星战斗会获取消耗<b>理智值*倍率</b>的信赖值
          非三星战斗还是刷到三星再说吧
        </div>
        <div>
          普通进驻基建：每天上限<b>100</b>
        </div>
        <div>
          基建副手每天可以额外获取2次<b>150</b>,总计最多（同时入驻某个设施）
          <b>150+150+100=350</b>
        </div>
        <div>
          中枢基建副手可以额外获取2次<b>500</b>,总计最多（同时入驻某个设施）
          <b>500+500+100=1100</b>
        </div>
        <div>
          基建副手信赖收取时间 <b>4:00/16:00</b>,会被覆盖
        </div>
      </div>
      <div className="believe-table">
        <div className="table-item">
          <div className="table-item-cell">百分比</div>
          <div className="table-item-cell">信赖值</div>
          <div className="table-item-cell">下一级</div>
          <div className="table-item-cell">是否模组</div>
        </div>
        {believeTable.map((item, index) => (
          <div className="table-item" key={index}>
            <div className="table-item-cell">{item.curPercent}%</div>
            <div className="table-item-cell">{item.curPoint}</div>
            <div className="table-item-cell">{item.toNext}</div>
            <div className="table-item-cell">
              {item.curPercent.length > 2 ? '是' : '否'}
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};
