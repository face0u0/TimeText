# TimeText

TimeTextは位置情報を用いた板書管理兼共有サービスです。

<img src="https://static.face9363.net/static/img/icons/timetext_black.svg" alt="logo" width="200"/>

## 機能
- 黒板、ノートの写真を投稿
- 投稿された時刻に基づき、写真を整理
- 投稿された写真の位置情報から同じ授業を受けている人を推定し、自動で共有

## 実装
Vue.jsで作成した板書写真共有サイトです。
写真をアップした時間にあわせて自動で写真を振り分けてくれる他、写真投稿時に自身の位置情報を送信することで他の同じ授業を受けている人のアップした板書も覗ける機能もあります。

## 環境
### フロント
- vue/vue-router
- netlify
- imgur(画像ストレージ)
- firebase authentication
### バックエンド
- rails
- heroku

