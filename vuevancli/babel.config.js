module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'juanziaaa',
      libraryDirectory: 'es',
      style: name => `${name}/style/less`
    }, 'juanziaaa']
  ]
}
