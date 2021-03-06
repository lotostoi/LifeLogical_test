module.exports = {
    lintOnSave: false,
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "~@/assets/scss/global.scss";`,
        },
      },
    },
    configureWebpack: (config) => {
      return {
        devServer: {
          proxy: {
            '/api/': {
              target: ' http://localhost:3000',
              secure: false,
              changeOrigin: true,
            },
          },
        },
      }
    },
  }