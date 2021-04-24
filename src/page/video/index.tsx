import { fileSelect } from '@/utils/fileSelect';
import React from 'react';
import './index.less';

export const VideoPlayer: React.FC = () => {
  const [url, setUrl] = React.useState('');
  const [name, setName] = React.useState('');
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
  return (
    <div className="page-video">
      {url ? (
        <>
          <div className="video-operator">
            <div className="video-title">{name || '未命名视频'}</div>
            <button className="video-close" onClick={close}>
              关闭
            </button>
          </div>
          <video
            src={url}
            autoPlay
            controls
            className="video-container"
            controlsList="nodownload"
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
