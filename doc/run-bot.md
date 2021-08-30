# 3 Botを動かす
[前のセクション](./create-bot.md)の段階でBotを作成することができました。とはいえまだ私たちはプログラムを書いた覚えがありませんね。ということでプログラムのテンプレート（app.js）を用意しました！今回の講義ではこのテンプレートが動かせるようになることがゴールです。最後までやってみましょう！！

## 3-1 サインインシークレットとボットトークンを.envファイルに記載
以下のような流れです。

1. visual studio codeで`tst-hackathon-with-slackbot`を開く
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

`tst-hackathon-with-slackbot`フォルダに移動します。

```
cd <任意のパス>/tst-hackathon-with-slackbot
```

## 3-3 moduleのインストール
```
npm i
```

## 3-4 Botの起動
以下のコマンドで起動します。

```
npm run bot
```
Ctrl＋Cで止められます。が、今は止めないでください。

## Tips: なんか警告が出たのですが。。
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

![スクリーンショット 2021-08-28 174437](https://user-images.githubusercontent.com/38881185/131215124-0ab4e26f-c3cf-40fb-a5b0-fc61c290e3cd.png)

### 3-8-2 インテグレーションに移動

![スクリーンショット 2021-08-28 174457](https://user-images.githubusercontent.com/38881185/131215163-c2f56d3d-56f9-435d-82d7-2b8ba93357bd.png)

### 3-8-3 アプリを追加するをクリック

![スクリーンショット 2021-08-28 174334](https://user-images.githubusercontent.com/38881185/131215175-51de0a37-071d-47f8-be59-4b294034e091.png)

### 3-8-4 作ったアプリを追加

![スクリーンショット 2021-08-28 174346](https://user-images.githubusercontent.com/38881185/131215187-45e7a2b5-f7d0-4560-9faa-261eadb0dcd6.png)

チャンネルのチャットに通知が来ます。

![スクリーンショット 2021-08-28 174524](https://user-images.githubusercontent.com/38881185/131215206-c05ea437-b096-436a-9c34-14be69f45f3f.png)

## 3-9 実行
チャットでhelloと打ってみてください。以下のようになるはずです！

![スクリーンショット 2021-08-29 174034](https://user-images.githubusercontent.com/38881185/131244695-15f1e5c3-17cc-4c33-b284-81e3ea64ec20.png)
  
## 3-10 少し変更してみる
app.jsを開いて20行目の部分を以下に変更してみましょう。
  
```
await say(`Hi! <@${message.user}>!`);
```
  
変更して保存したらBotサーバーを再起動させてください。
  
![スクリーンショット 2021-08-29 180122](https://user-images.githubusercontent.com/38881185/131244906-9e91553a-1c55-483f-a0a8-8ba1380050a9.png)

もう一度`hello`と打ってみましょう

![スクリーンショット 2021-08-29 180331](https://user-images.githubusercontent.com/38881185/131244979-1b0b26ec-e4e8-4d09-9338-93da0072bb5a.png)

**おめでとうございます！！**

初めてSlackBot（Slackアプリ）をローカル開発環境で動かすことに成功しました！

これであなたも一人前のSlackBot開発者です！！！！！

ここまできたらデプロイもやってみましょう！

次は、[4 BotをHerokuにデプロイする](./deploy-bot.md)へ！
