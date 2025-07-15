import React, { Suspense } from "react";
import Link from "next/link";

import { getAllNotes } from "@/lib/redis";
import SidebarNoteList from "@/components/SidebarNoteList";
import Image from "next/image";
import EditButton from "./EditButton";
import NoteListSkeleton from "./NoteLIstSkeleton";
import SidebarSearchField from "./siderSearch";
export default async function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <Link href={"/"} className="link--unstyled">
          <section className="sidebar-header">
            <Image
              className="logo"
              src="/logo.svg"
              width="22"
              height="20"
              alt=""
              role="presentation"
            />
            <strong>我的笔记列表</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          {/* 搜索栏 */}
          <SidebarSearchField></SidebarSearchField>
          <EditButton noteId={null}>新建</EditButton>
        </section>
        <nav>
          {/* 加载骨架屏 */}
          <Suspense fallback={<NoteListSkeleton />}>
            {/* 笔记简单列表 */}
            <SidebarNoteList />
          </Suspense>
        </nav>
      </section>
    </>
  );
}
