const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://snappfood.ir/mobile/v3",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/",
            },
        })
    );
};
