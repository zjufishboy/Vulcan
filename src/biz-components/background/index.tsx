import React from 'react';
import './index.less';

export const Background: React.FC<{ image: string }> = ({ image }) => {
  return <div className="background" style={{ backgroundImage: `url(${image})` }} />;
};
