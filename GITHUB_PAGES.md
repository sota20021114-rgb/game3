# GitHub Pages 手順

このゲームは `docs` フォルダを GitHub Pages の公開元にする形で公開できます。

## 1. 公開用ファイルを作る

PowerShell でこのフォルダを開きます。

```powershell
cd C:\Users\koyo1\Desktop\game
node .\scripts\build-static.mjs docs
```

終わると `C:\Users\koyo1\Desktop\game\docs` が作られます。

`npm run build:github-pages` でも同じですが、PowerShell の設定によっては `npm.ps1` が止まることがあるので、上の `node` 直実行がいちばん確実です。

## 2. GitHub にリポジトリを作る

1. GitHub にログインする
2. 右上の `+` から `New repository` を開く
3. 好きな名前でリポジトリを作る

例:

- リポジトリ名: `word-solitaire`

## 3. ファイルを GitHub に上げる

いちばん簡単なのは `GitHub Desktop` を使う方法です。

### GitHub Desktop を使う方法

1. GitHub Desktop を入れる
2. `Add an Existing Repository from your Hard Drive` を選ぶ
3. `C:\Users\koyo1\Desktop\game` を選ぶ
4. Git 管理されていなければ、そのまま作成する
5. 変更をコミットする
6. `Publish repository` を押す

`docs` フォルダも一緒に上がっていれば大丈夫です。

### ブラウザだけで上げる方法

1. 作ったリポジトリを開く
2. `uploading an existing file` を押す
3. このフォルダの中身をまとめてアップする

この方法でもできますが、更新が多いなら `GitHub Desktop` の方が楽です。

## 4. GitHub Pages を有効にする

1. リポジトリの `Settings` を開く
2. 左の `Pages` を開く
3. `Build and deployment` の `Source` を `Deploy from a branch` にする
4. `Branch` を `main` にする
5. フォルダを `/docs` にする
6. `Save` を押す

しばらくすると公開 URL が出ます。

例:

```text
https://あなたのGitHubユーザー名.github.io/word-solitaire/
```

## 5. スマホで開く

公開 URL をスマホのブラウザで開けば、そのまま遊べます。

ホーム画面に置くなら:

- iPhone: 共有メニューから `ホーム画面に追加`
- Android: ブラウザメニューから `ホーム画面に追加`

## 更新するとき

ゲームを直したあと、毎回これだけです。

```powershell
cd C:\Users\koyo1\Desktop\game
node .\scripts\build-static.mjs docs
```

そのあと `docs` の更新も含めて GitHub に push します。

## 補足

- GitHub Pages は静的サイト向けです。このゲームの HTML/CSS/JavaScript なら問題なく公開できます。
- `docs/.nojekyll` も自動で作られるので、GitHub Pages 側の余計な変換を避けやすくしています。
