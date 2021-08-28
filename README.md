# 三種の神器ハッカソン with SlackBot
三種の神器ハッカソン用のSlackBotテンプレート

## イベントページ
https://hackz.connpass.com/event/223010/

## 内容物
- hello-bot
  - helloといったらhello!と返してくれます。
- oumgaeshi-bot
  - 送ったメッセージをそのまま返してくれます。
- slackbot-base
  - SlackBot開発のベースで使って下さい。 
- スライド
  - https://docs.google.com/presentation/d/17qBYyV5COJdiFLdBZ7MiJYFofSP1dEHf7LzDmYWEc8I/edit?usp=sharing

## 環境構築手順
以下はWindows向けの説明ですMacの人は[こちら](./README-for-mac.md)から

### 管理者モードでPowershellを起動
win+x a
もしくは、WindowsキーとXキーを同時に押して「Windows PowerShell(管理者)(A)」を選択して起動。

![スクリーンショット 2021-08-28 103506](https://user-images.githubusercontent.com/38881185/131204213-dcf5ddc2-78a3-4f43-8c53-8a9d0182090f.png)

### chocolateyのインストール

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
https://chocolatey.org/install

### nvmのインストール
Node.jsのバージョン管理システムを入れます。

すでにNode.jsを管理する系のソフトウェア（nvm, n, nodist, nodenv）が入っている場合は必要ないです。

```
choco install -y nvm
```

### ngrokのインストール
```
choco install -y ngrok
```

### Node.jsのインストール
nvmの場合は以下コマンドでインストールできます。今回は14.17.5を使います。（とくにバージョンのこだわりはありません。おススメ教えて）
```
nvm install 14.17.5
nvm use 14.17.5
```

コマンドが動かないときはPowerShellを再起動しましょう！

### Slackワークスペースの作成
この作業は代表者1名が行ってください。

### ワークスペースを新規作成をクリック
https://slack.com/intl/ja-jp/
![スクリーンショット 2021-08-28 121951](https://user-images.githubusercontent.com/38881185/131204692-340c8db0-5397-4d6e-88d9-68431d9ee686.png)
### ログインしワークスペースを作成するをクリック
![スクリーンショット 2021-08-28 122319](https://user-images.githubusercontent.com/38881185/131204775-ab6ea6c6-40a6-40f5-b300-b60225e18dff.png)
### ワークスペース名を設定
社名（ワークスペース名）は好きなものにしましょう。画面左上に常に表示されます。
![スクリーンショット 2021-08-28 122927](https://user-images.githubusercontent.com/38881185/131204916-825c59c9-2b8a-470a-b383-e0f03c3efa9b.png)
### 最初のチャンネル名を設定
「チームで取り組んでいることは何ですか？」では最初に作るチャンネル名を入れます。チャンネル名は半角英字を使いましょう。今回は「tst-hackathon」にしました。
![スクリーンショット 2021-08-28 123634](https://user-images.githubusercontent.com/38881185/131205052-b7cc88dd-3d03-4df1-9061-410d40dac962.png)
### チームメンバーを追加する
チームで開発するのであれば、このタイミングで招待メールを送ってあげましょう！
![スクリーンショット 2021-08-28 123748](https://user-images.githubusercontent.com/38881185/131205204-ee267c8e-548a-455d-86f1-8ea4b6c4ebe5.png)


## Botを作成する
### slack apiにアクセス
https://api.slack.com/

### Your Appsへ移動
![スクリーンショット 2021-08-28 152656](https://user-images.githubusercontent.com/38881185/131208912-e985a4d6-40b3-4e7f-ae30-bcb1c0fb2422.png)

### Create New Appをクリック
![スクリーンショット 2021-08-28 152830](https://user-images.githubusercontent.com/38881185/131208957-5256db95-d338-45c6-80be-10d604331780.png)

### From scratchをクリック
![スクリーンショット 2021-08-28 153933](https://user-images.githubusercontent.com/38881185/131209056-8f2eca8b-c615-4235-a317-69eef13b0835.png)

### App Nameとワークスペースの設定
![スクリーンショット 2021-08-28 154424](https://user-images.githubusercontent.com/38881185/131209169-ad96010e-fba3-4845-b5c8-561d1fd8124d.png)

Botのためのアプリを作成できた
![スクリーンショット 2021-08-28 154514](https://user-images.githubusercontent.com/38881185/131209200-a51ae52e-64ce-48aa-8cf6-bad7071bab32.png)

### Bot名の設定
App Homeへ移動
![スクリーンショット 2021-08-28 160730](https://user-images.githubusercontent.com/38881185/131209854-cd91d29e-8cfa-43ab-a4fe-19e4a6335f1c.png)
表示名とユーザー名を設定
![スクリーンショット 2021-08-28 161017](https://user-images.githubusercontent.com/38881185/131209898-794a9730-8531-4cdc-b0b8-c432c78eaddb.png)

## スコープを付ける
### OAuth & Permissionsに移動
![スクリーンショット 2021-08-28 155336](https://user-images.githubusercontent.com/38881185/131209469-32443405-e111-4441-a088-825640c25f33.png)

### Scopeを追加
OAuth & PermissionsページのScopesセクションのBot Token Scopesに対してScopeを付けます。
![スクリーンショット 2021-08-28 155749](https://user-images.githubusercontent.com/38881185/131209617-da2d8dac-0b1d-44b1-8432-e4e807f3c109.png)

channels:historyとchat:writeを選択してください。
![スクリーンショット 2021-08-28 160037](https://user-images.githubusercontent.com/38881185/131209642-a614fae7-9d34-4169-a472-f2abe1099a40.png)

### ワークスペースにBotをインストール
Basic Informationに移動してInstall your appボタンをクリックします。
![スクリーンショット 2021-08-28 160432](https://user-images.githubusercontent.com/38881185/131209766-22da77bd-c204-4180-ba3f-5e58b6ffda69.png)

許可します。
![スクリーンショット 2021-08-28 161433](https://user-images.githubusercontent.com/38881185/131209978-38ef0a8c-573d-456c-a999-50bfd55f36b9.png)

### コードを動かす！
#### サインインシークレットとボットトークンを.envファイルに記載する
1. .env-exampleを.envという名前でコピー
2. サインインシークレットを`SLACK_SIGNING_SECRET`に、ボットトークンを`SLACK_BOT_TOKEN`に記述。

##### サインインシークレットの場所
`slack api`の`Basic Information`の`App Credentials`に`Signing Secret`として記載があります。
画像

##### ボットトークンの場所
`slack api`の`OAuth & Permissions`の`OAuth Tokens for Your Workspace`に`Bot User OAuth Token`として記載があります。
画像

それぞれ.envファイルに記載してください。
```
SLACK_SIGNING_SECRET=<...>
SLACK_BOT_TOKEN=xoxb-<...>
PORT=3000
```
#### app.jsがある階層にプロンプトを移動させる。
```
cd bot
```

#### moduleのインストール
```
npm i
```

### Botの起動
```
npm run bot
```

### ngrokの起動
ngrokを起動させます。環境変数PORTに記載した番号または3000を指定します。表示されたURLは後で使います。
```
ngrok http 3000
```

### Event Subscriptionsの有効化
Slackでのイベント（誰かがメッセージを送信した等）をBot側で受け取れるように`Event Subscriptions`を有効化します。