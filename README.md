# NAME

Auth

## Detail

ログイン認証機能です。

登録時は、DBに同一のメールアドレスが存在するかを最初にチェックします。

マイページにアクセスする際、ログインしていない場合はリダイレクトされます。

ログアウト時にはlocalStrageからjwtを削除しています。


## Stack

* Next.js
* Node.js
* mongoDB
* Tailwind
* Vercel

## figma

https://www.figma.com/file/02oytvpsvJ3fcSS2esQNXy/%E8%AA%8D%E8%A8%BC%E3%83%BB%E8%AA%8D%E5%8F%AF%E3%83%95%E3%83%AD%E3%83%BC?node-id=0%3A1&t=h9gqRe3MoEsJn4zh-1

## Usage

## Note

※This Serverless Function has timed out.

現状サーバーレス関数の10秒タイムアウトでエラーが出ます。 60秒に一旦変更をしようとしましたが、hobbyプランでは変更できず。

localサーバとのみDBと連携しています。

