module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/kakao_busuiness_vue/' : '/',
    outputDir: 'docs',
    transpileDependencies: ['vuetify'],
};
