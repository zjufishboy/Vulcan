import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import RootStore, { Provider } from '@/store/rootStore';
import { VideoPlayer } from './video';
import { Calculator } from './calculator';
import { Chess } from './chess';
import { ApexCounter } from './apex-counter';
import '@/global/style/global.less';
import './app.less';
import { HtmlParser } from './html-parser';
import { ArknightTool } from './arknight-tool';
import { PageLead } from '@/biz-components/page-lead';
import { homeInfo } from './lead-info';

/**
 * 这个组件是网页的入口
//  */
export const App: React.FC = () => {
  return (
    <Provider value={RootStore}>
      <BrowserRouter>
        {/* <BackButton /> */}
        <Routes>
          <Route path="/" element={<PageLead info={homeInfo} />} />
          <Route path="/video" element={<VideoPlayer />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/chess" element={<Chess />} />
          <Route path="/apex-counter" element={<ApexCounter />} />
          <Route path="/html-parser" element={<HtmlParser />} />
          <Route path="/arknight-tool/*" element={<ArknightTool />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
