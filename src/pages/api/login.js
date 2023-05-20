import React from 'react';
import jwt from 'jsonwebtoken';
import connectDB from '@/utils/connectDB';
import { UserModel } from '@/utils/shemaModels';

const Login = async (req, res) => {
  try {
    //フロントエンド側からのデータを受け取る
    const { email, password } = req.body;
    //MongoDBに接続してユーザーを探す
    await connectDB();
    const saveUser = await UserModel.findOne({ email: email });

    if (saveUser) {
      if (password === saveUser.password) {
        //jsonwebtokenでトークンを発行する
        const token = jwt.sign(
          {
            username: saveUser.username,
            email: email,
          },
          process.env.NEXT_PUBLIC_SECRET_KEY,
          { expiresIn: '2m' }
        );
        // 取得したトークンをクライアント側に返す
        console.log(token);
        return res.status(200).json({ message: 'ログイン成功', token: token });
      } else {
        return res.status(400).json({ message: 'パスワードが間違っています' });
      }
    } else {
      // ユーザーがDBに存在しない場合
      console.log(
        JSON.stringify({
          email,
          password,
        })
      );
      return res
        .status(400)
        .json({ message: 'ユーザーが存在しません。登録してください' });
    }
  } catch (error) {
    return res.status(400).json({ message: 'ログイン失敗' });
  }
};

export default Login;
