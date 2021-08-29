# 4 BotをHerokuにデプロイする
[前回のセクション](./run-bot.md)までにローカルで動くBotを作成できました。今回は最後のセクションで、Heroku上にBotをデプロイします。クレカを持っていなくても手軽に始められるSaaSを探したらここに行き着きました。お察しください。

以下のページを大いに参考にしています。

https://slack.dev/bolt-js/ja-jp/deployments/heroku

## 4-1 Procfile を追加する
### 4-1-1 Herokuにデプロイするための設定ファイルを追加

`Procfile`という名前のファイルをプロジェクトのルート（app.jsと同じ場所）に作成し、以下を入力して保存してください。

```
web: node app.js
```

### 4-1-2 設定ファイルをgitにコミット

```
git add Procfile
git commit -m "Add Procfile"
```

## 4-2 Heroku ツールをセットアップする
### 4-2-1 Heroku CLI をインストールする

windowsの場合（管理者モードのPowerShellで）
```
choco install -y heroku-cli
```

macOSの場合（シェルで）
```
brew install heroku/brew/heroku
```

### 4-2-2 Heroku CLI にログインする
```
heroku login
```

## 4-3 Heroku アプリを作成する
### 4-3-1 Heroku アプリを作成する

ユニークな名前を指定してHerokuアプリを作成します。
```
heroku create <app-name>

# 以下、実行結果
# Creating <app-name>... done, stack is heroku-18
# https://<app-name>.herokuapp.com/ | https://git.heroku.com/<app-name>.git
```

### 4-3-2 HerokuのリモートGitリポジトリを確認

>Heroku CLI は、自動的にherokuという名前のリモートGit リポジトリをローカルに追加します。リモートGit リポジトリを一覧して、herokuが存在することを確認しましょう。

以下のコマンドを打った時に`git.heroku.com`の文字が表示されていればOKです。
```
git remote -v

# 以下、実行結果
# heroku	https://git.heroku.com/<app-name>.git (fetch)
# heroku	https://git.heroku.com/<app-name>.git (push)
```

無い場合
```
git remote add heroku https://git.heroku.com/<app-name>.git
```

### 4-3-3 アプリをデプロイする

Slack アプリの認証情報をHeroku アプリに設定します。
```
heroku config:set SLACK_SIGNING_SECRET=<your-signing-secret>
heroku config:set SLACK_BOT_TOKEN=xoxb-<your-bot-token>
```

## 4-4 アプリをデプロイする
### 4-4-1 Heroku にアプリをデプロイする

>Heroku へのアプリのデプロイには、通常git pushコマンドを使用します。これにより、ローカルリポジトリのコードがリモートのherokuリポジトリにプッシュされます。
>次のコマンドでアプリをデプロイしましょう。
```
git push heroku main
```
>Heroku でデプロイされるのは、master またはmain ブランチのコードです。それ以外のブランチにプッシュした場合、デプロイ処理はトリガーされません
>最後に、Heroku CLI を使ってWeb サーバーインスタンスを起動します。
```
heroku ps:scale web=1
```

### 4-4-2 Slack アプリの設定を更新する
>次に、Heroku のWeb アドレスをリクエストURL に指定し、Slack からのイベントやアクションがこのURL に送信されるようにします。
>次のコマンドを使ってHeroku のWeb アドレスを取得します。

```
heroku info

# 以下、実行結果
# ...
# Web URL: https://<app-name>.herokuapp.com/
```

### 4-4-3 Event SubscriptionsのURLを更新する
リクエストURLを`heroku info`で得たWeb URLに置き換えます。

## 4-5 テスト
これで再びSlackにて`hello`とメッセージを送ってみてください。返答があれば成功です！

講座の資料はここまでです。もっと多くの情報を得たい場合は以下のリンク先の資料を参考にしてみてください。お疲れ様でした！

## 4-6 参考になりそうなリンク集
- [Qiita:Slack Botの種類と大まかな作り方](https://qiita.com/namutaka/items/233a83100c94af033575)
  - バズってた記事。結構わかりやすい。
- [Bolt 入門ガイド](https://slack.dev/bolt-js/ja-jp/tutorial/getting-started)
  - SlackBotのためのjavasciptフレームワーク「Bolt」の公式入門サイト兼ドキュメント
- [slack api チュートリアル](https://api.slack.com/lang/ja-jp)
- [slack api Start learning Building a Slack app](https://api.slack.com/start/building)
  - 役に立ちそうなキーワードがちりばめられてる気がする。。
