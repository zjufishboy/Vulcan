import { fileSelect } from '@/utils/fileSelect';
import React from 'react';
import './index.less';

export const VideoPlayer: React.FC = () => {
  const [url, setUrl] = React.useState('');
  const selectFile = async () => {
    const file = await fileSelect();
    const newURL = URL.createObjectURL(file);
    setUrl(newURL);
  };
  return (
    <div className="page-video">
      {url ? (
        <video src={url} controls />
      ) : (
        <button className="video-button" onClick={selectFile}>
          选择本地视频
        </button>
      )}
    </div>
  );
};
