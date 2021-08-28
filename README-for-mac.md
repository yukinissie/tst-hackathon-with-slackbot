## 環境構築手順
玄人へ。node14とngrokが動けばOKなのであとはSlackのワークスペースと開発用チャンネルさえ持っていれば大丈夫です。

### ターミナルを起動
お好きなシェルを起動してください

### Homebrewのインストール
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
https://brew.sh/index_ja

### nvmのインストール
Node.jsのバージョン管理システムを入れます。

すでにNode.jsを管理する系のソフトウェア（nvm, n, nodist, nodenv）が入っている場合は必要ないです。

```
brew install nvm
```

### ngrokのインストール
```
# もしかしたらオプション（--cask）がいるかもしれません
brew install ngrok
```

### Node.jsのインストール
nvmの場合は以下コマンドでインストールできます。今回は14.17.5を使います。
```
nvm install 14.17.5
nvm use 14.17.5
```

コマンドが動かないときはターミナルを再起動しましょう！

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
