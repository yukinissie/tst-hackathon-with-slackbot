# 3 Botを動かす
[前のセクション](./create-bot.md)の段階でBotを作成することができました。とはいえまだ私たちはプログラムを書いた覚えがありませんね。ということでプログラムのテンプレート（app.js）を用意しました！今回の講義ではこのテンプレートが動かせるようになることがゴールです。最後までやってみましょう！！

## 3-1 サインインシークレットとボットトークンを.envファイルに記載
以下のような流れです。

1. visual studio codeで`tst-hackathon-with-slackbot`を開く(人によっては`tst-hackathon-with-slackbot-main`という名前かもしれません。。)
2. `.env`ファイルを新規作成する
3. `.env-example`の内容を`.env`ファイルにコピーする
4. サインインシークレットを`SLACK_SIGNING_SECRET`に、ボットトークンを`SLACK_BOT_TOKEN`に記述する

### 3-1-1 サインインシークレットの場所
`slack api`の`Basic Information`の`App Credentials`に`Signing Secret`として記載があります。

![スクリーンショット 2021-08-28 183756](https://user-images.githubusercontent.com/38881185/131214639-793048a9-01f0-4539-b9e7-155c47f56ccc.png)


### 3-1-2 ボットトークンの場所
`slack api`の`OAuth & Permissions`の`OAuth Tokens for Your Workspace`に`Bot User OAuth Token`として記載があります。

![スクリーンショット 2021-08-28 184058](https://user-images.githubusercontent.com/38881185/131214644-2684632f-a79f-4516-a75e-bdc6752ec28a.png)


それぞれ.envファイルに記載してください。
```
SLACK_SIGNING_SECRET=<...>
SLACK_BOT_TOKEN=xoxb-<...>
PORT=3000
```

## 3-2 シェルでプロジェクトフォルダを開く

任意のシェル（PowerShellやターミナル）を起動させます。（管理者権限不要）

`tst-hackathon-with-slackbot`（`tst-hackathon-with-slackbot-main`）フォルダに移動します。

```
cd <任意のパス>/tst-hackathon-with-slackbot

# もしくは
# cd <任意のパス>/tst-hackathon-with-slackbot-main
```

## 3-3 moduleのインストール
```
npm i
```

## 3-4 Botの起動
以下のコマンドで起動します。

注意：別プロジェクトで3000番ポートでサーバーを起動させている場合は止めておいてください！この後の作業がうまくいきません。

```
npm run bot
```
Ctrl＋Cで止められます。が、今は止めないでください。

## FAQ: なんか警告が出たのですが。。
もし以下のような画面が表示されたらアクセスを許可するを選択してください。

![スクリーンショット 2021-08-29 164901](https://user-images.githubusercontent.com/38881185/131275074-07a67e86-b27d-4557-8374-f4eba789f706.png)


## 3-5 ngrokの起動
ngrokを起動させます。環境変数PORTに記載した番号または3000を指定します。表示されたURL(https://<hoge>.ngrok.io)は後で使います。(Botの起動とは別のシェルで起動させてください)
  
起動位置はどこでも大丈夫です。

```
ngrok http 3000
```
  
こちらもCtrl＋Cで止められますが、今は止めないでください。

## 3-6 Event Subscriptionsの有効化
Slackでのイベント（誰かがメッセージを送信した等）をBot側で受け取れるように`Event Subscriptions`を有効化します。

1. `Event Subscriptions`ページにて`Enable Events`を`On`にします。
2. Request URLに`ngrokが表示したURL(https://<hoge>.ngrok.io)＋/slack/events`を入力します。
3. 最後に右下のSave Changesを押して設定を保存します。


![スクリーンショット 2021-08-28 191807](https://user-images.githubusercontent.com/38881185/131214720-c1dbacae-d68c-45e7-b147-45b1c157ab56.png)

## 3-7 購読するイベントの設定
Slack上のどのようなイベントを購読するか指定します。`Event Subscriptions`の`Subscribe to bot events`で指定します。今回は以下の4つです。

- message.channels（Botのいるチャンネルにメッセージが投稿されたとき）
- message.groups（Botのいるプライベートチャンネルにメッセージが投稿されたとき）
- message.im（Botに対するDMにメッセージが投稿されたとき）
- message.mpim（Botのいる複数人参加のDMチャットにメッセージが投稿されたとき）

忘れずに保存をしてください。

![スクリーンショット 2021-08-28 192831](https://user-images.githubusercontent.com/38881185/131215006-232f7108-2eed-4181-8a87-cac8c30e71b3.png)

もしも以下のような案内が出たら`reinstall your app`をクリックしてください。
![スクリーンショット 2021-08-29 172052](https://user-images.githubusercontent.com/38881185/131243769-62b6dbe5-6777-46e6-ae07-5c74147935c1.png)

## 3-8 SlackのチャンネルにBotを追加。
いよいよラストスパートです！頑張りましょう！！

### 3-8-1 チャンネル詳細を開く
Botをインストールしたいチャネル名をクリックします。

![スクリーンショット 2021-08-30 135814](https://user-images.githubusercontent.com/38881185/131287864-59c5f044-6001-4e09-8456-b491eabd09ef.png)

### 3-8-2 インテグレーションに移動
インテグレーションをクリック

![スクリーンショット 2021-08-30 135823](https://user-images.githubusercontent.com/38881185/131287848-05c990a9-a44b-4b63-875a-074b53a24d06.png)

### 3-8-3 アプリを追加するをクリック

![スクリーンショット 2021-08-28 174334](https://user-images.githubusercontent.com/38881185/131288215-939d75db-59ef-4b86-ac88-27bb97ed3439.png)

### 3-8-4 作ったアプリを追加

![スクリーンショット 2021-08-28 174346](https://user-images.githubusercontent.com/38881185/131215187-45e7a2b5-f7d0-4560-9faa-261eadb0dcd6.png)

チャンネルのチャットに通知が来ます。

![スクリーンショット 2021-08-30 140120](https://user-images.githubusercontent.com/38881185/131288006-a6fccbde-e032-41ed-b5e8-a6ffb4cc9502.png)


## 3-9 実行
チャットでhelloと打ってみてください。以下のようになるはずです！

![スクリーンショット 2021-08-30 140204](https://user-images.githubusercontent.com/38881185/131288024-bda616be-49d0-413f-b902-0512705cbd64.png)

## 3-10 少し変更してみる
app.jsを開いて20行目の部分を以下に変更してみましょう。
  
```
await say(`Hi! <@${message.user}>!`);
```
  
変更して保存したらBotサーバーを再起動させてください。
  
![スクリーンショット 2021-08-29 180122](https://user-images.githubusercontent.com/38881185/131244906-9e91553a-1c55-483f-a0a8-8ba1380050a9.png)

もう一度`hello`と打ってみましょう！

![スクリーンショット 2021-08-30 140557](https://user-images.githubusercontent.com/38881185/131288075-6668b105-46dc-41fc-829e-0b2ca2da1366.png)

文言が変わりましたか？？

**おめでとうございます！！**

初めてSlackBot（Slackアプリ）をローカル開発環境で動かすことに成功しました！

これであなたも一人前のSlackBot開発者です！！！！！

ここまできたらデプロイもやってみましょう！

次は、[4 BotをHerokuにデプロイする](./deploy-bot.md)へ！
