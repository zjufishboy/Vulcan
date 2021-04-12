import React from 'react';
import { useHistory } from 'react-router';
import './index.less';

export const Home: React.FC = () => {
  const history = useHistory();
  const handleJump = () => {
    history.push('/video');
  };
  return (
    <div className="page-home">
      <div className="home-title">一个啥也干不了的工具箱</div>
      <div className="home-content" onClick={handleJump}>
        本地视频播放器
      </div>
    </div>
  );
};
