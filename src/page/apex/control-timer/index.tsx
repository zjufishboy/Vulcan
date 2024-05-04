import React, { FC } from 'react';
import { useControlTimer } from './useControlTimer';
import './index.less';

const getDurationStr = (ms: number) => {
  const seconds = Math.floor(ms / 1000);
  const s = seconds % 60;
  const m = (seconds - s) / 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

const getCur = (duration: number) => {
  if (duration > 30 * 60 * 1000) {
    const rest = duration - 30 * 60 * 1000;
    const restStr = getDurationStr(rest);
    return `控制模式,还剩${restStr}`;
  }
  if (duration > 15 * 60 * 1000) {
    return '子弹时间';
  }
  return '团队死斗';
};

export const ControlTimer: FC = () => {
  const { tick, tickToNext } = useControlTimer();
  return (
    <div className="control-timer">
      <div className="title">距离下一把控制</div>
      <div className="time">{getDurationStr(tickToNext)}</div>
      <div className="title2">
        当前模式：
        <span className="stage">{getCur(tickToNext)}</span>
      </div>
    </div>
  );
};
