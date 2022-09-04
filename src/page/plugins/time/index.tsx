import { ImageTimerBackground } from '@/asset/timer/background';
import { Background } from '@/biz-components/background';
import { DeviceEnv, deviceEnv } from '@/utils/env';
import React, { useEffect, useRef, useState } from 'react';
import './index.less';

const getTimeText = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${hour > 9 ? '' : '0'}${hour}:${minute > 9 ? '' : '0'}${minute}:${second > 9 ? '' : '0'}${second}`;
};

export const Timer: React.FC = () => {
  const [timeText, setTimeText] = useState(() => getTimeText());
  const timerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = '时钟壁纸';
    const timer = setInterval(() => {
      const newTimeText = getTimeText();
      setTimeText(newTimeText);
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleDoubleClick = () => {
    // try {
    //   (document.documentElement as any).webkitRequestFullScreen();
    // } catch (e) {
    //   alert(e);
    // }
  };

  return (
    <div className="timer-page" onDoubleClick={handleDoubleClick} ref={timerRef}>
      <Background image={ImageTimerBackground} />
      <div className="timer-cover">
        <div className="time-text">{timeText}</div>
      </div>
    </div>
  );
};
