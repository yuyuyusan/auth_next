import useCheckAuth from '../utils/useCheckAuth';
import { useRouter } from 'next/router';

const Mypage = () => {
  const auth = useCheckAuth();
  const router = useRouter();
  const submitLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    alert('ログアウトしました');
    router.push('/');
  };
  return (
    <div>
      <h2 className="text-xl font-medium text-center mb-8">マイページ</h2>
      {auth && (
        <>
          <p>{auth.username}</p>
          <p>{auth.email}</p>
        </>
      )}

      <form onSubmit={submitLogout}>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          ログアウト
        </button>
      </form>
    </div>
  );
};

export default Mypage;
