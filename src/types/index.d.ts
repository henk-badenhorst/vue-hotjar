/* eslint-disable no-unused-vars */
import { PluginFunction, PluginObject } from 'vue'

export interface VueHotjarPlugin extends PluginObject<VueHotjarUseOptions> {
  install: PluginFunction<VueHotjarUseOptions>
}

export interface VueHotjarUseOptions {
  /**
   * Your Hotjar Site ID is a required parameter. You can find this ID at [insights.hotjar.com](https://insights.hotjar.com) under tracking.
   */
  id: string;

  /**
   * If you would like to disable or enable tracking, pass in either `true` or `false`.
   * It is advised to bind your Node ENV variable.
   * This is an optional parameter and will default to true if not specified.
   *
   * @Default true
   */
  isProduction?: boolean;

  /**
   * This optional parameter does not need to be specified as it will default to the latest Hotjar Snippet version.
   *
   * Currently, it will default to `version 6`.
   *
   * @Default 6
   */
  snippetVersion?: number
}

declare const Hotjar: VueHotjarPlugin

export default Hotjar
