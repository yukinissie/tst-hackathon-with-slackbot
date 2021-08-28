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
```
choco install -y nvm
```

### ngrokのインストール
```
choco install -y ngrok
```

### Node.jsのインストール
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
「チームで取り組んでいることは何ですか？」では最初に作るチャンネル名になります。チャンネル名は半角英字を使いましょう。今回は「tst-hackathon」にしました。
![スクリーンショット 2021-08-28 123634](https://user-images.githubusercontent.com/38881185/131205052-b7cc88dd-3d03-4df1-9061-410d40dac962.png)
### チームメンバーを追加する
チームで開発するのであれば、このタイミングで招待メールを送ってあげましょう！
![スクリーンショット 2021-08-28 123748](https://user-images.githubusercontent.com/38881185/131205204-ee267c8e-548a-455d-86f1-8ea4b6c4ebe5.png)
