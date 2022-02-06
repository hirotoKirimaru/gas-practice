# gas-practice
練習用


# Docker環境を利用する場合

ローカルに直接Claspを導入せずにDockerを使用する場合は、こちらの手順を参考にしてください。

```bash
# コンテナへのログイン
docker-compose run clasp bash

cd /usr/src/app
# Googleへのログイン
clasp login --no-localhost
# npm install
npm install
# KPIシート作成
clasp create --title "KPI Sheet" --type sheets --rootDir ./src
# .clasp.jsonの移動
mv ./src/.clasp.json ./.clasp.json
clasp pull
clasp push
```