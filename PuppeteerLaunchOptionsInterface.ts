export default interface PuppeteerLaunchOptionsInterface {
  ignoreHTTPSErrors?: boolean;
  headless?: boolean;
  executablePath?: string;
  slowMo?: number;
  args?: string[];
  ignoreDefaultArgs?: boolean;
  handleSIGINT?: boolean;
  handleSIGTERM?: boolean;
  handleSIGHUP?: boolean;
  timeout?: number;
  dumpio?: boolean;
  userDataDir?: string;
  env?: object;
  devtools?: boolean;
  pipe?: boolean;
}
