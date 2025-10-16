import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the odotTheme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'odotTheme:plugin',
  description: 'An ODOT branded Jupyter lab theme.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    const style = 'odotTheme/index.css';
    manager.register({
      name: 'ODOT Theme',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
