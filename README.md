# 三種の神器ハッカソン with SlackBot
三種の神器ハッカソン用のSlackBotテンプレート

## イベントページ
https://hackz.connpass.com/event/223010/

## 内容物
- 開発環境の構築手順
- slackbot-template
  - SlackBot開発のベースで使って下さい。 
- oumgaeshi-bot
  - 送ったメッセージをそのまま返してくれます。
- スライド
  - https://docs.google.com/presentation/d/17qBYyV5COJdiFLdBZ7MiJYFofSP1dEHf7LzDmYWEc8I/edit?usp=sharing

## 1 環境構築手順
以下はWindows向けの説明ですMacの人は[こちら](./doc/README-for-mac.md)から

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

次は、[2 Botを作成する](./doc/create-bot.md)へ！
