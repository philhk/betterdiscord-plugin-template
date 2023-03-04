import React from 'react';
import { Plugin } from './bd';
import { BoundBdApi } from 'betterdiscord';

module.exports = class extends Plugin {
  private bdApi: BoundBdApi;

  constructor() {
    super();
    this.bdApi = new BdApi('TemplatePlugin');
  }

  protected start(): void {
    this.bdApi.UI.alert('Hello World!', <div>Hello World!</div>);
  }

  protected stop(): void {
    this.bdApi.Patcher.unpatchAll();
  }
};
