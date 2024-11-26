"use client"; // 因为使用了react hooks，所以需要使用client组件

import { useState } from "react";
import NotePreview from "@/components/NotePreview";
import { useActionState } from "react-dom";
import Image from "next/image";
import { saveNote, delNote } from "@/app/actions/noteAction";
import SaveButton from "@/components/buttons/SaveButton";
import DeleteButton from "@/components/buttons/DeleteButton";

export default function NoteEditor({ noteId, initialTitle, initialBody }) {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);

  // const [message, saveFormAction] = useActionState(saveNote, null);
  // const [delState, delFormAction] = useActionState(deleteNote, null);

  // 草稿模式 不展示删除按钮
  const isDraft = !noteId;

  return (
    <div className="note-editor">
      <form className="note-editor-form" autoComplete="off">
        <div className="note-editor-menu" role="menubar">
          <input type="hidden" name="noteId" value={noteId} />
          <SaveButton formAction={saveNote} />
          <DeleteButton isDraft={isDraft} formAction={delNote} />
        </div>
        <label className="offscreen" htmlFor="note-title-input">
          新建标题
        </label>
        <input
          id="note-title-input"
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className="offscreen" htmlFor="note-body-input">
          新建笔记内容
        </label>
        <textarea
          name="body"
          value={body}
          id="note-body-input"
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
      {/* 右侧展示预览状态 */}
      <div className="note-editor-preview">
        <div className="label label--preview" role="status">
          预览
        </div>
        <h1 className="note-title">{title}</h1>
        <NotePreview>{body}</NotePreview>
      </div>
    </div>
  );
}
