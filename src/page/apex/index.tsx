import { PageLead } from '@/biz-components/page-lead';
import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { apexInfo } from './lead-info';
import { ApexCounter } from './apex-counter';
import { ControlTimer } from './control-timer';

export const Apex: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLead info={apexInfo} />} />
      <Route path="kda" element={<ApexCounter />} />
      <Route path="control" element={<ControlTimer />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
