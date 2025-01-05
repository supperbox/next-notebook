import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";

const prisma = new PrismaClient();

export const newNote = async (data) => {
  const uuid = Date.now().toString();
  let title = data.title;
  let content = data.content;
  await prisma.note.create({
    data: {
      id: uuid,
      title,
      content,
      updateTime: dayjs().format("YYYY-MM-DD hh:mm:ss"),
      authorId: data.authorId,
    },
  });
  return uuid;
};

// 查找笔记
export const findNote = async (id, authorId) => {
  let res;
  if (!id) {
    res = await prisma.note.findMany({
      where: {
        authorId: authorId,
      },
    });
  } else {
    res = await prisma.note.findUnique({
      where: {
        id: id,
        authorId: authorId,
      },
    });
  }
  return res ?? [];
};

export const deleteNote = async (id) => {
  const res = await prisma.note.delete({
    where: {
      id: id,
    },
  });
  return res;
};

export const updateNote = async (id, note) => {
  const res = await prisma.note.update({
    where: {
      id: id,
    },
    data: {
      title: note.title,
      content: note.content,
      updateTime: dayjs().format("YYYY-MM-DD hh:mm:ss"), // 保存时间
    },
  });
  console.log("update更新笔记", id, note);
  return res;
};

// 用户相关
// 创建一个新用户
export const newUser = async (data) => {
  const res = await prisma.user.create({
    data: {
      id: Date.now().toString(), // 生成一个唯一的 ID
      username: data.username,
      password: data.password,
    },
  });
  return res;
};

// 查找用户
export const findUser = async (data) => {
  const res = await prisma.user.findUnique({
    where: {
      username: data.username, // 根据用户名和密码查找用户
      password: data.password,
    },
  });
  return res;
};

// 删除用户
export const deleteUser = async (id) => {
  const res = await prisma.user.delete({
    where: {
      id: id, // 根据 ID 删除用户
    },
  });
  return res;
};
