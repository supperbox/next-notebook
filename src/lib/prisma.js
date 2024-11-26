import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";

const prisma = new PrismaClient();

export const newNote = async (data) => {
  console.log("创建笔记", data);
  const uuid = Date.now().toString();
  let title = data.title;
  let content = data.content;
  await prisma.note.create({
    data: {
      id: uuid,
      title,
      content,
      updateTime: dayjs().format("YYYY-MM-DD hh:mm:ss"),
    },
  });
  return uuid;
};

export const findNote = async (id) => {
  let res;
  if (!id) {
    res = await prisma.note.findMany();
  } else {
    res = await prisma.note.findUnique({
      where: {
        id: id,
      },
    });
  }
  console.log("findNote 查询笔记结果", res);
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
