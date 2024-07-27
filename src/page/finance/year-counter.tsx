import { PageContainer } from '@/biz-components/page-container';
import React, { FC, useState } from 'react';

export const YearCounter: FC = () => {
  const [profit, setProfit] = useState(0);
  const [base, setBase] = useState(0);
  const [duration, setDuration] = useState(0);
  const [result, setResult] = useState(null);
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
        width: '100vw',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 12,
      }}
    >
      <h1>年化利率计算器</h1>
      <div>
        <label htmlFor="profit">收益（元）：</label>
        <input type="number" id="profit" value={profit} onChange={e => setProfit(Number(e.target.value))} />
      </div>

      <div>
        <label htmlFor="base">本金（元）：</label>
        <input type="number" id="base" value={base} onChange={e => setBase(Number(e.target.value))} />
      </div>

      <div>
        <label htmlFor="duration">时间（天）：</label>
        <input type="number" id="duration" value={duration} onChange={e => setDuration(Number(e.target.value))} />
      </div>

      <button
        style={{ width: 240, backgroundColor: '#aeaeae', height: 32, borderRadius: 16 }}
        onClick={() => {
          if (!profit || !base || !duration) {
            return;
          }
          const rate = ((profit + base) / base) ** (365 / duration);
          setResult(((rate - 1) * 100).toFixed(2));
        }}
      >
        计算
      </button>

      <div>年化利率：{result === null ? '还未计算' : `${result}%`}</div>
    </div>
  );
};
