import { PageLead } from '@/biz-components/page-lead';
import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BelieveTool } from './believe';
import { HireTool } from './hire';
import { arknightInfo } from './lead-info';

export const ArknightTool: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLead info={arknightInfo} />} />
      <Route path="hire" element={<HireTool />} />
      <Route path="believe" element={<BelieveTool />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
