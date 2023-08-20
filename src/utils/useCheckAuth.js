import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

const useAuthCheck = () => {
  const [loginUser, setLoginUser] = useState({ username: '', email: '' });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
    try {
      const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY);
      console.log('ログイン画面です',decoded);
      setLoginUser(decoded);
    } catch (error) {
      router.push('/login');
    }
  }, [router]);

  return loginUser;
};

export default useAuthCheck;
