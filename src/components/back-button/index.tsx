import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.less';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const goBackToHome = () => {
    navigate('/');
  };
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }
  return (
    <button className="navigator-back-button" onClick={goBackToHome}>
      返回
    </button>
  );
};
