import { createContext } from 'react';
import UserStore from './userStore';

class RootStore {
  userStore: UserStore; // app当前状态信息
  // ...其他分模块管理的信息
  constructor() {
    this.userStore = new UserStore();
  }
}
const rootStore = new RootStore();
export const storeContext = createContext(rootStore);
export const Provider = storeContext.Provider;

export default rootStore;
