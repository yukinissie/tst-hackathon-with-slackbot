# Slack bot template with Node.js
三種の神器ハッカソン用のSlackBotテンプレート

## イベントページ
https://hackz.connpass.com/event/223010/

## 内容物
- hello-bot
  - helloといったらhello!と返してくれます。
- oumgaeshi-bot
  - 送ったメッセージをそのまま返してくれます。
- スライド
  - https://docs.google.com/presentation/d/17qBYyV5COJdiFLdBZ7MiJYFofSP1dEHf7LzDmYWEc8I/edit?usp=sharing

## 環境構築手順
### 管理者モードでPowershellを起動
win+x a

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

動かないときはPowerShellを再起動する
