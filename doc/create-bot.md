# 2 Botを作成する
[前回のセクション](../README.md)ではNode.jsやngrokのインストール、開発用のSlackワークスペースの作成を行いました。今回はSlackAPI（Botの管理画面）上でBotを作成し、ワークスペースにインストールするまでを行います！それではやってみましょう！！

## 2-1 slack apiにアクセス
https://api.slack.com/

## 2-2 Your Appsへ移動

![スクリーンショット 2021-08-28 152656](https://user-images.githubusercontent.com/38881185/131208912-e985a4d6-40b3-4e7f-ae30-bcb1c0fb2422.png)

## 2-3 Create an Appをクリック
![スクリーンショット 2021-08-29 152953](https://user-images.githubusercontent.com/38881185/131241010-53055d78-df9f-4957-a7c3-c69d433a898c.png)

もしくは、、Create New Appをクリック

![スクリーンショット 2021-08-28 152830](https://user-images.githubusercontent.com/38881185/131208957-5256db95-d338-45c6-80be-10d604331780.png)

## 2-4 From scratchをクリック

![スクリーンショット 2021-08-28 153933](https://user-images.githubusercontent.com/38881185/131209056-8f2eca8b-c615-4235-a317-69eef13b0835.png)

## 2-5 App Nameとワークスペースの設定
`App Name`にアプリ名、`Pick workspace to develop your app in:`に先ほど作成したワークスペースを設定します。（`神 Bot`っていう名前に意味はありません。好きなものを設定してください）

設定したら`Create App`をクリックしてください。

![スクリーンショット 2021-08-28 154424](https://user-images.githubusercontent.com/38881185/131209169-ad96010e-fba3-4845-b5c8-561d1fd8124d.png)

Botのためのアプリを作成できました！

![スクリーンショット 2021-08-28 154514](https://user-images.githubusercontent.com/38881185/131209200-a51ae52e-64ce-48aa-8cf6-bad7071bab32.png)

## 2-6 スコープを付ける
### 2-6-1 OAuth & Permissionsに移動

![スクリーンショット 2021-08-28 155336](https://user-images.githubusercontent.com/38881185/131209469-32443405-e111-4441-a088-825640c25f33.png)

### 2-6-2 Scopeを追加
OAuth & PermissionsページのScopesセクションのBot Token Scopesに対してScopeを付けます。

![スクリーンショット 2021-08-28 155749](https://user-images.githubusercontent.com/38881185/131209617-da2d8dac-0b1d-44b1-8432-e4e807f3c109.png)

**chat:write**を選択してください。（画像があてにならなくてｽﾐﾏｾﾝ）

![スクリーンショット 2021-08-28 160037](https://user-images.githubusercontent.com/38881185/131209642-a614fae7-9d34-4169-a472-f2abe1099a40.png)


## 2-7 Bot名の設定
### 2-7-1 App Homeへ移動

![スクリーンショット 2021-08-28 160730](https://user-images.githubusercontent.com/38881185/131209854-cd91d29e-8cfa-43ab-a4fe-19e4a6335f1c.png)

### 2-7-2 表示名とユーザー名を設定

![スクリーンショット 2021-08-28 161017](https://user-images.githubusercontent.com/38881185/131209898-794a9730-8531-4cdc-b0b8-c432c78eaddb.png)


## 2-8 ワークスペースにBotをインストール
Basic Informationに移動してInstall your appボタンをクリックします。

![スクリーンショット 2021-08-28 160432](https://user-images.githubusercontent.com/38881185/131209766-22da77bd-c204-4180-ba3f-5e58b6ffda69.png)

許可します。

![スクリーンショット 2021-08-28 161433](https://user-images.githubusercontent.com/38881185/131209978-38ef0a8c-573d-456c-a999-50bfd55f36b9.png)

次は、[3 Botを動かす](./run-bot.md)へ！
