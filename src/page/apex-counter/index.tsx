import { ApexImage } from '@/asset/apex';
import { isMobile } from '@/utils/is-mobile';
import React, { FC, useEffect, useRef, useState } from 'react';

import './index.less';

const key = 'apex-counter-value';

const getTwoFixed = (num: number) => {
  if (num === Infinity) {
    return Infinity;
  }
  const num1 = num * 100;
  const num2 = Math.floor(num1);
  return num2 / 100;
};

export const ApexCounter: FC = () => {
  const [killStr, setKillStr] = useState('');
  const [deadStr, setDeadStr] = useState('');
  const divRef = useRef<HTMLDivElement>();

  const kill = killStr === '' ? 0 : Number(killStr);
  const dead = deadStr === '' ? 0 : Number(deadStr);
  const curKD = dead === 0 ? Infinity : getTwoFixed(kill / dead);
  const nextKD = getTwoFixed(curKD + 0.01);
  const nextToKill = Math.ceil(nextKD * dead) - kill;
  const canToDead = Math.ceil(kill / curKD) - dead;

  const handleSave = () => {
    localStorage.setItem(key, JSON.stringify({ kill, dead }));
  };

  useEffect(() => {
    const { kill, dead } = JSON.parse(localStorage.getItem(key)) || {
      kill: 1,
      dead: 1,
    };
    setKillStr(kill.toString());
    setDeadStr(dead.toString());
  }, []);

  useEffect(() => {
    if (isMobile()) {
      console.log('移动端');

      divRef.current.style.width = window.innerHeight + 'px';
    }
  }, []);

  return (
    <div className="page-apex-counter" ref={divRef}>
      <div className="card">
        <img src={ApexImage} className="image" />
        <div className="counter">
          <div className="input-area">
            <div>击杀数</div>
            <input
              type="number"
              value={killStr}
              onChange={e => setKillStr(e.target.value.replace(/[^0-9]/g, ''))}
            />
          </div>
          <div className="input-area">
            <div>死亡数</div>
            <input
              type="number"
              value={deadStr}
              onChange={e => setDeadStr(e.target.value.replace(/[^0-9]/g, ''))}
            />
          </div>
          <div className="info-text">
            当前KD<span>【{curKD}】</span>, 距离下一个KD
            <span>【{nextKD}】</span>
            还需要击杀<span>【{nextToKill}】</span>个， 还可以白给
            <span>【{canToDead}】</span>把,
          </div>
          <button onClick={handleSave}>保存</button>
        </div>
      </div>
    </div>
  );
};
