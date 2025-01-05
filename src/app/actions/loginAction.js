"use server";

import { redirect } from "next/navigation";
import { newUser, findUser, deleteUser } from "@/lib/prisma";

export async function login(account, password) {
  const data = {
    username: account,
    password: password,
  };
  const user = await findUser(data);
  console.log("查询用户结果", user);
  if (user) {
    redirect("/"); // 跳转到首页
  } else {
    redirect("/login");
  }
}

export async function logout() {}

// 注册
export async function signIn(account, password) {
  const data = {
    username: account,
    password: password,
  };
  const user = await newUser(data);
  console.log("注册用户结果", user);
  if (user) {
    redirect("/"); // 跳转到首页
  } else {
    redirect("/login");
  }
}
