import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import './app.less';
import '@/global/style/global.less';
import RootStore, { Provider } from '@/store/rootStore';
import { VideoPlayer } from './video';
import { Home } from './home';
import { BackButton } from '@/components/back-button';

/**
 * 这个组件是网页的入口
//  */
export const App: React.FC = () => {
  return (
    <Provider value={RootStore}>
      <BrowserRouter>
        <BackButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<VideoPlayer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
