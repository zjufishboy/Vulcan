import React, { useEffect } from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import RootStore, { Provider } from '@/store/rootStore';
import { VideoPlayer } from './video';
import { Calculator } from './calculator';
import { Chess } from './chess';
import '@/global/style/global.less';
import './app.less';
import { HtmlParser } from './html-parser';
import { ArknightTool } from './arknight-tool';
import { PageLead } from '@/biz-components/page-lead';
import { homeInfo } from './lead-info';
import { PluginTool } from './plugins';
import { DevTool } from '@/biz-components/devtool';
import { useMobile } from '@/hooks/useMobile';
import { shimGetUserMedia } from '@/utils/user-media';
import { PokemonTool } from './pokemon-tool';
import { Apex } from './apex';

/**
 * 这个组件是网页的入口
//  */
export const App: React.FC = () => {
  useMobile();

  useEffect(() => {
    shimGetUserMedia(window);
  }, []);

  return (
    <Provider value={RootStore}>
      <BrowserRouter>
        {/* <BackButton /> */}
        <Routes>
          <Route path="/" element={<PageLead info={homeInfo} />} />
          <Route path="/video" element={<VideoPlayer />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/chess" element={<Chess />} />
          <Route path="/html-parser" element={<HtmlParser />} />
          <Route path="/apex/*" element={<Apex />} />
          <Route path="/arknight-tool/*" element={<ArknightTool />} />
          <Route path="/pokemon-tool/*" element={<PokemonTool />} />
          <Route path="/plugin-tool/*" element={<PluginTool />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <DevTool />
      </BrowserRouter>
    </Provider>
  );
};
