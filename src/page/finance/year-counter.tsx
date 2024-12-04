import { PageContainer } from '@/biz-components/page-container';
import React, { FC, useState } from 'react';

export const YearCounter: FC = () => {
  const [profit, setProfit] = useState(0);
  const [base, setBase] = useState(0);
  const [duration, setDuration] = useState(0);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
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

      <div>
        <label htmlFor="start">开始时间：</label>
        <input type="date" id="start" value={start} onChange={e => setStart(e.target.value)} />
      </div>

      <div>
        <label htmlFor="end">结束时间：</label>
        <input type="date" id="end" value={end} onChange={e => setEnd(e.target.value)} />
      </div>

      <button
        style={{ width: 240, backgroundColor: '#aeaeae', height: 32, borderRadius: 16 }}
        onClick={() => {
          if (!profit || !base || (!duration && !start && !end)) {
            return;
          }
          let calDuration = duration;
          if (start && end) {
            calDuration = Math.floor((Number(new Date(end)) - Number(new Date(start))) / (24 * 3600 * 1000));
            setDuration(calDuration);
          }
          const rate = ((profit + base) / base) ** (365 / calDuration);
          setResult(((rate - 1) * 100).toFixed(2));
        }}
      >
        计算
      </button>

      <div>年化利率：{result === null ? '还未计算' : `${result}%`}</div>
    </div>
  );
};
