enum DeviceEnv {
  Mobile = 'Mobile',
  PC = 'PC',
}

const testEnv = () => {
  const userAgent = window.navigator.userAgent;
  if (userAgent.includes(DeviceEnv.Mobile)) {
    return DeviceEnv.Mobile;
  }
  return DeviceEnv.PC;
};

export const deviceEnv = testEnv();

export const isMobile = deviceEnv === DeviceEnv.Mobile;
