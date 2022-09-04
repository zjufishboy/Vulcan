export enum DeviceEnv {
  Mobile = 'Mobile',
  PC = 'PC',
  IPAD = 'iPad',
}

const testEnv = () => {
  const userAgent = window.navigator.userAgent;
  if (userAgent.includes(DeviceEnv.Mobile)) {
    return DeviceEnv.Mobile;
  }
  if (userAgent.includes(DeviceEnv.IPAD)) {
    return DeviceEnv.IPAD;
  }
  return DeviceEnv.PC;
};

export const deviceEnv = testEnv();

export const isMobile = deviceEnv === DeviceEnv.Mobile;
export const isPC = deviceEnv === DeviceEnv.PC;
