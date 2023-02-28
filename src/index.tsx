import { Plugin } from './bd';
import React from 'react';

module.exports = class TemplatePlugin extends Plugin {
  protected start(): void {
    BdApi.UI.alert('Hello World!', <div>Hello World!</div>);
    BdApi.UI.alert(
      'Hello World!',
      React.createElement('div', {}, 'Hello World')
    );
  }
  protected stop(): void {}
};
