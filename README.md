## ロボ団いりなか校独自の成果物を紹介するポートフォリオサイトのソース

Website location: https://irinaka-robodone.github.io/irinaka-pf-2023/

## Contents

content
├── apps # 制作したアプリの紹介ページ
│   | ...
├── pages # トップページ、問い合わせページ、サイトの紹介ページ
│   | ...

## Deevloper's guide

This website is created based on [@yinkakun's gatsby-starter-glass](https://github.com/yinkakun/gatsby-starter-glass).


1. Clone this repository
  ```bash
  git clone {this repo}
  ```

1. Install Node dependencies
  ```bash
  yarn install
  ```

  or 

  ```bash
  npm i
  ```

1. Start this website on live server mode
  ```bash
  npm run start
  ```

1. Build this website locally
  You don't need to do this normally. We build & deploy this website through github actions' workflows. No need to commit built sources to this remote repository.

1. Commit changes & Push
  ```bash
  git add {path/to/changes}
  git commit -m "{commit message}"
  ```
  
  ```bash
  git push -u origin feature/{feature_name}
  ```

