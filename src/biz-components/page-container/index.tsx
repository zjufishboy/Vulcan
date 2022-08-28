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
    <div className="page-container">
      <div className="page-content">{children}</div>
    </div>
  );
};
