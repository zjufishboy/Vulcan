import { isMobile } from '@/utils/env';
import classNames from 'classnames';
import React, { ReactNode, useEffect } from 'react';
import './index.less';

interface PageContainerProps {
  children: ReactNode;
  title?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title = '',
}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, []);

  return (
    <div
      className={classNames('page-container', { 'page-in-mobile': isMobile })}
    >
      <div className="page-content">{children}</div>
    </div>
  );
};
