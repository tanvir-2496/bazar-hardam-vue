module.exports = {
    devServer: {
      port: process.env.VUE_APP_PORT, //3000
      //host: '0.0.0.0',
      public: 'http://'+ process.env.VUE_APP_HOST_NAME +':' + process.env.VUE_APP_PORT + '/', //'http://127.0.0.1:3000'
      proxy: process.env.VUE_APP_BASE_URL  //'http://36.255.68.34:8078/'
    },
    configureWebpack: {
      devtool: 'source-map'
    }
  }