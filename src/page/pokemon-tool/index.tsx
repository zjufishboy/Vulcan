import { PageLead } from '@/biz-components/page-lead';
import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AttributeTool } from './attribute';
import { pokemonToolInfo } from './lead-info';

export const PokemonTool: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLead info={pokemonToolInfo} />} />
      <Route path="attribute" element={<AttributeTool />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
