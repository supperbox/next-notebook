"use client";

import SidebarNoteItem from "@/components/SidebarNoteItem";
import { useSearchParams } from "next/navigation";
import { Children } from "react";

export default function SidebarNoteListFilter({ children }) {
  const searchParams = useSearchParams();
  const searchText = searchParams.get("q");

  // 兼容所有 children 结构
  // props.children 可能是单个元素、数组，甚至是 null 或字符串。直接用 children.map 可能会报错，但 React.Children.map 能保证无论 children 是什么类型，都能安全遍历。
  // 自动处理 key
  // Children.map 会自动为每个子元素分配 key（如果你没手动指定），有助于 React 正确地识别和渲染列表。
  return (
    <ul className="notes-list">
      {Children.map(children, (child, index) => {
        const title = child.props.title;
        if (
          !searchText ||
          (searchText && title.toLowerCase().includes(searchText.toLowerCase()))
        ) {
          return <li key={index}>{child}</li>;
        }
        return null;
      })}
    </ul>
  );
}
