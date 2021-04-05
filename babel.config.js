module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["import", {
      "libraryName": "muse-ui",
      "libraryDirectory": "lib",
      "camel2DashComponentName": false
    }]
    // ['import', {
    //   libraryName: 'vant',
    //   libraryDirectory: 'es',
    //   style: true
    // }, 'vant']
  ]
}
