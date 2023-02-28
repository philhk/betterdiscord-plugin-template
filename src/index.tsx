import { Plugin } from './bd';
import React from 'react';

module.exports = class TemplatePlugin extends Plugin {
  private bdApi;

  constructor() {
    super();
    this.bdApi = new BdApi('TemplatePlugin');
  }

  protected start(): void {
    this.bdApi.UI.alert('Hello World!', <div>Hello World!</div>);
    this.bdApi.UI.alert(
      'Hello World!',
      React.createElement('div', {}, 'Hello World')
    );
  }
  protected stop(): void {}
};
