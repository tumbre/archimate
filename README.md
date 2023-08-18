## サービス概要
新たな建築と出会い、訪れた建築を記録したい人に、  
建築に関する情報の収集、記録機能を提供する、  
建築特化型サービスarchimateです。  
<br>
<img width="1200" src="https://i.gyazo.com/4abc834c8eaec60a73d29819760778a1.jpg">
<img width="350" src="https://i.gyazo.com/a9a0bd632c9aeb24c3ced3ca29d395ae.jpgg">
<br>
## URL
https://archim8.net  
画面中部の「マッチングする」ボタンからログインせずにマッチング機能をご利用頂けます。  
右上のログインからゲストログインを選択すると、メールアドレス、パスワードを入力せずにログインできます。
<br>
## 使用技術  
- Ruby 3.2.2
- Ruby on Rails 6.1.7.3
- PostgreSQL 14.8
- Puma
- AWS S3
- Heroku
- Mpabox API
- X API
## メインのターゲットユーザー  
建築学生、美大生、建築に興味はあるけど知識はあまり無い人  
自分がこれまでに訪れた建築を記録したい人  
色んな建築を見に行きたいけど、具体的にどこに行けばいいのかわからず、とりあえずググってみるも良い情報が得られず困っている人  
<br>
## ユーザーが抱える課題  
建築について検索しても、まとめサイトの薄い情報か過度に難解な情報ばかりで気軽に行ける建築の情報が手に入らない  
自分がこれまでに行った建築の情報が埋もれてしまい、自分でも把握できない  
自分が感じたことを言語化する習慣をつけることで、案出しの際の材料を集めておきたい  
<br>
## 解決方法  
- ユーザーは、自分が訪れた建築を記録できる  
- ユーザーは、他のユーザーが記録した建築を閲覧できる  
- ユーザーは、自分に合う建築を診断できる
<br><br>
## 実装予定の機能  
- 未ログインユーザー  
	- 未ログインユーザー用のトップページを表示できる  
  		- LPを見ることができる  
		- マッチング機能で自分に合った建築を診断できる  
		- マッチング結果を見ることができる  
  		- マッチング結果をツイートできる  
	- ログインできる  
		- メールアドレスとパスワードでログインできる  
		- Twitterログインができる  
  		- パスワードを再発行できる  
	- 会員登録できる  
		- ユーザーネーム、メールアドレス、パスワードで会員登録できる  
  	- プライバシーポリシー、利用規約を見ることができる  
  <br>
- ログインユーザー  
	- トップページを表示できる  
 		- 現在地から半径〜km以内の建築をランダム表示できる  
  		- 他のユーザーが記録した建築をLikeできる  
    		- 建築に関する情報を見ることができる  
	- 他のユーザーが記録した建築を詳細検索できる  
		- フリーワード検索ができる  
  		- 所在地ごとにグループ分けされたメニューから絞り込み検索ができる  
		- 特徴（眺望good、木質空間、コンクリート、直線美、曲線美、不朽の名作、、、）から検索できる  
	・- 建築を記録できる  
	- ユーザーが記録した建築を一覧表示、詳細表示、編集、削除できる  
 	- Likeした建築を一覧表示、詳細表示、削除、検索できる  
		- Likeした建築の住所からマップに遷移できる  
		- マイページを表示できる  
 	- ログページでユーザーに関する情報を見ることができる  
  		- プロフィールを編集、削除できる
		- アクティビティを見ることができる  
		- ユーザーが記録した建築の所在地に応じて、色分けされた日本地図を表示する（関東制覇率〜%とか）  
  <br>
- 管理ユーザー  
	- ユーザーの一覧、編集、削除、検索ができる  
	- 建築の一覧、編集、削除、検索ができる  
	- Likeの一覧、編集、削除、検索ができる  
	- Situationの一覧、編集、削除、検索ができる  
	- Featureの一覧、編集、削除、検索ができる  
<br><br>
## なぜこのサービスを作りたいのか？
建築学生時代、なかなか実際に見に行ける建築の情報を集めることができませんでした。<br>
マップから付近の建築を探せるサービスは既にあるが、CGMではなくメディアであるため、サービス上で写真を見ることができず使っていて楽しくない。<br>
建築専門誌のオンラインサービスもあるが、情報量は優れている一方でユーザービリティが低く、サブスク料金も高価で敷居が高い。<br>
もっと気軽に建築の情報を得たい。<br>
加えて、自分がこれまでに訪れた建築を、自分の写真と言葉で記録していくことで達成感が得られるようなサービスが欲しい。<br>
そんな想いから、本サービスを作ろうと思いました。<br>
## figmaリンク  
https://www.figma.com/file/BaXInUfwCKFp8vtqC02B7c/%E7%94%BB%E9%9D%A2%E9%81%B7%E7%A7%BB%E5%9B%B3?node-id=0-1&t=9qrkiJEpzoTeg0De-0  
<br>
## ER図リンク  
https://gyazo.com/cc78f93b47d675b71a6dcd67b3c1cfe7  
<br>
## スケジュール<br>
企画〜技術調査：3/25 〆切
<br>
README〜ER図作成：4/10 〆切
<br>
メイン機能実装：6/16 〆切
<br>
β版をRUNTEQ内リリース（MVP）7/4 〆切
<br>
本番リリース：7/31
<br>
  
