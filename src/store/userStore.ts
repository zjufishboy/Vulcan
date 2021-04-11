import { observable, action, makeObservable } from 'mobx';
// import 'mobx-react-lite/batchingForReactDom';
class UserStore {
  @observable isLogin = false;
  // @observable userInfo: IUserInfo | null = null;

  constructor() {
    makeObservable(this);
  }
}
export default UserStore;
