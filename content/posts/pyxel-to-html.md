---
title: Pyxel で作ったゲームアプリを HTML に変換しよう
date: 2024-05-11
tags:
  - pyxdel
  - html
  - "2023"
  - student
social_image: /media/logo/robodone_logo.png
description: Pyxel で作ったゲームアプリを HTML に変換する方法、ブラウザから遊べるようにする方法を紹介します。
---

Pyxel で作ったゲームアプリを HTML に変換するのは簡単です！

以下の見出しの順に進めていけば、Pyxel で作ったゲームアプリを HTML に変換して、ブラウザから遊べるようにすることができます。

## Python 実行環境を整える

まずは手元の PC で Python が実行できる環境を整えましょう。

Python がインストールされていない場合は、[Python の公式サイト](https://www.python.org/) からインストーラーをダウンロードしてインストールしてください。

以下のサイトでは OS 別の Python のインストール方法、実行環境の整え方が解説されています。参考にしてください。

- [Python のインストール方法](https://www.python.jp/install/install.html)

## Pyxel をインストールする

次に Pyxel をインストールします。
Pyxel とはロボ団いりなか校で卒業制作の開発にも使った Python でゲームを開発するための比較的新しめのライブラリで、作ったゲームを HTML に変換できるのも特徴です。

以下のコマンドをターミナル（端末）で実行して Pyxel をインストールしてください。

```bash
pip install -U pyxel
```

pip not found と表示される場合は、Python のインストール時に pip をインストールするオプションを選択していない可能性があります。その場合は Python がインストールされていないか、Python のパスが通っていない可能性があります。

以下のサイトを参考に Python のインストール方法、パスの通し方を確認してください。

- [Python のインストール方法](https://www.python.jp/install/install.html)

## Pyxel でつくられたゲームを用意する

Python の実行環境と Pyxel のインストールが完了したら、Pyxel でゲームを作りましょう。
ただしゼロからつくる必要はありません。ここではゲームを HTML 化する方法を紹介するので、ロボ団いりなか校でこれまでに制作したゲームのソースコードを使います。制作したほとんどのゲームのソースコードは [ロボ団いりなか校のリポジトリ一覧 | GitHub](https://github.com/irinaka-robodone?tab=repositories) に公開しているので、１つを選んでダウンロードしてください。

ただし Pyxel で開発していないリポジトリも含まれるので以下のリポジトリから選ぶとよいです。

- [tetris-2023](https://github.com/irinaka-robodone/tetris-2023)
- [othello-2023](https://github.com/irinaka-robodone/othello-2023)
- [snake-game-2023](https://github.com/irinaka-robodone/snake-game-2023)
- [puzzle-2023](https://github.com/irinaka-robodone/puzzle-2023)
- [typing-game-2023](https://github.com/irinaka-robodone/typing-game-2023)
- [block-kuzushi-2023](https://github.com/irinaka-robodone/block-kuzushi-2023)
- [air-hockey-2023](https://github.com/irinaka-robodone/air-hocky-2023)

GitHub リポジトリをダウンロードするには、リポジトリのトップページにある **Code** ボタンをクリックして **Download ZIP** を選択してください。ソースコードが Zip 形式で圧縮されたものがダウンロードされます。

![GitHub リポジトリを Zip 形式でダウンロードする](./pyxel-to-html/github-download-zip.jpg)

ダウンロードした Zip ファイルを解凍すると、ゲームのソースコードが含まれているフォルダができます。このフォルダを VSCode で開いてください。

![解凍したフォルダーの見た目 (Windows11 の例)](./pyxel-to-html/unzipped-folder.jpg)

VSCode がインストールされていない場合は、**[VSCode の公式サイト](https://code.visualstudio.com/)** からインストーラーをダウンロードしてインストールしてください。

## Pyxel でゲームが動くか確認する

入手したソースコードが入ったフォルダーを VSCode で開けたら、ゲームが動くか確認しましょう。

VSCode 上で以下のように `src/app.py` か `src/main.py`, `src/game.py` を見つてください。これがゲームを動かすメインのスクリプトファイルです。

![src/app.py を開いて実行する例](./pyxel-to-html/src-app-py.jpg)

画像のようにエディター画面で `src/app.py` を開いたら、右上の再生ボタンをクリックしてください。ゲームが起動すれば、Pyxel で作ったゲームが動くことが確認できます。

再生ボタンを押しても何も起こらず、スクリプトのエラーでもない場合は Python, Pyxel のインストールがうまくいっていない可能性があります。

また、それでもうまくいかない場合は、