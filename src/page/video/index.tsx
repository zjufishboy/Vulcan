import { fileSelect } from '@/utils/fileSelect';
import React from 'react';
import './index.less';
import cx from 'classnames';
import { isMobile } from '@/utils/is-mobile';

export const VideoPlayer: React.FC = () => {
  const [url, setUrl] = React.useState('');
  const [name, setName] = React.useState('');
  const [isDark, setIsDark] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>();

  const selectFile = async () => {
    const file = await fileSelect(['video/*']);
    const fileName = file.name;
    const newURL = URL.createObjectURL(file);
    setUrl(newURL);
    setName(fileName);
  };

  const close = () => {
    URL.revokeObjectURL(url);
    setUrl('');
    setName('');
  };

  const toggleDarkMode = () => {
    setIsDark(s => !s);
  };

  const handleToggleFullScreen = () => {
    const isInMobile = isMobile();
    const isRequestFullScreen = !!document.fullscreenElement;
    const isVideoTarget = document.fullscreenElement === videoRef.current;
    console.log({ isInMobile, isRequestFullScreen, isVideoTarget });
  };

  React.useEffect(() => {
    document.addEventListener('fullscreenchange', handleToggleFullScreen);
    return () => {
      document.removeEventListener('fullscreenchange', handleToggleFullScreen);
    };
  }, []);

  return (
    <div
      className={cx('page-video', {
        'page-dark': isDark,
        'page-light': !isDark,
      })}
    >
      {url ? (
        <>
          <div className="video-operator">
            <div className="video-title">{name || '未命名视频'}</div>
            <button className="video-operate-button" onClick={toggleDarkMode}>
              {isDark ? '开' : '关'}灯
            </button>
            <button className="video-operate-button" onClick={close}>
              关闭
            </button>
          </div>
          <video
            ref={videoRef}
            src={url}
            autoPlay
            // controls
            className="video-container"
            // controlsList="nodownload"
          />
        </>
      ) : (
        <button className="video-button" onClick={selectFile}>
          选择本地视频
        </button>
      )}
    </div>
  );
};
