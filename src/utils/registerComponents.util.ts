import { App } from 'vue';
import { Tooltip, WangsVue, ToastService, Focus } from 'wangsvue';
import Preset from 'wangsvue-presets/wangsvue';

import router from '@/router';

import '@/assets/css/main.css';
import 'wangsvue/style.css';
import 'wangsvue-presets/wangsvue/style.css';

const registerComponents = (app: App): void => {
  app.use(WangsVue, {
    unstyled: true,
    pt: Preset,
  });

  app.provide('preset', Preset);

  app.use(router);
  app.use(ToastService);

  app.directive('Tooltip', Tooltip);
  app.directive('focus', Focus);
};

export default registerComponents;
