import { Plugin } from './bd';

export default class TemplatePlugin extends Plugin {
  protected start(): void {
    BdApi.UI.alert('Hello World!', <div>Hello World!</div>);
  }
  protected stop(): void {}
}
