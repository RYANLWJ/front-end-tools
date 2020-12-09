module.exports = (modules) => ({
    presets: [
        '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          modules,
          targets: {
            browsers: [
              'last 2 versions',
              'Firefox ESR',
              '> 1%',
              'ie >= 9',
              'iOS >= 8',
              'Android >= 4',
            ],
          },
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-runtime', '@babel/proposal-class-properties'],
  })