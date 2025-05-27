# 郵便番号検索SPA

郵便番号を入力して住所を検索できるシングルページアプリケーション（SPA）です。  
zipcloudのAPIを利用してリアルタイムに住所を取得し、検索履歴も保持されます。

## 🔧 使用技術

- フレームワーク: React 19 + Vite
- 言語: TypeScript
- スタイル: Sass（SCSS）
- Linter / Formatter: ESLint + Prettier
- テスト: Vitest + Testing Library
- zipcloud API (https://zipcloud.ibsnet.co.jp/doc/api)

## 📦 セットアップ手順

1. リポジトリをクローン

```
git clone https://github.com/your-username/react-zipcode-search.git
cd react-zipcode-search
```

2. 依存関係のインストール

```
npm install
```

3. 開発サーバーの起動

```
npm run dev
```

ブラウザで http://localhost:5173 にアクセスして動作を確認してください。

## 🧪 テスト実行方法

このプロジェクトは UI コンポーネントの動作を確認するために、Vitest と React Testing Library を使用しています。

テストの実行

```
npm run test
```

すべてのテストファイルが自動的に実行されます。

テスト UI を使用する（インタラクティブモード）

```
npm run test:ui
```

ブラウザでインタラクティブにテスト結果を確認できます（Vitest UI）。
