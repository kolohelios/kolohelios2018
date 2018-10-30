const { FuseBox, WebIndexPlugin } = require('fuse-box')

const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'browser@es6',
  output: 'dist/$name.js',
  useTypescriptCompiler: true,
  plugins: [
    WebIndexPlugin({
      template: 'src/index.html'
    })
  ],
})

fuse.dev()
fuse
  .bundle('app')
  .instructions(' > index.tsx')
  .hmr()
  .watch()

fuse.run()
