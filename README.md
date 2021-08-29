# 三種の神器ハッカソン with SlackBot
三種の神器ハッカソン用のSlackBotスターター（Node.js×Heroku(ヘロク)）

## イベントページ
https://hackz.connpass.com/event/223010/

## やること
- 開発環境の構築
- テンプレートBotを動かす
  - 特定のメッセージを送ると定型文を返してくれるBotです。
- デプロイする

## 最終的にできるもの
![tst-hackathon (1)](https://user-images.githubusercontent.com/38881185/131238695-fb59d646-bc8d-435b-8d63-0e7d4ee7a808.png)

## 内容物について
- doc/
  - 構築の手順書
    - 0 やってみよう！
    - 1 開発環境構築
    - 2 Botを作成する
    - 3 Botを動かす
    - 4 BotをHerokuにデプロイする
- app.js
  - SlackBotのテンプレートプログラム
- .env-example
  - 開発時に使う環境変数の例をまとめたファイル
  - 使うときは`.env`ファイルにコピーしてそれを使います。
- package.json
  - Node.jsプロジェクト用の設定ファイル
- package-lock.json
  - モジュールの依存関係について厳密に定義しているファイル
- .gitignore
  - gitで管理しないものについて書かれたファイル
- Procfile
  - 「4 BotをHerokuにデプロイする([Win, Mac共通](deploy-bot.md))」で使うHeroku用設定ファイル
- README.md
  - このファイル
- スライド
  - https://docs.google.com/presentation/d/17qBYyV5COJdiFLdBZ7MiJYFofSP1dEHf7LzDmYWEc8I/edit?usp=sharing

# 0 やってみよう！
GitHubからテンプレをダウンロード＆解凍（展開）したら、README.mdを見ながら進めてください。

右上の緑のボタン「Code」から

![スクリーンショット 2021-08-29 111912](https://user-images.githubusercontent.com/38881185/131236094-ffa41124-cdab-4bfd-a939-ff1a3c2d95f4.png)

「Download ZIP」でダウンロードします。

![スクリーンショット 2021-08-29 111924](https://user-images.githubusercontent.com/38881185/131236105-d30a0c2c-8587-4ec5-8e54-db8204e0343f.png)

任意の場所に解凍（展開）してください。（デスクトップ等）

次に進みましょう！

# 1 開発環境構築(Windows10向け)
以下はWindows向けの説明です。Macの人は[こちら](./doc/README-for-mac.md)から！

## 1-1 管理者モードでPowershellを起動
`win+x a`もしくは、WindowsキーとXキーを同時に押して「Windows PowerShell(管理者)(A)」を選択して起動します。

![スクリーンショット 2021-08-28 103506](https://user-images.githubusercontent.com/38881185/131204213-dcf5ddc2-78a3-4f43-8c53-8a9d0182090f.png)

## 1-2 chocolateyのインストール
chocolateyとはWindowsのソフトウェアをコマンドラインでインストールできるようにしたツールです。

起動させたPowerShellに以下をコピペしてエンターキーを押します。

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

https://chocolatey.org/install

バージョン確認

```
choco -v

# 出力結果
# 0.10.15
```

## 1-3 nvmのインストール
Node.jsのバージョン管理システムである[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)を入れます。

すでにNode.jsを管理する系のソフトウェア（nvm, n, nodist, nodenv）が入っている場合は必要ないです。

```
choco install -y nvm
```

バージョン確認

```
nvm -v

# 出力結果
# Running version 1.1.7.
# （略）
```

コマンドが動かないときはPowerShellを再起動しましょう！（管理者モードで起動することをお忘れなく）

## 1-4 Node.jsのインストール
nvmの場合は以下コマンドでインストールできます。今回は14.17.5を使います。

インストールコマンド
```
nvm install 14.17.5
```

適応コマンド
```
nvm use 14.17.5
```

バージョン確認
```
node -v

# 出力結果
# v14.17.5
```

コマンドが動かないときはPowerShellを再起動しましょう！（管理者モードで起動することをお忘れなく）

## 1-5 ngrok(エヌグロック？)のインストール
[ngrok](https://ngrok.com)を入れます。ローカルのWebサーバーを一時的にインターネット上に公開するために使います。

```
choco install -y ngrok
```

バージョン確認

```
ngrok -v

# 出力結果
# ngrok version 2.3.40
```



## 1-6 Slackワークスペースの作成
この作業は代表者1名が行ってください。

## 1-7 ワークスペースを新規作成をクリック
「ハックツハッカソンコミュニティ」のようなSlackのワークスペースを開発のために作りましょう！

こちらから👉https://slack.com/intl/ja-jp/

![スクリーンショット 2021-08-28 121951](https://user-images.githubusercontent.com/38881185/131204692-340c8db0-5397-4d6e-88d9-68431d9ee686.png)

## 1-8 ログインしワークスペースを作成するをクリック

![スクリーンショット 2021-08-28 122319](https://user-images.githubusercontent.com/38881185/131204775-ab6ea6c6-40a6-40f5-b300-b60225e18dff.png)

## 1-9 ワークスペース名を設定
社名（ワークスペース名）は好きなものにしましょう。画面左上に常に表示されます。

![スクリーンショット 2021-08-28 122927](https://user-images.githubusercontent.com/38881185/131204916-825c59c9-2b8a-470a-b383-e0f03c3efa9b.png)

## 1-10 最初のチャンネル名を設定
「チームで取り組んでいることは何ですか？」では最初に作るチャンネル名を入れます。チャンネル名は半角英字を使いましょう。今回は「tst-hackathon」にしました。

![スクリーンショット 2021-08-28 123634](https://user-images.githubusercontent.com/38881185/131205052-b7cc88dd-3d03-4df1-9061-410d40dac962.png)

## 1-11 チームメンバーを追加する
チームで開発するのであれば、このタイミングで招待メールを送ってあげましょう！

![スクリーンショット 2021-08-28 123748](https://user-images.githubusercontent.com/38881185/131205204-ee267c8e-548a-455d-86f1-8ea4b6c4ebe5.png)

次は、[2 Botを作成する](./doc/create-bot.md)へ！
