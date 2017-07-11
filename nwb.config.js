module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CountdownTimer',
      externals: {
        react: 'React'
      }
    }
  }
}
