import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //ログイン後にトップページへ移動させる
  //フォームデータをapi側にリクエストを送る
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    // const res = await fetch('https://auth-next-ochre.vercel.app/api/login', {
    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    //api側のレスポンスを受け取る
    const data = await res.json();
    if (data.token) {
      alert('ログイン成功');
      localStorage.setItem('token', data.token);
      router.push('/mypage');
    } else {
      setError(data.message);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-medium text-center mb-8 dark:text-slate-100">ログイン</h2>
      <div className="w-full max-w-xs mx-auto">
        <form
          onSubmit={submitHandler}
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-slate-100"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              メールアドレス
            </label>
            <input
              onChange={changeHandler}
              value={email}
              type="email"
              name="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              パスワード
            </label>
            <input
              onChange={changeHandler}
              value={password}
              type="password"
              name="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {error && <p className="text-black mb-8">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              ログイン
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
