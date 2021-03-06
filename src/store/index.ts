/*
 * @Author: HxB
 * @Date: 2022-05-07 18:16:01
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-19 21:08:42
 * @Description: state 定义
 * @FilePath: \vue-admin\src\store\index.ts
 */
import { createStore } from 'vuex';
import user, { UserState } from './modules/user';
import tabs, { TabState } from './modules/tabs';
import keepAlive, { keepAliveState } from './modules/keep_alive';
import settings from './modules/settings';

// 实例化
const store = createStore<AllState>({
  modules: {
    user,
    tabs,
    settings,
    keepAlive,
  },
});

export default store;
export interface AllState {
  user: UserState;
  tabs: TabState;
  keepAlive: keepAliveState;
  settings: any;
}
