import { PageContainer } from '@/biz-components/page-container';
import React from 'react';
import './index.less';

const dayStr = '一二三四五六日';

export const AnimeCalendar: React.FC = () => {
  const list: string[][] = [
    [],
    ['诛仙'],
    ['吞噬星空', '一念永恒'],
    [],
    ['完美世界', '龙族'],
    ['斗罗大陆'],
    ['凡人修仙传'],
  ];

  return (
    <PageContainer title="追番列表">
      <div className="anime-calendar">
        {[0, 1, 2, 3, 4, 5, 6].map(index => (
          <div className="anime-day-item" key={index}>
            <div className="day-item-head">周{dayStr[index]}</div>
            <div className="day-item-content">
              <>{list[index].length === 0 && <>今日无更新</>}</>
              <>
                {list[index].map(name => (
                  <div className="anime-name" key={name}>
                    {name}
                  </div>
                ))}
              </>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};
