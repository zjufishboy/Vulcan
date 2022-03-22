import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.less';

const tools = [
  {
    name: '视频播放器',
    url: '/video',
  },
  {
    name: '计算器',
    url: '/calculator',
  },
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleJump = (url: string) => () => {
    navigate(url);
  };
  return (
    <div className="page-home">
      <div className="home-title">一个开发中的工具箱</div>
      <div className="home-content">
        {tools.map((item, index) => (
          <div
            className="home-tool-item"
            onClick={handleJump(item.url)}
            key={index}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
