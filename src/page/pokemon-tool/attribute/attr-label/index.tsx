import React, { FC } from 'react';
import { attributeColorMap, IAttribute } from '../config';
import './index.less';

export const AttrLabel: FC<{ attr: IAttribute }> = ({ attr }) => {
  return (
    <div className="attr-label" style={{ backgroundColor: attributeColorMap[attr] }}>
      {attr}
    </div>
  );
};
