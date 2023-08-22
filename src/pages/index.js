import React from 'react';

export default function Home() {
  return (
    <>
      <ul class="max-w-xl space-y-1 text-gray-500 list-disc list-inside p-10 mx-auto border tracking-widest dark:text-slate-100">
        <li>ログイン認証機能です。</li>
        <li>登録時は、DBに同一のメールアドレスが存在するかを最初にチェックします。</li>
        <li>マイページにアクセスする際、ログインしていない場合はリダイレクトされます。</li>
        <li>mongoDB、next.js、tailwindを使用しています。</li>
        <li>ログアウト時にはlocalStrageからjwtを削除しています。</li>
        <li>
          ※This Serverless Function has timed out.<br />
          現状サーバーレス関数の10秒タイムアウトでエラーが出ます。
          60秒に一旦変更をしようとしましたが、hobbyプランでは変更できないようです。
        </li>
      </ul>
    </>
  );
}
