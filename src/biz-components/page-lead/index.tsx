import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.less';

interface PageInfo {
  title: string;
  url: string;
}

export interface PageLeadInfo {
  title: string;
  backUrl?: string;
  prefix: string;
  pages: PageInfo[];
}

interface PageLeadProps {
  info: PageLeadInfo;
}

export const PageLead: React.FC<PageLeadProps> = ({ info }) => {
  const navigate = useNavigate();
  const handleJump = (url: string) => () => {
    navigate(url);
  };

  return (
    <div className="list-of-page">
      <div className="list-title">
        {info.title}
        {info.backUrl && (
          <span
            className="back-link-text"
            onClick={() => {
              navigate(info.backUrl, {});
            }}
          >
            返回上级
          </span>
        )}
      </div>
      <div className="list-content">
        {info.pages.map((item, index) => (
          <div
            className="list-info-item"
            onClick={handleJump(info.prefix + item.url)}
            key={index}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
