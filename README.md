# The Only Leaf — prototype

轻量静态站点原型，目标用户：working mamas & professional women（late 20s — 30s/40s）。

包含页面：
- index.html（主页）
- collections.html（分类）
- founder.html（创始人专栏）
- science.html（科学背书）
- subscription.html（订阅页）

预览方法（本地）：
```bash
# 在项目根目录运行简单静态服务器（Python 3）
python3 -m http.server 8000
# 然后在浏览器打开：http://localhost:8000
```

后续建议：
- 替换占位图片与上传创始人测评视频
- 接入支付与订阅（Stripe / Shopify）
- 为每个产品添加详细页面与真实库存数据
