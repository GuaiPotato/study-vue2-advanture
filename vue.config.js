const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭保存时进行 eslint 验证
  lintOnSave: false,
});
