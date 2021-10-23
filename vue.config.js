module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/kakao_business_vue/' : '/',
    outputDir: 'docs',
    transpileDependencies: ['vuetify'],
};
