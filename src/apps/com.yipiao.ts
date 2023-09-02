import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.yipiao',
  name: `智行火车票12306抢票`,
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.app.main.entrance.MainActivity',
      rules: 'LinearLayout > TextView + TextView[text=`跳过`]',
    },
  ],
};
