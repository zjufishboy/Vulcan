export const isMobile = () => {
  const userAgent = window.navigator.userAgent;
  return userAgent.includes('Mobile');
};
