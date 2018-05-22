import PuppeteerLaunchOptionsInterface from "./PuppeteerLaunchOptionsInterface";

export default interface ConfigInterface {
  basicOnly?: boolean;
  includeFilmstrip?: boolean;
  headless?: boolean;
  launchOptions?: PuppeteerLaunchOptionsInterface;
}
