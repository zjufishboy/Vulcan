import { PageContainer } from '@/biz-components/page-container';
import { isPC } from '@/utils/env';
import React, { FC } from 'react';
import { DamageCounter } from './counter';
import './index.less';
import { AttributeTable } from './table';

export const AttributeTool: FC = () => {
  return (
    <PageContainer>
      <div className="pokemon-attr-tool">
        {isPC && (
          <>
            <div style={{ marginBottom: 32 }}>宝可梦属性相克表及查询工具</div>
            <div style={{ marginBottom: 32 }}>
              <AttributeTable />
            </div>
          </>
        )}
        <div style={{ marginBottom: 32 }}>伤害计算器</div>
        <div style={{ marginBottom: 32 }}>
          <DamageCounter />
        </div>
        <div>伤害计算规则： 正常防御方多属性则按照倍乘计算 太晶化后，防御方计算中只计算太晶属性</div>
      </div>
    </PageContainer>
  );
};
