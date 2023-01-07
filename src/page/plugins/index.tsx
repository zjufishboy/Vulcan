import { PageLead } from '@/biz-components/page-lead';
import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AnimeCalendar } from './anime';
import { pluginInfo } from './lead-info';
import { Stream } from './stream';
import { Timer } from './time';

export const PluginTool: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLead info={pluginInfo} />} />
      <Route path="time" element={<Timer />} />
      <Route path="stream" element={<Stream />} />
      <Route path="anime-calendar" element={<AnimeCalendar />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
