import { useWindowSizeInfo } from '@/hooks/useMobileSize';
import React, { useRef, useState } from 'react';
import './index.less';

export const DevTool: React.FC = () => {
  const [buttonVisible, setButtonVisible] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);

  const devtoolPageContainerRef = useRef<HTMLDivElement>(null);

  const clickRef = useRef(0);

  const handleClick = () => {
    if (buttonVisible) {
      return;
    }
    clickRef.current += 1;
    if (clickRef.current > 10) {
      setButtonVisible(true);
    }
  };

  const { height } = useWindowSizeInfo();

  return (
    <>
      <div className="devtool-button-container" onClick={handleClick}>
        <button
          className="devtool-button"
          style={{ visibility: buttonVisible ? 'visible' : 'hidden' }}
          onClick={() => {
            setPanelVisible(true);
          }}
        >
          开发工具
        </button>
      </div>
      {panelVisible && (
        <div
          className="devtool-page-container"
          onClick={() => {
            setPanelVisible(false);
          }}
        >
          <div className="devtool-page" ref={devtoolPageContainerRef}>
            <div>开发工具</div>
            <div>WINDOW 高度={height}</div>
            <div>WINDOW 高度={document.body.getBoundingClientRect().height}</div>
            <div>webkitRequestFullScreen={document.documentElement.requestFullscreen ? 'exist' : 'not exist'}</div>
            <div>userAgent={window.navigator.userAgent}</div>
            <div>webkitRequestFullscreen={(document as any).msFullscreenEnabled}</div>
          </div>
        </div>
      )}
    </>
  );
};
