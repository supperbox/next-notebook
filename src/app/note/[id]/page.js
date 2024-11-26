import Note from "@/components/Note";
import { findNote } from "@/lib/prisma";
// import { getNote } from "@/lib/note";

export default async function Page({ params }) {
  // 动态路由 获取笔记 id
  const { id: noteId } = await params;

  const note = await findNote(noteId);

  console.log("/note/page.js详情页面", note, noteId);

  // 为了让 Suspense 的效果更明显
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  await sleep(1000);

  if (note == null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">点击左侧列表，添加笔记</span>
      </div>
    );
  }

  return <Note noteId={noteId} note={note} />;
}
