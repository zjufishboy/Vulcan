import { PageLead } from '@/biz-components/page-lead';
import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { apexInfo } from './lead-info';
import { YearCounter } from './year-counter';

export const Finance: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLead info={apexInfo} />} />
      <Route path="yearCnt" element={<YearCounter />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
