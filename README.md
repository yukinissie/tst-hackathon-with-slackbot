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
