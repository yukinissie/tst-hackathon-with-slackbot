# 三種の神器ハッカソン with SlackBot
三種の神器ハッカソン用のSlackBotテンプレート

## イベントページ
https://hackz.connpass.com/event/223010/

## 内容物
- oumgaeshi-bot
  - 送ったメッセージをそのまま返してくれます。
- slackbot-template
  - SlackBot開発のベースで使って下さい。 
- スライド
  - https://docs.google.com/presentation/d/17qBYyV5COJdiFLdBZ7MiJYFofSP1dEHf7LzDmYWEc8I/edit?usp=sharing

## 1 環境構築手順
以下はWindows向けの説明ですMacの人は[こちら](./README-for-mac.md)から

### 1-1 管理者モードでPowershellを起動
win+x a
もしくは、WindowsキーとXキーを同時に押して「Windows PowerShell(管理者)(A)」を選択して起動。

![スクリーンショット 2021-08-28 103506](https://user-images.githubusercontent.com/38881185/131204213-dcf5ddc2-78a3-4f43-8c53-8a9d0182090f.png)

### 1-2 chocolateyのインストール

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
https://chocolatey.org/install

### 1-3 nvmのインストール
Node.jsのバージョン管理システムを入れます。

すでにNode.jsを管理する系のソフトウェア（nvm, n, nodist, nodenv）が入っている場合は必要ないです。

```
choco install -y nvm
```

### 1-4 ngrokのインストール
```
choco install -y ngrok
```

### 1-5 Node.jsのインストール
nvmの場合は以下コマンドでインストールできます。今回は14.17.5を使います。（とくにバージョンのこだわりはありません。おススメ教えて）
```
nvm install 14.17.5
nvm use 14.17.5
```

コマンドが動かないときはPowerShellを再起動しましょう！

### 1-6 Slackワークスペースの作成
この作業は代表者1名が行ってください。

### 1-7 ワークスペースを新規作成をクリック
https://slack.com/intl/ja-jp/

![スクリーンショット 2021-08-28 121951](https://user-images.githubusercontent.com/38881185/131204692-340c8db0-5397-4d6e-88d9-68431d9ee686.png)

### 1-8 ログインしワークスペースを作成するをクリック

![スクリーンショット 2021-08-28 122319](https://user-images.githubusercontent.com/38881185/131204775-ab6ea6c6-40a6-40f5-b300-b60225e18dff.png)

### 1-9 ワークスペース名を設定
社名（ワークスペース名）は好きなものにしましょう。画面左上に常に表示されます。

![スクリーンショット 2021-08-28 122927](https://user-images.githubusercontent.com/38881185/131204916-825c59c9-2b8a-470a-b383-e0f03c3efa9b.png)

### 1-10 最初のチャンネル名を設定
「チームで取り組んでいることは何ですか？」では最初に作るチャンネル名を入れます。チャンネル名は半角英字を使いましょう。今回は「tst-hackathon」にしました。

![スクリーンショット 2021-08-28 123634](https://user-images.githubusercontent.com/38881185/131205052-b7cc88dd-3d03-4df1-9061-410d40dac962.png)

### 1-11 チームメンバーを追加する
チームで開発するのであれば、このタイミングで招待メールを送ってあげましょう！

![スクリーンショット 2021-08-28 123748](https://user-images.githubusercontent.com/38881185/131205204-ee267c8e-548a-455d-86f1-8ea4b6c4ebe5.png)


## 2 Botを作成する
### 2-1 slack apiにアクセス
https://api.slack.com/

### 2-2 Your Appsへ移動

![スクリーンショット 2021-08-28 152656](https://user-images.githubusercontent.com/38881185/131208912-e985a4d6-40b3-4e7f-ae30-bcb1c0fb2422.png)

### 2-3 Create New Appをクリック

![スクリーンショット 2021-08-28 152830](https://user-images.githubusercontent.com/38881185/131208957-5256db95-d338-45c6-80be-10d604331780.png)

### 2-4 From scratchをクリック

![スクリーンショット 2021-08-28 153933](https://user-images.githubusercontent.com/38881185/131209056-8f2eca8b-c615-4235-a317-69eef13b0835.png)

### 2-5 App Nameとワークスペースの設定

![スクリーンショット 2021-08-28 154424](https://user-images.githubusercontent.com/38881185/131209169-ad96010e-fba3-4845-b5c8-561d1fd8124d.png)

Botのためのアプリを作成できました！

![スクリーンショット 2021-08-28 154514](https://user-images.githubusercontent.com/38881185/131209200-a51ae52e-64ce-48aa-8cf6-bad7071bab32.png)

### 2-6 Bot名の設定
#### 2-6-1 App Homeへ移動

![スクリーンショット 2021-08-28 160730](https://user-images.githubusercontent.com/38881185/131209854-cd91d29e-8cfa-43ab-a4fe-19e4a6335f1c.png)

#### 2-6-2 表示名とユーザー名を設定

![スクリーンショット 2021-08-28 161017](https://user-images.githubusercontent.com/38881185/131209898-794a9730-8531-4cdc-b0b8-c432c78eaddb.png)

### 2-7 スコープを付ける
#### 2-7-1 OAuth & Permissionsに移動

![スクリーンショット 2021-08-28 155336](https://user-images.githubusercontent.com/38881185/131209469-32443405-e111-4441-a088-825640c25f33.png)

#### 2-7-2 Scopeを追加
OAuth & PermissionsページのScopesセクションのBot Token Scopesに対してScopeを付けます。

![スクリーンショット 2021-08-28 155749](https://user-images.githubusercontent.com/38881185/131209617-da2d8dac-0b1d-44b1-8432-e4e807f3c109.png)

chat:writeを選択してください。

![スクリーンショット 2021-08-28 160037](https://user-images.githubusercontent.com/38881185/131209642-a614fae7-9d34-4169-a472-f2abe1099a40.png)

### 2-8 ワークスペースにBotをインストール
Basic Informationに移動してInstall your appボタンをクリックします。

![スクリーンショット 2021-08-28 160432](https://user-images.githubusercontent.com/38881185/131209766-22da77bd-c204-4180-ba3f-5e58b6ffda69.png)

許可します。

![スクリーンショット 2021-08-28 161433](https://user-images.githubusercontent.com/38881185/131209978-38ef0a8c-573d-456c-a999-50bfd55f36b9.png)

## 3 Botを動かす
### 3-1 サインインシークレットとボットトークンを.envファイルに記載
1. .env-exampleを.envという名前でコピーする
2. サインインシークレットを`SLACK_SIGNING_SECRET`に、ボットトークンを`SLACK_BOT_TOKEN`に記述する

#### 3-1-1 サインインシークレットの場所
`slack api`の`Basic Information`の`App Credentials`に`Signing Secret`として記載があります。

![スクリーンショット 2021-08-28 183756](https://user-images.githubusercontent.com/38881185/131214639-793048a9-01f0-4539-b9e7-155c47f56ccc.png)


#### 3-1-2 ボットトークンの場所
`slack api`の`OAuth & Permissions`の`OAuth Tokens for Your Workspace`に`Bot User OAuth Token`として記載があります。

![スクリーンショット 2021-08-28 184058](https://user-images.githubusercontent.com/38881185/131214644-2684632f-a79f-4516-a75e-bdc6752ec28a.png)


それぞれ.envファイルに記載してください。
```
SLACK_SIGNING_SECRET=<...>
SLACK_BOT_TOKEN=xoxb-<...>
PORT=3000
```

### 3-2 app.jsがある階層にプロンプトを移動
```
cd slackbot-template
```

### 3-3 moduleのインストール
```
npm i
```

### 3-4 Botの起動
```
npm run bot
```

### 3-5 ngrokの起動
ngrokを起動させます。環境変数PORTに記載した番号または3000を指定します。表示されたURLは後で使います。
```
ngrok http 3000
```

### 3-6 Event Subscriptionsの有効化
Slackでのイベント（誰かがメッセージを送信した等）をBot側で受け取れるように`Event Subscriptions`を有効化します。
1. `Event Subscriptions`ページにて`Enable Events`を`On`にします。
2. Request URLに`ngrokが表示したURL＋/slack/events`を入力します。
3. 最後に右下のSave Changesを押して設定を保存します。


![スクリーンショット 2021-08-28 191807](https://user-images.githubusercontent.com/38881185/131214720-c1dbacae-d68c-45e7-b147-45b1c157ab56.png)

### 3-7 購読するイベントの設定
Slack上のどのようなイベントを購読するか指定します。`Event Subscriptions`の`Subscribe to bot events`で指定します。今回は以下の4つです。
- message.channels（Botのいるチャンネルにメッセージが投稿されたとき）
- message.groups（Botのいるプライベートチャンネルにメッセージが投稿されたとき）
- message.im（Botに対するDMにメッセージが投稿されたとき）
- message.mpim（Botのいる複数人参加のDMチャットにメッセージが投稿されたとき）

忘れずに保存をしてください。

![スクリーンショット 2021-08-28 192831](https://user-images.githubusercontent.com/38881185/131215006-232f7108-2eed-4181-8a87-cac8c30e71b3.png)

### 3-8 SlackのチャンネルにBotを追加。
いよいよラストスパートです。頑張りましょう。
#### 3-8-1 チャンネル詳細を開く

![スクリーンショット 2021-08-28 174437](https://user-images.githubusercontent.com/38881185/131215124-0ab4e26f-c3cf-40fb-a5b0-fc61c290e3cd.png)

#### 3-8-2 インテグレーションに移動

![スクリーンショット 2021-08-28 174457](https://user-images.githubusercontent.com/38881185/131215163-c2f56d3d-56f9-435d-82d7-2b8ba93357bd.png)

#### 3-8-3 アプリを追加するをクリック

![スクリーンショット 2021-08-28 174334](https://user-images.githubusercontent.com/38881185/131215175-51de0a37-071d-47f8-be59-4b294034e091.png)

#### 3-8-4 作ったアプリを追加

![スクリーンショット 2021-08-28 174346](https://user-images.githubusercontent.com/38881185/131215187-45e7a2b5-f7d0-4560-9faa-261eadb0dcd6.png)

チャンネルのチャットに通知が来ます。

![スクリーンショット 2021-08-28 174524](https://user-images.githubusercontent.com/38881185/131215206-c05ea437-b096-436a-9c34-14be69f45f3f.png)

### 3-9 実行
チャットでhelloと打ってみてください。以下のようになるはずです。

![スクリーンショット 2021-08-28 174702](https://user-images.githubusercontent.com/38881185/131215305-b1582afc-9a6b-4274-ba30-c4f23e705f33.png)
