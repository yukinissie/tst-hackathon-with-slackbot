# 開発環境構築(macOS向け)
玄人へ。node14とngrokが動けばOKなのであとはSlackのワークスペースと開発用チャンネルさえ持っていれば大丈夫です。

次のセッションへのリンクはページの最下部にあります🙇

## ターミナルを起動
お好きなシェルを起動してください

## Homebrewのインストール

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

https://brew.sh/index_ja

## nvmのインストール
Node.jsのバージョン管理システムである[nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)を入れます。

すでにNode.jsを管理する系のソフトウェア（nvm, n, nodist, nodenv）が入っている場合は必要ないです。

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# お使いのシェルの起動時設定ファイル（.bashrc, bash_profile, .zshrcのうち適切なもの）に以下を追記してください。
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# ターミナルをリロードします
exec $SHELL -l
```

バージョン確認

```
nvm -v

# 出力結果
# 0.38.0
```

## ngrokのインストール
[ngrok](https://ngrok.com)を入れます。ローカルのWebサーバーを一時的にインターネット上に公開するために使います。

```
# もしかしたらオプション（--cask）がいるかもしれません
brew install ngrok
```

バージョン確認

```
ngrok -v

# 出力結果
# ngrok version 2.3.40
```

## Node.jsのインストール
nvmの場合は以下コマンドでインストールできます。今回は14.17.5を使います。

```
nvm install 14.17.5
nvm use 14.17.5
```

バージョン確認

```
node -v

# 出力結果
# v14.17.5
```

コマンドが動かないときはターミナルを再起動しましょう！

## Slackワークスペースの作成
この作業は代表者1名が行ってください。

## ワークスペースを新規作成をクリック
https://slack.com/intl/ja-jp/

![スクリーンショット 2021-08-28 121951](https://user-images.githubusercontent.com/38881185/131204692-340c8db0-5397-4d6e-88d9-68431d9ee686.png)

## ログインしワークスペースを作成するをクリック

![スクリーンショット 2021-08-28 122319](https://user-images.githubusercontent.com/38881185/131204775-ab6ea6c6-40a6-40f5-b300-b60225e18dff.png)

## ワークスペース名を設定
社名（ワークスペース名）は好きなものにしましょう。画面左上に常に表示されます。

![スクリーンショット 2021-08-28 122927](https://user-images.githubusercontent.com/38881185/131204916-825c59c9-2b8a-470a-b383-e0f03c3efa9b.png)

## 最初のチャンネル名を設定
「チームで取り組んでいることは何ですか？」では最初に作るチャンネル名を入れます。チャンネル名は半角英字を使いましょう。今回は「tst-hackathon」にしました。

![スクリーンショット 2021-08-28 123634](https://user-images.githubusercontent.com/38881185/131205052-b7cc88dd-3d03-4df1-9061-410d40dac962.png)

## チームメンバーを追加する
チームで開発するのであれば、このタイミングで招待メールを送ってあげましょう！

![スクリーンショット 2021-08-28 123748](https://user-images.githubusercontent.com/38881185/131205204-ee267c8e-548a-455d-86f1-8ea4b6c4ebe5.png)

次は、[2 Botを作成する](./create-bot.md)へ！
