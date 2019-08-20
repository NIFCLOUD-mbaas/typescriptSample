# NIFCloud mobile backend SDK implement with typescript + nodejs
## **Employee Management**  
NIFCloud mobile backend JavaScript SDKを利用して、TypeScriptとNode.jsで実装しているサンプルアプリです。  
社員を追加、編集、削除、検索という管理機能ができる社員管理アプリです。  

<img src="./readme-img/overview.gif" width="480px;">

# アプリの機能
こちらのサンプルは実現する機能は以下のようにあります。
* [x] 新しい社員を追加
* [x] 社員の情報を編集
* [x] 名前、部署、年齢、性別などの絞り込み条件で検索
* [x] 社員を削除

# 内容:
- [ニフクラ mobile backendとは？](#ニフクラ-mobile-backendって何？？)  
- [動作環境](#動作環境)  
- [手順](#手順)  
- [参考](#参考)

# ニフクラ mobile backendとは？
* スマートフォンアプリのバックエンド機能（プッシュ通知・データストア・会員管理・ファイルストア・SNS連携・位置情報検索・スクリプト）が開発不要、しかも基本無料(注1)で簡単に使えるクラウドサービスです。今回は主にデータストア機能を利用します。
* 注1：詳しくは[こちら](https://mbaas.nifcloud.com/price.htm)をご覧ください
![image](/readme-img/002.png)

# 動作環境
ローカルで動作確認する環境を準備には以下の手順を行ってください。
1. [Node.js](https://nodejs.org/en/)をインストール
1. [VS Code](https://code.visualstudio.com/)をインストール
1.  [Typescript](https://www.npmjs.com/package/typescript)をインストール
`npm`を経由し、TypeScriptをインストールすることが簡単です。

```
npm install -g typescript
```

# 動作確認する手順

## 1. ニフクラウドアカウントの登録・新規アプリを作成
- [ニフクラウドmobile backend の会員登録](https://console.mbaas.nifcloud.com/signup)・ログインとアプリの新規作成
- 上記リンクから会員登録（無料）をします。登録ができたらログインをすると下図のように「アプリの新規作成」画面が出るのでアプリを作成します
  ![image](/readme-img/003.png)
- アプリの作成が完了されますと、下図のように、作成されたアプリのAPIキー（アプリケーションキーとクライアントキー）が表示されます。こちらのキーはアプリ設定画面でも確認されます。
  ![image](/readme-img/004.png)

## 2. GitHubからサンプルプロジェクトのダウンロード
```
git clone --depth=1 https://github.com/NIFCloud-mbaas/typescriptSample.git <project_name>
```
※`<project_name>`には好みのプロジェクト名を入れてください。
- dependenciesをインストールします
```
cd <project_name>
npm install
```

## 3. VScodeでプロジェクトを起動

- VScodeを開いて、Fileから、Openで上記でダウンロードしたプロジェクトを選択します。  
![image](/readme-img/005.png)
- ソースコードのフォルダ構成は以下のようになります。  
![image](/readme-img/006.png)

## 4. APIキーを設定

- `.env`ファイルを開いて、それぞれ`=`の後ろ部分にあるYOUR_APPLICATION_KEYとYOUR_CLIENT_KEYを書き換えます。
![image](/readme-img/007.png)

## 5. アプリのデータを準備

- ニフクラ mobile backendにログインして、該当するアプリを選択します。「データストア」タブを選択し、「＋作成」の緑ボタンをクリックします。
表示されるメニューから`インポート`を選択します。

![image](/readme-img/008.png)  

- プロジェクト内にある`Data/employee.json`ファイルを選択してインポートします。クラス名を`Employee` を入力します。

![image](/readme-img/009.png)  

- インポート後のデータは以下のとおりです。

![image](/readme-img/010.png)  

## 6. ビルドを実施・結果を確認

- コマンドラインにて以下のコマンドを実施します。
```
cd <project_name>
npm run build
npm run start
```
- ブラウザで`http://127.0.0.1:3000`へアクセスします。
- `[Add new Employee]`ボタンをクリックし、新規社員を追加します。
![image](/readme-img/011.png)

- 新規社員を入力する画面にて、情報を入力し、"Save" ボタンを押します。
![image](/readme-img/012.png)

- mobile backendの管理画面で結果を登録したことを確認します。
![image](/readme-img/013.png)

- 社員の情報編集および削除は一覧にある`Edit`と`Delete`ボタンにて実施してください。

# コード解説
  ## 1. 構造を説明

ビルドした後、`dist`フォルダが作成されます。`src`フォルダにあるTypeScript (`.ts`)は`dist`フォルダのJavaScript (`.js`)にコンパイルされます。

各フォルダの内容は以下の通りです。

> **注意** `npm run build`でアプリのビルドを実施されます。

| フォルダ | 説明 |  
| ------------------------ | --------------------------------------------------------------------------------------------- |  
| **dist**                 | ビルド後のコードが含まれています                                                     |  
| **node_modules**         | 全てのnpm dependenciesが含まれています                                                 |  
| **src**                  | typescriptのコードが含まれています               |  
| **src/controllers**      | HTTPからリクエストのリダイレクト・コントロールするファイルが含まれています                                                    |  
| **src/public**           | Front endのファイルが含まれています                                                        |  
| **src/types**            | ncmb.d.tsファイルが含まれています                                                        |  
| **src**/server.ts        | Entry point to your express app                                                               |  
| **views**                | HTMLをRenderする用Pug templateファイルが含まれています                                           |  
| .env             　　　　 | `YOUR_APPLICATION_KEY` と `YOUR_CLIENT_KEY`を設定するファイル    |  
| .copyStaticAssets.ts     | distへ画像、css, jsをコピーするスクリプト                                     |  
| package.json             | 使用しているdependenciesが含まれています                                               |  
| tsconfig.json            | TypeScriptのコンパイル設定が含まれています                                               |  

### TypeScriptのコンパイル設定
- コンパイルを設定するために`tsconfig.json` ファイルを使用します。 詳細設定は[こちら](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) をご参考ください。

```json
"compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "noImplicitAny": false,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
        "*": [
            "node_modules/*",
            "src/types/*"
        ]
    }
},
"include": [
    "src/**/*.ts"
]
```
  ## 2. ソースコードを説明
  - `package.json`ファイルにてdependenciesが設定されて、本サンプルにて使用しているmobile backendのJavaScript SDKのバージョンが3.0.0と指定しております。

  ```json
  "dependencies": {
    ...
    "ncmb": "^3.0.0",
    ...
  }
  ```
  - 定義ファイルについて、[dst-gen](https://github.com/Microsoft/dts-gen)ツールでDefinitelyTypedを作成します。

  ```
  dts-gen -m ncmb
  ```
  - dts-genを実施した後で`ncmb.d.ts`が作成されて、`src/types`フォルダに`ncmb.d.ts`をコピーします。
  - `tsconfig.json`コンフィッグファイルを設定することにより`ncmb.d.ts`へ参照するようになります。


  ```json
  "baseUrl": ".",
  "paths": {
        "*": [
            "node_modules/*",
            "src/types/*"
        ]
    }
  ```
  -  `.env`ファイルで手順の説明にて`YOUR_APPLICATION_KEY` と `YOUR_CLIENT_KEY`を設定します。
  -  ncmbを起動するために以下のように`src/services/baseService.ts`ファイルを作成します。

```ts
import NCMB from "ncmb";
export default class BaseService {
    public ncmb: any
    constructor () {
        // Get application key from env file
        let appKey = process.env.YOUR_APPLICATION_KEY
        // Get client key from env file
        let clientKey = process.env.YOUR_CLIENT_KEY
        this.ncmb = new NCMB(appKey,clientKey,"")
    }
}
  ```

  - 追加、編集、削除と検索機能を実施するように`src/services/employeeService.ts`ファイルを作成します。

```ts
import BaseService from "./baseservice";

class EmployeeServices extends BaseService {
    constructor () {
        super()
    }

    /**
     * Get all Employee
     */
    public async getEmployees() {
        let employeeObject = this.ncmb.DataStore("Employee")
        let object = {}
        await employeeObject.fetchAll()
        .then(function(results) {
            object = results;
        })
        .catch(function(err){
            console.log(err);
        });
        return object
    }
    <<省略>>
}
export default new EmployeeServices()
```

  - UIファイルをRenderingして、リダイレクトするため、`src/controllers/home.ts`ファイルを作成します。(pugテンプレート)


```ts
import { Request, Response } from "express";
import employeeServices from "../services/employeeServices";

/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response) => {
  var employee = await employeeServices.getEmployees()
  res.render("home", {
    title: "Home",
    employee: employee
  });
};

<<省略>>
```

   - 最後に、`src/controllers/home.ts`から返却された値を表示するために `views/home.pug`ファイルを作成します。


```js
extends layout

block content
  div.header-title Welcome to NCMB sample
  br
  div.row
    div.col-md-6.align-self-center
      h2 Employee Details
    div.col-md-6
      button.btn.btn-dark(id ="btn-new" type="button") Add new Employee
  form(action="../employee/search" method="post")
    div.row
      div.col-md-3
      div.col-md-2
        select.browser-default.custom-select(name="colName")
          option(value="None" selected=(colName == 'None') ) Select filed
          option(value="Name" selected=(colName == 'Name') ) Name
          option(value="Department" selected=(colName == 'Department') ) Department
          option(value="Age" selected=(colName == 'Age')) Age
          option(value="Gender" selected=(colName == 'Gender')) Gender
      div.col-md-3
        input.form-control(type="text" placeholder="Search" aria-label="Search" name="searchCondition" value=(searchCondition) )
      div.col-md-1
        button.btn.btn-dark(type='submit') Search
      div.col-md-3

  table.table.table-striped.table-hover.table-main
    thead
      tr
        th(scope='col') Name
        th(scope='col') Department
        th(scope='col') Age
        th(scope='col') Gender
        th.action(scope='col') Action
    tbody
      if employee
        each val in employee
          tr
            td= val.Name
            td= val.Department
            td= val.Age
            if val.Gender == 1
              td Man
            else
              td Woman
            td.action
              button.btn-edit.btn.btn-warning(type="button" data-id=(val.objectId)) Edit
              button.btn-delete.btn.btn-danger(type="button" data-id=(val.objectId) data-name=(val.Name)) Delete
        else
          tr
            td.no-data-result(colspan="5") No result data.
      else
        tr
          td.no-data-result(colspan="5") No entry data.
```


# Contributing
- Fork it!
- Create your feature branch: git checkout -b my-new-feature
- Commit your changes: git commit -am 'Add some feature'
- Push to the branch: git push origin my-new-feature
- Submit a pull request

# License
MITライセンス  
NIFCloud mobile backendのJavascript SDKのライセンス
