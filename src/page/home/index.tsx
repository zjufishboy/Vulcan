import React from 'react';
import { useHistory } from 'react-router';
import './index.less';

const tools = [
  {
    name: 'Akua播放器',
    url: '/video',
  },
];

export const Home: React.FC = () => {
  const history = useHistory();
  const handleJump = (url: string) => () => {
    history.push(url);
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
