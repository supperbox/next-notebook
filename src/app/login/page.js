"use client";

import { useState } from "react";
import { login, logout, signIn } from "../actions/loginAction";

export default function Page({ children }) {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <div className="flex gap-[20px] items-center my-[20px]">
        <div>账号</div>
        <input
          name="username"
          type="text"
          value={account}
          onChange={(e) => {
            console.log(e.target.value);
            setAccount(e.target.value);
          }}
        />
      </div>
      <div className="flex gap-[20px] items-center my-[20px]">
        <div>密码</div>
        <input
          name="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-center gap-[20px]">
        <button onClick={() => login(account, password)}>提交</button>
        <button onClick={() => signIn(account, password)}>注册</button>
      </div>
    </div>
  );
}
