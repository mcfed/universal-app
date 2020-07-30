const createProxyMiddleware = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/usercenter',
    createProxyMiddleware({
      target: 'http://192.168.200.178:3000/mock/173',
      changeOrigin: true,
    })
  );
};