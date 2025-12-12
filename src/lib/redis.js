import Redis from "ioredis";

// 使用环境变量连接 Redis（如果未设置，则使用默认本地连接）
const redis = new Redis(process.env.REDIS_URL || undefined);

// 捕获并记录连接错误，避免未处理的异常导致大量日志或进程异常
redis.on("error", (err) => {
  // 只打印警告，不抛出，生产中可以替换为更完善的监控/重试策略
  // eslint-disable-next-line no-console
  console.warn(
    "[ioredis] connection error:",
    err && err.message ? err.message : err
  );
});

redis.on("connect", () => {
  // eslint-disable-next-line no-console
  console.log("[ioredis] connected");
});

const initialData = {
  1702459181837:
    '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
  1702459182837:
    '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
  1702459188837:
    '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}',
};

export async function getAllNotes() {
  const data = await redis.hgetall("notes");
  if (Object.keys(data).length == 0) {
    await redis.hset("notes", initialData);
  }
  return await redis.hgetall("notes");
}

export async function addNote(data) {
  const uuid = Date.now().toString();
  await redis.hset("notes", uuid, data);
  return uuid;
}

export async function updateNote(uuid, data) {
  await redis.hset("notes", uuid, data);
}

export async function getNote(uuid) {
  return JSON.parse(await redis.hget("notes", uuid));
}

export async function delNote(uuid) {
  return redis.hdel("notes", uuid);
}

export default redis;
