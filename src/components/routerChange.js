"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function RouterChange({ path }) {
  const router = useRouter();

  useEffect(() => {
    // 页面加载时执行跳转
    router.push("/" + path);
  }, [router, path]);

  return null;
}
