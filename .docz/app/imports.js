export const imports = {
  'app/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "app-button-button" */ 'app/Button/Button.mdx'),
}
