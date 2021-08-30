# 4 BotをHerokuにデプロイする
[前回のセクション](./run-bot.md)までにローカルで動くBotを作成できました。今回は最後のセクションで、Heroku上にBotをデプロイします。

## 4-1 tst-hackathon-with-slackbotをgitで初期化する
tst-hackathon-with-slackbotフォルダで以下を実行します。

```
git init
```

次にコミットを作ります。

```
git add .
git commit -m"init"
```


## 4-2 Heroku ツールをセットアップする
### 4-2-1 Herokuにサインアップする
Herokuを使うためにアカウントを登録します。すでに持っている人は4-2-2に進んでください。

1. https://www.heroku.com/home へアクセスして、右上の “新規登録” をクリックします。
2. 利用者情報を入力します
   - 名前、メールアドレス、会社名(必須ではありません)、所在国を入力します
   - 主に使っている言語を選択します
   - reCAPCHA にしたがって、ロボットではないことを証明します
   - “CREATE FREE ACCOUNT” をクリックします
3. アクティベーションします
   - 登録したメールアドレスにメールが送られてきます
   - メール内にあるアクティベーションリンク先をクリックします
   - 開いた先でパスワードの設定画面になります
   - パスワードを設定して “Set Password and Log in” をクリックすると、Heroku Dashboard へ入ることができます

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

コマンドが動かないときはPowerShellを再起動しましょう！（管理者モードで起動することをお忘れなく）

## 4-3 Heroku アプリを作成する
### 4-3-1 Heroku アプリを作成する
ユニークな名前を指定してHerokuアプリを作成します。

<app-name>は小文字の英数字でそれからハイフンが使えます。好きな名前にしましょう。
```
heroku create <app-name>

# 実行結果
# Creating <app-name>... done, stack is heroku-18
# https://<app-name>.herokuapp.com/ | https://git.heroku.com/<app-name>.git
```

### 4-3-2 HerokuのリモートGitリポジトリを確認

>Heroku CLI は、自動的にherokuという名前のリモートGit リポジトリをローカルに追加します。リモートGit リポジトリを一覧して、herokuが存在することを確認しましょう。

以下のコマンドを打った時に`git.heroku.com`の文字が実行結果の中で表示されていればOKです。
  
```
git remote -v

# 実行結果
# heroku	https://git.heroku.com/<app-name>.git (fetch)
# heroku	https://git.heroku.com/<app-name>.git (push)
```

無い場合はプロジェクトのルート(tst-hackathon-with-slackbotフォルダ直下)で以下のコマンドを打ってください。<app-name>は環境によって異なります。

```
git remote add heroku https://git.heroku.com/<app-name>.git
```

### 4-3-3 アプリをデプロイする
Slackアプリの認証情報をHeroku アプリに設定します。(環境変数で指定した値です)

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

# 実行結果
# ...
# Web URL: https://<app-name>.herokuapp.com/
```

### 4-4-3 Slackアプリの`Event Subscriptions`のURLを更新する
リクエストURLを`heroku info`で得たWeb URLに置き換えます。(`Web URL`+`/slack/events`)

## 4-5 テスト
これで再びSlackにて`hello`とメッセージを送ってみてください。返答があれば成功です！

講座の資料はここまでです。もっと多くの情報を得たい場合は以下のリンク先の資料を参考にしてみてください。お疲れ様でした！

## 4-6 参考になりそうなリンク集（再掲）
- [Qiita:Slack Botの種類と大まかな作り方](https://qiita.com/namutaka/items/233a83100c94af033575)
  - バズってた記事。結構わかりやすい。
- [Bolt 入門ガイド](https://slack.dev/bolt-js/ja-jp/tutorial/getting-started)
  - SlackBotのためのjavasciptフレームワーク「Bolt」の公式入門サイト兼ドキュメント
- [slack api チュートリアル](https://api.slack.com/lang/ja-jp)
- [slack api Start learning Building a Slack app](https://api.slack.com/start/building)
  - 役に立ちそうなキーワードがちりばめられてる気がする。。
  
## 参考ページ

- https://slack.dev/bolt-js/ja-jp/tutorial/getting-started
- https://slack.dev/bolt-js/ja-jp/deployments/heroku
- https://developer.salesforce.com/jpblogs/2017/05/heroku-signup/

[Topに戻る](../README.md)
