export interface Plugin {
  /** This function allows your plugins to have a settings panel displayed through BetterDiscord. The expecting return type is either an HTMLElement or a string representing the HTML. */
  getSettingsPanel?(): void;
  /** This function is called on every mutation of the document. If you're unfamiliar with that terminology, take a look at MDN. */
  observer?(): void;
  /** This function is called every time the view is "switched". A better way to look at this is every time the user navigates such as changing the channel or server. */
  onSwitch?(): void;
}

export abstract class Plugin {
  protected abstract start(): void;
  protected abstract stop(): void;
}
