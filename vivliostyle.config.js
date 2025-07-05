module.exports = {
  title: 'モバイルアプリ開発者のための WebView と JavaScript の制御実践',
  author: '江本光晴',
  language: 'ja',
  size: 'A4',
  theme: [
    '@mitsuharu/vivliostyle-theme-iosdc-pamphlet@0.2.0',
    '@mitsuharu/vivliostyle-theme-noto-sans-jp',
    'theme/styles',
  ],
  entry: ['index.md'],
  entryContext: './manuscripts',
  output: ['./output/output.pdf'],
  workspaceDir: '.vivliostyle',
  toc: false,
  cover: undefined,
  vfm: {
    hardLineBreaks: false,
    disableFormatHtml: false,
  },
}
